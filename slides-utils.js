const fs = require('fs');

const getPresentationsDirectory = () => `${__dirname}/slides`;
const getPresentationPath = (dirName) =>`${getPresentationsDirectory()}/${dirName}`; 
const getInfoFilePath = (dirName) => `${getPresentationPath(dirName)}/info.json`;

const getPresentations =
    () => fs.readdirSync(getPresentationsDirectory())
        .map(dirName => {
            const infoFilePath = getInfoFilePath(dirName);
            const dirPath = getPresentationPath(dirName);

            const {
                title,
                description,
            } = JSON.parse(fs.readFileSync(infoFilePath, "utf-8"));

            return {
                title,
                description,
                dirName,
                dirPath,
            };
        });

module.exports = { getPresentations };
