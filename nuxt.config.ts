export default {
  devtools: { enabled: true },

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
};
