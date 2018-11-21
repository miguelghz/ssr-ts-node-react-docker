const commandRun = require('./utils').commandRun;
const getBuild = require('./utils').getBuildNumber;
const getDockerImage = require('./utils').getDockerImage;

const copyFiles =(buildPath) => {
    console.log("Copying files ...");

    commandRun("cp package* " + buildPath);
    commandRun("cp *ocker* " + buildPath);
    commandRun("cp -r build-client " + buildPath);
};

const createDockerImage = (buildPath, imgName) =>{
    console.log("Creating docker's local files ...");
    commandRun("docker build -t " + imgName + " " + buildPath);
    console.log("Create image: " + imgName)
};

const start = () => {
    const buildPath = process.cwd() + "/build-server";
    const dockerImage = getDockerImage() + getBuild();
    copyFiles(buildPath);
    createDockerImage(buildPath, dockerImage)
};

start();