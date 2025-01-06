module.exports = {
    apps: [
      {
        name: "RustBot",
        script: "./app.js",
        watch: true,
        env: {
          NODE_ENV: "production",
        },
        env_development: {
          NODE_ENV: "development",
        },
      },
    ],
  };