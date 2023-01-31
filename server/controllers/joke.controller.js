const Joke = require("../models/joke.model");
var random = require("mongoose-random");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allDaJokes) => res.json({ jokes: allDaJokes }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
};

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then((oneSingleJoke) => res.json({ joke: oneSingleJoke }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then((newlyCreatedJoke) => res.json({ joke: newlyCreatedJoke }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatedJoke) => res.json({ joke: updatedJoke }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
};

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
};

module.exports.findRandomJoke = (req, res) => {
    // Joke.findRandom()
    //     .then((randomJoke) => res.json({ joke: randomJoke }))
    //     .catch((err) =>
    //         res.json({ message: "Something went wrong", error: err })
    //     );

    Joke.aggregate([{ $sample: { size: 1 } }])
        .then((randomJoke) => res.json({ joke: randomJoke }))
        .catch((err) =>
            res.json({ message: "Something went wrong", error: err })
        );
};
