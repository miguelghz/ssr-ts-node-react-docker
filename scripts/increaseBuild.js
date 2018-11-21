const beautify = require("json-beautify");
const fs = require('fs');

const increaseBuildNumber = () => {
    console.log("Increasing build number ...");
    const file = "config/config.json";
    const fileContent = fs.readFileSync(file, {encoding: 'utf-8'});
    const fileAsJson = JSON.parse(fileContent);

    fileAsJson["build"]++;
    fs.writeFileSync(file, beautify(fileAsJson, null, 2, 100));
};

increaseBuildNumber();