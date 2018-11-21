const commandRun = require('./utils').commandRun;
const getBuild = require('./utils').getBuildNumber;
const getDockerImage = require('./utils').getDockerImage;
const getDockerContainer = require('./utils').getDockerContainer;

function runContainer(dockerContainer, dockerImage, port){
    console.log("Run docker in local ...");
    commandRun(`docker run -p ${port}:80 --restart=always --name ${dockerContainer} ${dockerImage}`);
}

const start = () => {
    const dockerImage = getDockerImage() + getBuild();
    const dockerContainer = getDockerContainer();
    const port = 8000;

    runContainer(dockerContainer, dockerImage, port)
};

start();

