const sshCommand = require('./utils').sshCommand;
const getDockerContainer = require('./utils').getDockerContainer;

const stopContainer =(dockerContainer) =>{
    console.log("Stopping docker in host ...");

    sshCommand(`docker stop ${dockerContainer} && docker rm ${dockerContainer}`);
};

const start = () => {
    stopContainer(getDockerContainer())
};

start();