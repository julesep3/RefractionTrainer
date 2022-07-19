import * as FirebaseAuth from './controller/firebase_auth.js'
import * as HomePage from './view/home_page.js'
import * as AboutPage from './view/about_page.js'
import { route } from './controller/routing.js';

FirebaseAuth.addEventListeners();
HomePage.addEventListeners();
AboutPage.addEventListeners();

window.onload = () => {
	const pathname = window.location.pathname;
	const hash = window.location.hash;

	route(pathname, hash);
}