const { getAllPlanets } = require('../../models/planets.model');

function httpGtAllPlanets(req, res) {
    return res.status(200).json(getAllPlanets());
}

module.exports = {
    httpGtAllPlanets
}