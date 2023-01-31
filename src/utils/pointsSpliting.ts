import { generateRandomNumber } from './generateRandomNumber';

// creates array with specified length and distributes points mostly randomly with initial elements having higher chance to be bigger
export const splitPointsToArray = (arrLength: number, points: number): number[] => {
	let pointsToSplit = points;
	const arr = Array(arrLength).fill(0);

	const addToArray = () => {
		arr.forEach((el, i) => {
			if (pointsToSplit > 0) {
				const randomNumber = generateRandomNumber(0, 1);
				pointsToSplit -= randomNumber;

				arr[i] = el + randomNumber;
			}
		});

		if (pointsToSplit > 0) {
			addToArray();
		}
	};

	addToArray();

	return arr;
};

// works the same as splitPointsToArray but specifiedArr provides max amounts of points that can be placed in specific places in array
export const splitPointsToSpecifiedArray = (specifiedArr: number[], points: number): number[] => {
	let pointsToSplit = points;
	const arr = Array(specifiedArr.length).fill(0);

	const addToArray = () => {
		arr.forEach((el, i) => {
			if (pointsToSplit > 0 && arr[i] < specifiedArr[i]) {
				const randomNumber = generateRandomNumber(0, 1);
				pointsToSplit -= randomNumber;

				arr[i] = el + randomNumber;
			}
		});

		if (pointsToSplit > 0) {
			addToArray();
		}
	};

	addToArray();

	return arr;
};
