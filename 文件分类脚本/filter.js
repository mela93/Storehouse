"use strict";
const fs = require("fs");

const filePath = fs.readdirSync("./folder");
const patt = /zip/;

const folderSet = new Set();
const createFolderSet = () => {
    filePath.forEach((item, index) => {
        if (!patt.test(item)) {
            folderSet.add(item);
        }
    });
    console.log(Array.from(folderSet.values()));
};
createFolderSet();

const moveFile = async () => {
    fs.rename(`./folder/${item}`, `./folder/${folderName}/${item}`, function (err) {
        if (err) throw err;
        console.log('重命名完成');
    });
};

const getName = (filePath) => {
    let folderName = "";
    if (patt.test(filePath)) {
        const start = filePath.indexOf("[");
        const end = filePath.indexOf("]");
        if (start === -1) {
            continue;
        }
        folderName = item.slice(start, end + 1);
    }
    return folderName;
}

for (const item of filePath) {
    let folderName = await getName({ filePath: item });
    if (!folderName) {
        continue;
    }
    if (folderSet.has(folderName)) {
        await moveFile();
    } else {
        fs.mkdir(`./folder/${folderName}/`, (err) => { console.log(err) });
        folderSet.add(folderName);
        await moveFile();

    }
}

