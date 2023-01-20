const launches = new Map();

let latestFlighNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Exproler IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['NASA', 'ZTM'],
    upcoming: true,
    success: true
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlighNumber++;
    launches.set(
        latestFlighNumber,
        Object.assign(launch, {
            flightNumber: latestFlighNumber,
            customers: ['ZTM', 'NASA'],
            upcoming: true,
            success: true
        })
    );
}

module.exports = {
    getAllLaunches,
    addNewLaunch
};