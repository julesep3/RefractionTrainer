import * as Elements from './elements.js'
import { routePath } from '../controller/routing.js';

export function addEventListeners() {

	Elements.navbarAboutButton.addEventListener('click', () => {
		// 'history' is a global variable (window nav history of the browser)
		history.pushState(null, null, routePath.ABOUT);
		about_page();
	})

}

export function about_page() {
	Elements.root.innerHTML = `
		<h1>About Page</h1>
	`;
}