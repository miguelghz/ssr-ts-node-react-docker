const commandRun = require('./utils').commandRun;

const start = () => {
    console.log("Test docker running in local ...");
    commandRun(`docker ps`);
};

start();

