import { modalInfoBox } from "./elements.js";

// function for general pop-up infobox
export function info(title, body, closeModal) {
	// if previous modal exists, close it before showing infobox modal
	if (closeModal) closeModal.hide();
	modalInfoBox.title.innerHTML = title;
	modalInfoBox.body.innerHTML = body;
	modalInfoBox.modal.show();
}