const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".nav-list");
let slideFirst = document.querySelector(".slide.first");
let btnLab = document.querySelectorAll(".manual-btn");
var slideDesc = document.querySelectorAll(".desc-proj");



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

function apontador(event, id, desc) {
	for (let i = 0; i <= 3; i++) {
		if (i == id) {
			btnLab[i].classList.add("ativo");
			desc[i].classList.add("ativo");
		} else {
			btnLab[i].classList.remove("ativo");
			desc[i].classList.remove("ativo");
		}
	}

}

function mudaFoto(event, id) {
	switch (id) {
		case 0:
			slideFirst.style.marginLeft = "0";
			break;
		case 1:
			slideFirst.style.marginLeft = "-25%";
			break;
		case 2:
			slideFirst.style.marginLeft = "-50%";
			break;
		case 3:
			slideFirst.style.marginLeft = "-75%";
			break;
	}
}


btnLab.forEach((event, id) => {
	event.addEventListener("click", (obj) => {
		mudaFoto(event, id);
		apontador(event, id, slideDesc);
	});
});
btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);
