import fs from "fs";

console.log(" Advent of Code 2024 - Day 1 ⛄️");
console.log("---------------------------------");

try {
    const ids = [[], []];
    const distance = [];
    const locationIds = fs.readFileSync("src/day1/locationIDs.txt", "utf-8").trim().split("\n");

    locationIds.forEach((row) => {
        const splitLine = row.split((/\s+/));
        ids[0].push(splitLine[0]);
        ids[1].push(splitLine[1]);
    });
    ids.forEach((elem) => {
        console.log(elem)
    });
} catch (e) {
    console.error(e);
}
