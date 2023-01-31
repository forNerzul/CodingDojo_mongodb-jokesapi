const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get("/jokes", JokeController.findAllJokes);
    app.get("/jokes/:id", JokeController.findOneSingleJoke);
    app.put("/jokes/update/:id", JokeController.updateExistingJoke);
    app.post("/jokes/new", JokeController.createNewJoke);
    app.delete("/jokes/delete/:id", JokeController.deleteAnExistingJoke);
    app.get("/random-jokes/", JokeController.findRandomJoke);
};
