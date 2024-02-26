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

// for popup
// function showPopup() {
// 	document.getElementById('detailsPopup').style.display = 'flex';
// }

// function hidePopup() {
// 	document.getElementById('detailsPopup').style.display = 'none';
// }

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
var wrappers = document.querySelector(".product-wrapper");
var close_btns = document.querySelectorAll(".close_btn");

function showPopup() {
	wrapper.classList.add("active");
}

function showProductsPopup() {
	wrappers.classList.add("active");
}
close_btns.forEach(function (btn) {
	btn.addEventListener("click", function () {
		wrapper.classList.remove("active");
		wrappers.classList.remove("active");
	});
});

// for lock icon
const urlParams = new URLSearchParams(window.location.search);
const fromEcommerce = urlParams.get('fromEcommerce');
const iconPlaceholder = document.getElementById('iconPlaceholder');

if (fromEcommerce) {
	iconPlaceholder.textContent = 'check_circle';
} else {
	iconPlaceholder.textContent = 'lock';
}
// for lock icon

function showEcommerce() {
	document.getElementById('products-details').style.display = 'none';
	document.getElementById('ecommerce-details').style.display = 'block';
}
function showProducts() {
	document.getElementById('products-details').style.display = 'block';
	document.getElementById('ecommerce-details').style.display = 'none';
}
//   for products dropshipping all categories select option
// function selectOption(option) {
// 	document.getElementById('categoryFilter').classList.remove('active');
// 	document.getElementById('categoryOptions').style.display = 'none';
// 	document.querySelector('.filter-text').textContent = option;
// }

// document.getElementById('categoryFilter').addEventListener('click', function () {
// 	this.classList.toggle('active');
// });
//for category select
let optionMenu = document.querySelector('.select-menu');
let selectBtn = optionMenu.querySelector('.select-btn');
let options = optionMenu.querySelectorAll('.option');
let sBtn_text = optionMenu.querySelector('.sBtn-text');

selectBtn.addEventListener('click', () => optionMenu.classList.toggle('active'));

options.forEach(option => {
    option.addEventListener('click', () => {
        let selectedOption = option.querySelector('.option-text').innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove('active');
    });
});


//for popup select
// let optionMenus = document.querySelector('.select-link');
// let selectedBtn = optionMenus.querySelector('.select-btn');
// let optionsData = optionMenus.querySelectorAll('.option');
// let Btn_text = optionMenus.querySelector('.sBtn-text');

// selectedBtn.addEventListener('click', () => optionMenus.classList.toggle('.active'));
// optionsData.forEach(option => {
// 	optionsData.addEventListener('click', () => {
// 		let selectedOption = option.querySelector('.option-text').innerText;
// 		Btn_text.innerText = selectedOption;
// 		optionMenus.classList.remove('.active')
// 	})
// })

// for popup tab

var tabButtons=document.querySelectorAll(".tabContent .buttonContent button");
var tabPanels=document.querySelectorAll(".tabContent  .tabPanels");

function showTab(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="black";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showTab(0,'#eee');