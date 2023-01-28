import {
	domains,
	protocols,
	subdomains,
	topLevelDomains,
	websiteRoutes,
	queryParams,
	queryParamValues
} from './mocks';

export interface Link {
	protocol: string;
	subdomains: string[];
	domain: string;
	topLevelDomain: string;
	routes: string[];
	params: { name: string; value: string }[];
}
// https://github.com/sveltejs/realworld/tree/master/src

export const generateLink = () => {
	return '';
};
