const DEV = "https://swapi.dev/api";

const settings = {
  SERVICE: {
    BASE_URL: DEV,
    HOST: ""
  },
};

if (process.env.NODE_ENV === "local") {
  settings.SERVICE.BASE_URL = DEV;
  settings.SERVICE.HOST = "http://localhost:3000";
}

if (process.env.NODE_ENV === "development") {
  settings.SERVICE.BASE_URL = DEV;
  settings.SERVICE.HOST = "http://localhost:3000";
}

if (process.env.NODE_ENV === "production") {
  settings.SERVICE.BASE_URL = DEV;
  settings.SERVICE.HOST = "http://localhost:3000";
}

export default settings;
