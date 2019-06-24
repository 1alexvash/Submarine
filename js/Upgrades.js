let UPGRADES = {};

const DEFAULT_UPGRADES = [
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

if (localStorage.upgrades === undefined) {
  updateUpgrases(DEFAULT_UPGRADES);
} else {
  getUpgrades(JSON.parse(localStorage.upgrades));
}

function updateUpgrases(new_set) {
  localStorage.upgrades = JSON.stringify(new_set);
  UPGRADES = new_set;
}

function getUpgrades(set) {
  UPGRADES = set;
}

function buyUpg(name) {
  const selectedUpgrade = UPGRADES.find(upgrade => upgrade.name === name);

  if (selectedUpgrade.price > localStorage.score) {
    alert("Not enough money");
  }

  if (
    selectedUpgrade.bought === false &&
    selectedUpgrade.price <= parseInt(localStorage.score)
  ) {
    UPGRADES[UPGRADES.indexOf(selectedUpgrade)].bought = true;

    updateUpgrases(UPGRADES);

    updateScore(localStorage.score - selectedUpgrade.price);

    window.location.reload();
  }
}

function initializeUpgrades() {
  UPGRADES.map((upg, index) => {
    if (upg.bought) {
      const button = document.querySelectorAll(".shop .upgrades section .buy")[
        index + 1
      ];
      button.style.visibility = "hidden";
    }
  });
}
