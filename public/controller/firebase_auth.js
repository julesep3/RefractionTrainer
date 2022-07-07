import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

import * as Elements from '../view/elements.js'

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
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(`Sign-In Error: ${errorCode} : ${errorMessage}`);
		}
	});

}