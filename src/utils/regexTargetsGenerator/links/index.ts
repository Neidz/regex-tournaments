import type { DifficultyLevel } from '../../../types/options';
import { generateRandomNumber } from '../../generateRandomNumber';
import { splitPointsToArray, splitPointsToSpecifiedArray } from '../../pointsSpliting';
import {
	protocols,
	domains,
	topLevelDomains,
	websiteRoutes,
	queryParams,
	queryParamValues,
	subdomains
} from './mocks';

export interface LinkObject {
	protocol: string;
	subdomains: string[];
	domain: string;
	topLevelDomain: string;
	routes: string[];
	params: { name: string; value: string }[];
}

export interface RegexLink {
	link: string;
	formattedLink: string;
	expectedWords: string[];
}

const generateLinkObject = (parameters: number[]): LinkObject => {
	const linkProtocol = () => protocols[generateRandomNumber(0, protocols.length - 1)];

	const linkSubdomains = () => {
		const arr = [];
		const randomSubdomain = () => subdomains[generateRandomNumber(0, subdomains.length - 1)];

		for (let i = 0; i < parameters[0]; i++) {
			arr.push(randomSubdomain());
		}

		return arr;
	};

	const linkDomain = () => domains[generateRandomNumber(0, domains.length - 1)];

	const linkTopLevelDomain = () =>
		topLevelDomains[generateRandomNumber(0, topLevelDomains.length - 1)];

	const linkRoutes = () => {
		const arr = [];
		const randomRoute = () => websiteRoutes[generateRandomNumber(0, websiteRoutes.length - 1)];

		for (let i = 0; i < parameters[1]; i++) {
			arr.push(randomRoute());
		}

		return arr;
	};

	const linkParams = () => {
		const arr = [];
		const randomQueryParam = () => queryParams[generateRandomNumber(0, queryParams.length - 1)];
		const randomQueryValue = () =>
			queryParamValues[generateRandomNumber(0, queryParamValues.length - 1)];

		for (let i = 0; i < parameters[2]; i++) {
			arr.push({ name: randomQueryParam(), value: randomQueryValue() });
		}

		return arr;
	};

	return {
		protocol: linkProtocol(),
		subdomains: linkSubdomains(),
		domain: linkDomain(),
		topLevelDomain: linkTopLevelDomain(),
		routes: linkRoutes(),
		params: linkParams()
	};
};

const generateExpectedWords = (
	linkObject: LinkObject,
	expectedWordsAmounts: number[],
	paramsValues: boolean
) => {
	const expectedWords = [];

	if (expectedWordsAmounts[0] === 1) {
		expectedWords.push(linkObject.protocol);
	}

	expectedWords.push(...linkObject.subdomains.slice(0, expectedWordsAmounts[1]));

	if (expectedWordsAmounts[2] === 1) {
		expectedWords.push(linkObject.domain);
	}

	if (expectedWordsAmounts[3] === 1) {
		expectedWords.push(linkObject.topLevelDomain);
	}

	expectedWords.push(...linkObject.routes.slice(0, expectedWordsAmounts[4]));

	const params = linkObject.params.map((el) => (paramsValues ? el.value : el.name));
	expectedWords.push(...params.slice(0, expectedWordsAmounts[5]));

	return expectedWords;
};

const generatePlainLink = (linkObject: LinkObject): string => {
	let link = '';

	link += `${linkObject.protocol}://www.`;
	linkObject.subdomains.forEach((el) => (link += `${el}.`));
	link += `${linkObject.domain}.`;
	link += linkObject.topLevelDomain;
	linkObject.routes.forEach((el) => (link += `/${el}`));
	if (linkObject.params.length > 0) {
		link += '?';
	}
	linkObject.params.forEach((el) => (link += `${el.name}=${el.value}&`));
	if (linkObject.params.length > 0) {
		link = link.substring(0, link.length - 1);
	}

	return link;
};

export const generateFormattedLink = (plainLink: string, wordsArray: string[]): string => {
	let formattedLink = plainLink;

	wordsArray.forEach((el) => {
		formattedLink = formattedLink.replace(
			new RegExp(`\\b${el}\\b`, 'g'),
			`<span style="color: specifiedColor">${el}</span>`
		);
	});

	return formattedLink;
};

export const generateLinks = (difficulty: DifficultyLevel, amountOfLinks: number): RegexLink[] => {
	const difficultyToPoints: Record<DifficultyLevel, number> = {
		easy: 2,
		medium: 4,
		hard: 6
	};

	const parameters = splitPointsToArray(3, difficultyToPoints[difficulty]);
	const maxValues = [1, parameters[0], 1, 1, parameters[1], parameters[2]];
	const paramValues = generateRandomNumber(0, 1) === 1;

	const expectedWordsAmounts = splitPointsToSpecifiedArray(
		maxValues,
		difficultyToPoints[difficulty]
	);

	const links = [];

	for (let i = 0; i < amountOfLinks; i++) {
		const linkObject = generateLinkObject(parameters);
		const expectedWords = generateExpectedWords(linkObject, expectedWordsAmounts, paramValues);

		const plainLink = generatePlainLink(linkObject);
		const formattedLink = generateFormattedLink(plainLink, expectedWords);

		links.push({ link: plainLink, formattedLink, expectedWords });
	}

	return links;
};
