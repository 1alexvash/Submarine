let upgrades;

class Shop {
  getDefaults() {
    axios.get("/json/upgrades.json").then(data => {
      upgrades = data.data;
      this.save();
    });
  }

  init() {
    if (localStorage.upgrades === undefined) {
      this.getDefaults();
    } else {
      upgrades = JSON.parse(localStorage.upgrades);
    }
  }

  buyUpg(upgName) {
    const selectedUpgrade = upgrades.find(upgrade => upgrade.name === upgName);

    if (localStorage.score >= selectedUpgrade.price) {
      localStorage.score = parseInt(localStorage.score) - selectedUpgrade.price;
      selectedUpgrade.bought = true;
      this.save();
      location.reload();
    } else {
      alert("You don't have enough money");
    }
  }

  checkWhatItemsAvailable() {
    if (!userHasUpg("Engine1")) {
      $(".shop .upgrades section.Engine2").classList += "disabled";
    }
    if (!userHasUpg("Engine2")) {
      $(".shop .upgrades section.Engine3").classList += "disabled";
    }
    if (!userHasUpg("Tank1")) {
      $(".shop .upgrades section.Tank2").classList += "disabled";
    }
    if (!userHasUpg("Shield1")) {
      $(".shop .upgrades section.Shield2").classList += "disabled";
    }
  }

  showUpgradesPage() {
    upgrades.map(upgrade => {
      $(".shop .upgrades").innerHTML += `
        <section class="${upgrade.name} ${upgrade.bought ? "bought" : ""}">
          <div class="icon">
            <img src="./images/${upgrade.name}.png" title="${
        upgrade.name
      }" alt="${upgrade.name}" />
          </div>
          <div class="description" style="font-size: 14px">${
            upgrade.description
          }</div>
          <div class="price">${upgrade.price
            .toLocaleString()
            .split(",")
            .join(" ")}</div>
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

    this.checkWhatItemsAvailable();
  }

  save() {
    localStorage.upgrades = JSON.stringify(upgrades);
  }
}

const shop = new Shop();
shop.init();
