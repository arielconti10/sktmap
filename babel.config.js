module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      [
        "module-resolver", {
          "alias": {
            "@": "./src",
            "@shared": "./src/shared",
            "@components": "./src/components",
            "@routes": "./src/routes",
            "@hooks": "./src/hooks",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@styles": "./src/styles",
            "@assets": "./src/assets",
          }
        }
      ],
      'react-native-reanimated/plugin'
    ],
    presets: ['babel-preset-expo']
  };
};
