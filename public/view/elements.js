// forms
export const formSignIn = document.getElementById('form-signin');

// buttons
export const navbarSignOut = document.getElementById('navbar-signout');

// modals
export const modalInfoBox = {
	modal: new bootstrap.Modal(document.getElementById('modal-infobox'), { backdrop: 'static' }),
	title: document.getElementById('modal-infobox-title'),
	body: document.getElementById('modal-infobox-body'),
}