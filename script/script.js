const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".nav-list");

function handleButtonClick(event) {
	if (event.type === "touchstart") event.preventDefalut();
	event.stopPropagation();
	nav.classList.toggle("active");
	handleClickOutside(menu, () => {
		nav.classList.remove("active");
	});
}

function handleClickOutside(targetElement, callBack) {
	const html = document.documentElement;
	function handleHTMLClick(event) {
		if (!targetElement.contains(event.target)) {
			targetElement.removeAttribute("data-target")
			html.removeEventListener("click", handleHTMLClick);
			html.removeEventListener("touchstart", handleHTMLClick);
			callBack();
		}
	}
	if (!targetElement.hasAttribute("data-target")) {
		html.addEventListener("click", handleHTMLClick)
		html.addEventListener("touchstart", handleHTMLClick)

		targetElement.setAttribute("data-target", "")
	}
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);
