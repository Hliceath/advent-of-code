import fs from "fs";

export default function day1() {
    console.log("🎄 Day 1 🎄\n");
    const ids: number[][] = [[], []];
    let totalDistance = 0;
    let similarityScore = 0;

    try {
        const locationIds = fs.readFileSync("src/day1/locationIDs.txt", "utf-8").trim().split("\n");

        locationIds.forEach((row) => {
            const splitLine = row.split((/\s+/));
            ids[0]?.push(Number(splitLine[0]));
            ids[1]?.push(Number(splitLine[1]));
        });

        ids[0]?.forEach((id) => {
            if (ids[1]?.filter((elem) => elem == id).length)
                similarityScore += id * ids[1].filter((elem) => elem == id).length
        })

        const arrSize = ids[0]?.length;
        if (arrSize && ids[0] && ids[1]) {
            for (let i = 0; i < arrSize; i++) {
                const minA = Math.min(...ids[0]);
                const minB = Math.min(...ids[1]);
                ids[0]?.splice(ids[0].indexOf(minA), 1);
                ids[1]?.splice(ids[1].indexOf(minB), 1);
                totalDistance += minA > minB ? minA - minB : minB - minA;
            }
        }
        console.log(`Total distance between the two lists: ${totalDistance}`);
        console.log(`Similarity score of the two lists: ${similarityScore}\n`);
    } catch (e) {
        console.error(e);
    }
}
