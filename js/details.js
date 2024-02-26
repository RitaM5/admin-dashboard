// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar');
const sidebar = document.getElementById('sidebar');

// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

if (sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item => {
		item.textContent = '-'
	})
	allDropdown.forEach(item => {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item => {
		item.textContent = item.dataset.text;
	})
}

toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if (sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item => {
			item.textContent = '-'
		})

		allDropdown.forEach(item => {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item => {
			item.textContent = item.dataset.text;
		})
	}
})

// close

function closeSidebar() {
	sidebar.classList.toggle('hide');

	if (sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item => {
			item.textContent = '-'
		})

		allDropdown.forEach(item => {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item => {
			item.textContent = item.dataset.text;
		})
	}
}

//for e-commerce popup
var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex, colorCode) {
	tabButtons.forEach(function (node) {
		node.style.backgroundColor = "";
		node.style.color = "";
	});
	tabButtons[panelIndex].style.backgroundColor = colorCode;
	tabButtons[panelIndex].style.color = "white";
	tabPanels.forEach(function (node) {
		node.style.display = "none";
	});
	tabPanels[panelIndex].style.display = "block";
	tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, '#fff');
var wrapper = document.querySelector(".wrapper");
var close_btns = document.querySelectorAll(".close_btn");

function showPopup() {
	wrapper.classList.add("active");
}

// function showProductsPopup() {
// 	wrappers.classList.add("active");
// }
close_btns.forEach(function (btn) {
	btn.addEventListener("click", function () {
		wrapper.classList.remove("active");
	});
});

// for lock icon converts circle
const urlParams = new URLSearchParams(window.location.search);
const fromEcommerce = urlParams.get('fromEcommerce');
const iconPlaceholder = document.getElementById('iconPlaceholder');

if (fromEcommerce) {
	iconPlaceholder.textContent = 'check_circle';
} else {
	iconPlaceholder.textContent = 'lock';
}
// end lock icon

function showEcommerce() {
	document.getElementById('products-details').style.display = 'none';
	document.getElementById('ecommerce-details').style.display = 'block';
}
function showProducts() {
	document.getElementById('products-details').style.display = 'block';
	document.getElementById('ecommerce-details').style.display = 'none';
}

