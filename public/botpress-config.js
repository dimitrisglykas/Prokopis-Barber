/* Ρυθμίσεις Botpress webchat: ελληνικά, διακριτικό theme στο στυλ του site. */
(function () {
  var OVERRIDES = {
    color: "#c9a227",
    themeMode: "dark",
    variant: "solid",
    radius: 1,
    fontFamily: "inter",
    botName: "Prokopis Barber Shop",
    botDescription:
      "Καλώς ήρθες! Ρώτησέ με για ραντεβού, τιμές και ωράριο στο κουρείο μας στην Κόρινθο.",
    composerPlaceholder: "Γράψε το μήνυμά σου…",
    website: { title: "prokopis.lovable.app", link: "https://prokopis.lovable.app" },
    phone: { title: "2741 025156", link: "tel:+302741025156" },
  };

  function patch() {
    var bp = window.botpress;
    if (!bp || bp.__prokopisPatched || typeof bp.init !== "function") return false;
    bp.__prokopisPatched = true;
    var originalInit = bp.init.bind(bp);
    bp.init = function (config) {
      config = config || {};
      config.configuration = Object.assign({}, config.configuration, OVERRIDES);
      config.user = Object.assign({}, config.user, {
        data: Object.assign({ language: "el", locale: "el-GR" }, (config.user || {}).data),
      });
      return originalInit(config);
    };
    return true;
  }

  if (!patch()) {
    var tries = 0;
    var timer = setInterval(function () {
      if (patch() || ++tries > 200) clearInterval(timer);
    }, 50);
  }

  document.documentElement.lang = "el";
})();
