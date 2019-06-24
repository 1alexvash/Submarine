let SETTINGS = {};

const DEFAULT_SETTINGS = {
  SOUNDS: true,
  MUSIC: true,
  SHOW_SCORE: true,
  SHOW_UNITS_BORDERS: false
};

if (localStorage.settings === undefined) {
  updateSettings(DEFAULT_SETTINGS);
} else {
  getSettings(JSON.parse(localStorage.settings));
}

function updateSettings(new_set) {
  localStorage.settings = JSON.stringify(new_set);
  SETTINGS = new_set;
}

function getSettings(set) {
  SETTINGS = set;
}

function initializeSettings() {
  Object.keys(SETTINGS).map(option => {
    const input = document.getElementsByName(option)[0];

    input.onclick = function(e) {
      SETTINGS[e.target.name] = e.target.checked;
      updateSettings(SETTINGS);
    };

    input.checked = SETTINGS[option];
  });

  const restoreButton = $(".restore button");
  restoreButton.onclick = function() {
    if (confirm("Are you sure?")) {
      updateSettings(DEFAULT_SETTINGS);

      Object.keys(DEFAULT_SETTINGS).map(option => {
        const input = document.getElementsByName(option)[0];
        input.checked = DEFAULT_SETTINGS[option];
      });
    }
  };
}
