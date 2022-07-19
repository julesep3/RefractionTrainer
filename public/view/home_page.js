import * as Elements from './elements.js';
import { routePath } from '../controller/routing.js';

export function addEventListeners() {

	Elements.navbarHomeButton.addEventListener('click', () => {
		// 'history' is a global variable (window nav history of the browser)
		history.pushState(null, null, routePath.HOME);
		home_page();
	});

}

export function home_page() {
	Elements.root.innerHTML = `
		<h1>Home Page</h1>
	`;
}