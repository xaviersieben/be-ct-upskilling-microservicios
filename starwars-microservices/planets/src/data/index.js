const planets = require("./planets.json");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/Planet");
    return results.data
  },
  create: async () => {
    throw Error("hay un error");
  },
};
