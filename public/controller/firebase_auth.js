import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

import * as Elements from '../view/elements.js'
import * as Utilities from '../view/utilities.js'
import * as Constants from '../model/constants.js'

const auth = getAuth();

export function addEventListeners() {

	Elements.formSignIn.addEventListener('submit', async e => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
			console.log(`Sign-In Success: ${user.email} is signed in.`);
			console.log(`${user.email} User Object Info: ${JSON.stringify(user)}`);
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
			Utilities.info('Successfully Signed Out', 'Thank you for using Refraction Trainer');
			if (Constants.DEV) {
				console.log(`Sign-Out Success!`);
			}

		} catch (e) {
			if (Constants.DEV) {
				console.log(`Sign-Out Error: e`);
			}
		}
	});

}