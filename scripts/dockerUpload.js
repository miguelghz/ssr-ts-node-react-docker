const commandRun = require('./utils').commandRun;
const getBuild = require('./utils').getBuildNumber;
const getDockerImage = require('./utils').getDockerImage;
const getDockerCred = require('./utils').getDockerCred;

const dockerLoginAndUpload = (user, pass, imgName) => {
    console.log("Login to docker hub ...");
    commandRun(`docker login --username ${user} --password ${pass} && docker push ${imgName}`, true);
};


const start = () => {
    const dockerImage = getDockerImage() + getBuild();
    dockerLoginAndUpload(getDockerCred().user, getDockerCred().passw, dockerImage)
};

start();