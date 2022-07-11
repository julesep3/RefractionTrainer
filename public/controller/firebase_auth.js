import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

import * as Elements from '../view/elements.js'
import * as Utilities from '../view/utilities.js'
import * as Constants from '../model/constants.js'

const auth = getAuth();
export let currentUser = null;

export function addEventListeners() {

	Elements.formSignIn.addEventListener('submit', async e => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			Utilities.info('Successfully Signed In', 'Welcome to Refraction Trainer.', Elements.modalSignIn);
			if (Constants.DEV) {
				console.log(`Sign-In Success: ${userCredential.user.email} is signed in.`);
				console.log(`${userCredential.user.email} User Object Info: ${JSON.stringify(userCredential.user)}`);
			}
		} catch (e) {
			const errorCode = e.code;
			const errorMessage = e.message;
			Utilities.info('Sign In Error', JSON.stringify(e), Elements.modalSignIn);
			if (Constants.DEV) {
				console.log(`Sign-In Error: ${errorCode} : ${errorMessage}`);
			}
		}
	});

	Elements.navbarSignOut.addEventListener('click', async () => {
		try {
			await signOut(auth);
			Utilities.info('Successfully Signed Out', 'Thank you for using Refraction Trainer.');
			if (Constants.DEV) {
				console.log(`Sign-Out Success!`);
			}

		} catch (e) {
			Utilities.info('Sign-Out Error', JSON.stringify(e));
			if (Constants.DEV) {
				console.log(`Sign-Out Error: ${e}`);
			}
		}
	});

	onAuthStateChanged(auth, authStateChangeObserver);

}

function authStateChangeObserver(user) {
	if (user) {
		// if user is signed in...
		currentUser = user;

		let elements = document.getElementsByClassName('preauth');
		for (let i = 0; i < elements.length; i++) {
			elements[i].style.display = 'none';
		}
		elements = document.getElementsByClassName('postauth');
		for (let i = 0; i < elements.length; i++) {
			elements[i].style.display = 'block';
		}
	} else {
		// if user is signed out...
		currentUser = null;

		let elements = document.getElementsByClassName('preauth');
		for (let i = 0; i < elements.length; i++) {
			elements[i].style.display = 'block';
		}
		elements = document.getElementsByClassName('postauth');
		for (let i = 0; i < elements.length; i++) {
			elements[i].style.display = 'none';
		}
	}

}