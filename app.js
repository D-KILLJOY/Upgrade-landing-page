const navBtnCon = document.querySelector(".btn-con");
const navBtn = document.querySelector(".nav-btn");
const navigation = document.querySelector(".navigation");

navBtnCon.addEventListener("click", () => {
	if (navBtn.classList.contains("active")) {
		navBtn.classList.remove("active");
		navigation.classList.remove("nav-active");

		document.body.classList.remove("no-scroll");
	} else {
		navBtn.classList.add("active");
		navigation.classList.add("nav-active");
		document.body.classList.add("no-scroll");
	}
});
