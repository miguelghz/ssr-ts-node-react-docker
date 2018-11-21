const sshCommand = require('./utils').sshCommand;
const getBuild = require('./utils').getBuildNumber;
const getDockerImage = require('./utils').getDockerImage;
const getDockerContainer = require('./utils').getDockerContainer;
const getDockerCred = require('./utils').getDockerCred;

const dockerLogin = (user, pass) => {
    console.log("Login to docker hub ...");
    sshCommand(`docker login --username ${user} --password ${pass}`);
};

function runContainer(dockerContainer, dockerImage, port){
    console.log("Run docker in host ...");
    sshCommand(`docker run -d -p ${port}:80 --restart=always --name ${dockerContainer} ${dockerImage}`);
}

const start = () => {
    const dockerImage = getDockerImage() + getBuild();
    const dockerContainer = getDockerContainer();
    const port = 80;

    dockerLogin(getDockerCred().user, getDockerCred().passw);
    runContainer(dockerContainer, dockerImage, port)
};

start();


