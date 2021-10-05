"useStrict";
window.addEventListener("DOMContentLoaded", () => {
	const submitBtn = document.querySelectorAll("[data-modal]"),
		clickCourses = document.querySelector(".clickCard"),
		closeBtn = document.querySelector(".close"),
		submitForm = document.querySelector(".submitForm"),
		coursesPopup = document.querySelector(".coursesPopup"),
		coursesFinish = document.querySelector(".popupFinish"),
		closeForm = document.querySelector(".closeForm"),
		popupContentForm = document.querySelectorAll("[data-submitForm]");

	function openModal() {
		clickCourses.classList.remove("hide");
		document.body.style.overflow = "hidden";
		coursesPopup.classList.add("show");
	}
	function closeModal() {
		clickCourses.classList.add("hide");
		document.body.style.overflow = "";
		coursesPopup.classList.remove("hide");
		coursesFinish.classList.add("hide");
	}

	submitBtn.forEach((item) => {
		item.addEventListener("click", openModal);
	});
	closeBtn.addEventListener("click", closeModal);
	clickCourses.addEventListener("click", (e) => {
		if (e.target === clickCourses) {
			closeModal();
		}
	});
	submitForm.addEventListener("click", () => {
		coursesPopup.classList.add("hide");
		coursesFinish.classList.remove("hide");
		const timer = setTimeout(() => {
			if (coursesPopup.classList.contains("hide")) {
				closeModal();
			}
		}, 3000);
		popupContentForm.forEach((item) => {
			item.value = "";
		});
	});
	closeForm.addEventListener("click", closeModal);

	const closeLink = document.querySelector(".times"),
		linkContent = document.querySelector(".navbarLink"),
		hamburger = document.querySelector(".hamburger"),
		bt = document.querySelectorAll(".linkBtn");
	linkContent.style.display = "none";
	closeLink.addEventListener("click", () => {
		linkContent.style.display = "none";
	});
	hamburger.addEventListener("click", () => {
		linkContent.style.display = "flex";
	});
	bt.forEach(item => {
		item.addEventListener("click", () => {
			linkContent.style.display = "none";
		})
	})
});
