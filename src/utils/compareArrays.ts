// returns boolean saying if arrays have the same items
export const comapreArrays = (arr1: string[], arr2: string[]): boolean => {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every((el) => {
		if (!arr2.includes(el)) {
			return false;
		}
		return true;
	});
};
