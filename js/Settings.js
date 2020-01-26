class Settings {
  constructor() {
    this.sounds;
    this.music;
    this.show_score;
    this.show_units_borders;
  }

  getDefaults() {
    axios.get("json/settings.json").then(response => {
      const settings = response.data;

      Object.keys(settings).map(setting => (this[setting] = settings[setting]));
      this.save();
    });
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

      location.reload();
    };
  }

  save() {
    localStorage.settings = JSON.stringify(this);
  }
}

const settings = new Settings();
settings.init();
