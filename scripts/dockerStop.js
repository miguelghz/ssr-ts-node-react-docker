const commandRun = require('./utils').commandRun;
const getDockerContainer = require('./utils').getDockerContainer;

const stopContainer =(dockerContainer) =>{
    console.log("Stopping docker in local ...");

    commandRun(`docker stop ${dockerContainer} && docker rm ${dockerContainer}`);
};

const start = () => {
    stopContainer(getDockerContainer())
};

start();