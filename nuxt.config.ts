export default {
  devtools: { enabled: true },

  // Указываем статическую цель
  target: "static", // Указывает на то, что проект будет статически сгенерирован

  build: {
    loaders: {
      scss: {
        implementation: require("sass"),
      },
      less: {},
    },
  },

  css: ["~/assets/main.scss"],

  modules: ["@element-plus/nuxt"],

  elementPlus: {
    importIcons: true, // Включает автоматический импорт иконок
  },

  compatibilityDate: "2024-07-11",

  // Добавляем базовый путь роутинга, если вы размещаете сайт не на корневом уровне домена
  router: {
    base: "/", // Измените на '/<REPO_NAME>/' для GitHub Pages или оставьте '/' для Netlify
  },
};
