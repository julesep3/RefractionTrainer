// main root
export const root = document.getElementById('root');

// forms
export const formSignIn = document.getElementById('form-signin');

// buttons
export const navbarSignOutButton = document.getElementById('navbar-signout');
export const navbarHomeButton = document.getElementById('menu-home');
export const navbarAboutButton = document.getElementById('menu-about');

// modals
export const modalInfoBox = {
	modal: new bootstrap.Modal(document.getElementById('modal-infobox'), { backdrop: 'static' }),
	title: document.getElementById('modal-infobox-title'),
	body: document.getElementById('modal-infobox-body'),
}

export const modalSignIn = new bootstrap.Modal(document.getElementById('modal-signin-form'), { backdrop: 'static' });