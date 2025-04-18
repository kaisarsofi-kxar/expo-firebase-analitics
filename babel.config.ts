export default function (api: any) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "expo-router/babel",
        {
          appDir: "./src/app", // 👈 Tells Expo Router your new path
        },
      ],
    ],
  };
}
