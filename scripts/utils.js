const exec = require('child_process').exec;
const fs = require('fs');
const SshClient = require('ssh2').Client;

module.exports.commandRun = (cmd, ignoreError) => {
    const stream = exec(cmd)

    stream.stdout.on('data',  (data) =>
        console.log(data.toString()));

    stream.stderr.on('data',  (data) => {
        console.log('ERROR: ' + data.toString())
        if(!ignoreError) throw new Error()
    });

    stream.on('exit',  (code) =>
        console.log(`child process exited with code ${code}`));
};

module.exports.getBuildNumber = () => {
    const packageContent = fs.readFileSync("config/config.json", {encoding: 'utf-8'});
    const config = JSON.parse(packageContent);

    return config["build"];
};

module.exports.getDockerImage = () => {
    const packageContent = fs.readFileSync("config/config.json", {encoding: 'utf-8'});
    const config = JSON.parse(packageContent);

    return config["dockerImage"];
};

module.exports.getDockerContainer = () => {
    const packageContent = fs.readFileSync("config/config.json", {encoding: 'utf-8'});
    const config = JSON.parse(packageContent);

    return config["dockerContainer"];
};

module.exports.getDockerCred = () => {
    const packageContent = fs.readFileSync("config/config.json", {encoding: 'utf-8'});
    const config = JSON.parse(packageContent);

    return {
        user: config["dockerUser"],
        passw: config["dockerPass"],
        repo: config["dockerRepo"],
    };
};

const getDockerHost = () => {
    const packageContent = fs.readFileSync("config/config.json", {encoding: 'utf-8'});
    const config = JSON.parse(packageContent);

    return config["dockerHost"]
};

module.exports.getDockerHost = getDockerHost;

module.exports.sshCommand = (command) => {
    const client = new SshClient();

    const onConnected = (command) => {
        onExec = (err, stream) => {
            if (err) throw err;

            stream.stdout.on('data', data => data ? console.log(data.toString()) : null);
            stream.stderr.on('data', data => data ? console.log(data.toString()) : null);

            stream.on('close', (code, signal) =>  client.end())
        };

        client.exec(command, onExec)
    };

    client
        .on("ready", () => onConnected(command))
        .on("error", () => console.log(e))
        .connect({
            host: getDockerHost().host,
            port: getDockerHost().port,
            username: getDockerHost().username,
            privateKey: fs.readFileSync(getDockerHost().privateKeyPath)
        });
};