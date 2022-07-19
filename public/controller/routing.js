import { home_page } from "../view/home_page.js";
import { about_page } from "../view/about_page.js";

export const routePath = {
	HOME: '/',
	ABOUT: '/about',
}

export const routes = [
	{ path: routePath.HOME, page: home_page },
	{ path: routePath.ABOUT, page: about_page },
];

export function route(pathname, hash) {
	// within 'routes', find the object where the object's path matches the 'pathname'
	const route = routes.find(element => element.path == pathname);
	// if the route exists, call on that page's function
	if (route) route.page();
	// if route doesn't exist, call on default (home) page
	else routes[0].page();
}