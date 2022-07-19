import * as FirebaseAuth from './controller/firebase_auth.js'
import * as HomePage from './view/home_page.js'
import * as AboutPage from './view/about_page.js'
import { route } from './controller/routing.js';

FirebaseAuth.addEventListeners();
HomePage.addEventListeners();
AboutPage.addEventListeners();

// 'window' -> JS global variable (represents web browser window)
// 'onload' -> property where you can define a function to be called when loaded or refreshed
window.onload = () => {
	const pathname = window.location.pathname;
	const hash = window.location.hash;

	route(pathname, hash);
}

// add 'popstate' event listener for when browser is navigated backwards or forwards
window.addEventListener('popstate', e => {
	e.preventDefault(); // no page refresh
	const pathname = e.target.location.pathname;
	const hash = e.target.location.hash;
	route(pathname, hash);
})