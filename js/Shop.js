class Shop {
  constructor() {
    this.upgrades;
  }

  getDefaults() {
    this.upgrades = [
      {
        name: "Axle",
        description: "Allows submirine moves backwards and forwards",
        bought: false,
        price: 20000
      },
      {
        name: "Engine",
        description: "Increases submurine speed by 25%",
        bought: false,
        price: 30000
      }
    ];
  }

  init() {
    if (localStorage.upgrades === undefined) {
      this.getDefaults();
      this.save();
    } else {
      const localStorageUpgrades = JSON.parse(localStorage.upgrades);
      Object.keys(localStorageUpgrades).map(
        prop => (this[prop] = localStorageUpgrades[prop])
      );
    }
  }

  buyUpg(upgName) {
    const selectedUpgrade = this.upgrades.find(
      upgrade => upgrade.name === upgName
    );

    console.log(selectedUpgrade);

    if (localStorage.score >= selectedUpgrade.price) {
      localStorage.score = parseInt(localStorage.score) - selectedUpgrade.price;
      selectedUpgrade.bought = true;
      this.save();
      location.reload();
    } else {
      alert("You don't have enough money");
    }
  }

  showUpgradesPage() {
    this.upgrades.map(upgrade => {
      $(".shop .upgrades").innerHTML += `
        <section>
          <div class="icon">
            <img src="./images/${upgrade.name}.png" alt="${upgrade.name}" />
          </div>
          <div class="description">${upgrade.description}</div>
          <div class="price">${upgrade.price}</div>
          <div class="buy">
            ${
              upgrade.bought
                ? "purchased"
                : `<button onclick="shop.buyUpg('${upgrade.name}')">
                  Buy
                </button>`
            }
          </div>
        </section>
    `;
    });
  }

  save() {
    localStorage.upgrades = JSON.stringify(this);
  }
}

const shop = new Shop();
shop.init();
