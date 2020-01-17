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

    if (selectedUpgrade.name === "Engine2" && userHasUpg("Engine1") === false) {
      alert("Buy previos upgrade first");
      return;
    }

    if (selectedUpgrade.name === "Engine3" && userHasUpg("Engine2") === false) {
      alert("Buy previos upgrade first");
      return;
    }

    if (selectedUpgrade.name === "Tank2" && userHasUpg("Tank1") === false) {
      alert("Buy previos upgrade first");
      return;
    }

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
    upgrades.map(upgrade => {
      $(".shop .upgrades").innerHTML += `
        <section class="${upgrade.bought ? "bought" : ""}">
          <div class="icon">
            <img src="./images/${upgrade.name}.png" title="${
        upgrade.name
      }" alt="${upgrade.name}" />
          </div>
          <div class="description" style="font-size: 14px">${
            upgrade.description
          }</div>
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
    localStorage.upgrades = JSON.stringify(upgrades);
  }
}

const shop = new Shop();
shop.init();
