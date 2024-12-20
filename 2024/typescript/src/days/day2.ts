import fs from 'fs';

export default function day2() {
	console.log("Day 2🎄\n");
	let safeReports = 0;

	try {
		const data = fs.readFileSync("src/assets/puzzle2.txt", "utf-8").trim().split("\n");

		data.forEach((report) => {
			let safe = false;
			const reportNumbers = report.split(" ").map(Number);
			if (isIncreasing(reportNumbers) || isDecreasing(reportNumbers)) safe = true;
			if (safe) safeReports++;
		})


		console.log(safeReports);
	} catch (e) {
		console.error(e);
	}
}

function isIncreasing(array: number[]): boolean {
	return array.every((n: number, i: number) => {
		if (i === 0) return true;
		const prevNum = array[i - 1];
		return prevNum ? n > prevNum : false;
	});
}

function isDecreasing(array: number[]): boolean {
	return array.every((n: number, i: number) => {
		if (i === 0) return true;
		const prevNum = array[i - 1];
		return prevNum ? n < prevNum : false;
	});
}

// function isWithinAcceptedDifference(a, b): boolean {
// 	const diff = Math.abs(a - b);
// 	if (diff > 3) return false;
// 	return true;
// }
