import * as Elements from './elements.js'

export function addEventListeners() {

	Elements.navbarHomeButton.addEventListener('click', () => {
		home_page();
	})

}

export function home_page() {
	Elements.root.innerHTML = `
		<h1>Home Page</h1>
	`;
}