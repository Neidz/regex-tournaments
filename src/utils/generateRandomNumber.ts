export const generateRandomNumber = (min: number, max: number): number =>
	Math.round(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
