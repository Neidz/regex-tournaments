// checks for dulicates between arrays provided in form of array of ararays ([[], [], []])
export const checkMocksForDuplicates = (arrays: string[][]): void => {
	const arr: string[] = [];
	const duplicates: string[] = [];
	const set = new Set<string>();

	arrays.forEach((el) => arr.push(...el));

	arr.forEach((el) => {
		const initialSetSize = set.size;
		set.add(el);
		if (initialSetSize === set.size) {
			duplicates.push(el);
		}
	});
};
