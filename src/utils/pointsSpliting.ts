import { generateRandomNumber } from './generateRandomNumber';

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
