class Settings {
  constructor() {
    this.sounds;
    this.music;
    this.show_score;
    this.show_units_borders;
  }

  getDefaults() {
    this.sounds = true;
    this.music = true;
    this.show_score = true;
    this.show_units_borders = false;
  }

  init() {
    if (localStorage.settings === undefined) {
      this.getDefaults();
      this.save();
    } else {
      const localStorageSettings = JSON.parse(localStorage.settings);
      Object.keys(localStorageSettings).map(
        prop => (this[prop] = localStorageSettings[prop])
      );
    }
  }

  showSettingsPage() {
    const localStorageSettings = JSON.parse(localStorage.settings);
    Object.keys(localStorageSettings).map(prop => {
      const input = $(`.settings [name="${prop}"]`);
      input.checked = localStorageSettings[prop];
      input.addEventListener("change", e => {
        this[prop] = e.target.checked;
        this.save();
      });
    });

    $(".settings .restore").onclick = () => {
      this.getDefaults();
      this.save();
      location.reload();
    };
  }

  save() {
    localStorage.settings = JSON.stringify(this);
  }
}

const settings = new Settings();
settings.init();
