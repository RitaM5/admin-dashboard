// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');

allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})


// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}

toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})




sidebar.addEventListener('mouseleave', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})
	}
})



sidebar.addEventListener('mouseenter', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})




// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})




// MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');

allMenu.forEach(item=> {
	const icon = item.querySelector('.icon');
	const menuLink = item.querySelector('.menu-link');

	icon.addEventListener('click', function () {
		menuLink.classList.toggle('show');
	})
})



window.addEventListener('click', function (e) {
	if(e.target !== imgProfile) {
		if(e.target !== dropdownProfile) {
			if(dropdownProfile.classList.contains('show')) {
				dropdownProfile.classList.remove('show');
			}
		}
	}

	allMenu.forEach(item=> {
		const icon = item.querySelector('.icon');
		const menuLink = item.querySelector('.menu-link');

		if(e.target !== icon) {
			if(e.target !== menuLink) {
				if (menuLink.classList.contains('show')) {
					menuLink.classList.remove('show')
				}
			}
		}
	})
})

//main sidebar
function showDashboards() {
	document.getElementById('dashboards').style.display = 'block';
	document.getElementById('pricePannel').style.display = 'none';
}

function showPricePannel() {
	document.getElementById('dashboards').style.display = 'none';
	document.getElementById('pricePannel').style.display = 'block';
}
function showProducts(){
	document.getElementById('dashboards').style.display = 'none';
	document.getElementById('pricePannel').style.display = 'none';
	document.getElementById('products-details').style.display = 'block';
}

function showEcommerce() {
	document.getElementById('billboard').style.display = 'none';
	document.getElementById('ecommerce').style.display = 'block';
}


// sub sideber for pricepannel

document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar-content');

    sidebarToggle.addEventListener('click', function () {
      sidebar.classList.toggle('hide');
	  sidebar.classList.toggle('show')
    });
  });

//for dropshipping-products

//for all category select
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

//products import popup
var wrappers = document.querySelector(".product-wrapper");
var close_btns = document.querySelectorAll(".close_btn");

function showProductsPopup() {
	wrappers.classList.add("active");
}
close_btns.forEach(function (btn) {
	btn.addEventListener("click", function () {
		wrappers.classList.remove("active");
	});
});

//for popup store link select
document.addEventListener('DOMContentLoaded', function () {
	let optionMenus = document.querySelector('.select-link');
	let selectedBtn = optionMenus.querySelector('.select-link .select-btn');
	let optionsData = optionMenus.querySelectorAll('.select-link .option');
	let Btn_text = optionMenus.querySelector('.select-link .sBtn-text');
	
	selectedBtn.addEventListener('click', () => optionMenus.classList.toggle('active') );
	optionsData.forEach(options => {
		options.addEventListener('click', () => {
			let selectedOption = options.querySelector('.select-link .option-text').innerText;
			Btn_text.innerText = selectedOption;
			optionMenus.classList.remove('active')
		})
	})
});

//for popup ship select
document.addEventListener('DOMContentLoaded', function () {
	let optionMenus = document.querySelector('.select-ship');
	let selectedBtn = optionMenus.querySelector('.select-ship .select-btn');
	let optionsData = optionMenus.querySelectorAll('.select-ship .option');
	let Btn_text = optionMenus.querySelector('.select-ship .sBtn-text');
	
	selectedBtn.addEventListener('click', () => optionMenus.classList.toggle('active') );
	optionsData.forEach(options => {
		options.addEventListener('click', () => {
			let selectedOption = options.querySelector('.select-ship .option-text').innerText;
			Btn_text.innerText = selectedOption;
			optionMenus.classList.remove('active')
		})
	})
});
// for popup order select
document.addEventListener('DOMContentLoaded', function () {
	let optionMenus = document.querySelector('.select-order');
	let selectedBtn = optionMenus.querySelector('.select-order .select-btn');
	let optionsData = optionMenus.querySelectorAll('.select-order .option');
	let Btn_text = optionMenus.querySelector('.select-order .sBtn-text');
	
	selectedBtn.addEventListener('click', () => optionMenus.classList.toggle('active') );
	optionsData.forEach(options => {
		options.addEventListener('click', () => {
			let selectedOption = options.querySelector('.select-order .option-text').innerText;
			Btn_text.innerText = selectedOption;
			optionMenus.classList.remove('active')
		})
	})
});

//for popup shipping method select
document.addEventListener('DOMContentLoaded', function () {
	let optionMenus = document.querySelector('.select-method');
	let selectedBtn = optionMenus.querySelector('.select-method .select-btn');
	let optionsData = optionMenus.querySelectorAll('.select-method .option');
	let Btn_text = optionMenus.querySelector('.select-method .sBtn-text');
	
	selectedBtn.addEventListener('click', () => optionMenus.classList.toggle('active') );
	optionsData.forEach(options => {
		options.addEventListener('click', () => {
			let selectedOption = options.querySelector('.select-method .option-text').innerText;
			Btn_text.innerText = selectedOption;
			optionMenus.classList.remove('active')
		})
	})
});

// for category select
document.addEventListener('DOMContentLoaded', function () {
	let optionMenus = document.querySelector('.selects-category');
	let selectedBtn = optionMenus.querySelector('.selects-category .select-btn');
	let optionsData = optionMenus.querySelectorAll('.selects-category .option');
	let Btn_text = optionMenus.querySelector('.selects-category .sBtn-text');
	
	selectedBtn.addEventListener('click', () => optionMenus.classList.toggle('active') );
	optionsData.forEach(options => {
		options.addEventListener('click', () => {
			let selectedOption = options.querySelector('.selects-category .option-text').innerText;
			Btn_text.innerText = selectedOption;
			optionMenus.classList.remove('active')
		})
	})
});
// for select price
document.addEventListener('DOMContentLoaded', function () {
	let optionMenus = document.querySelector('.select-price');
	let selectedBtn = optionMenus.querySelector('.select-price .select-btn');
	let optionsData = optionMenus.querySelectorAll('.select-price .option');
	let Btn_text = optionMenus.querySelector('.select-price .sBtn-text');
	
	selectedBtn.addEventListener('click', () => optionMenus.classList.toggle('active') );
	optionsData.forEach(options => {
		options.addEventListener('click', () => {
			let selectedOption = options.querySelector('.select-price .option-text').innerText;
			Btn_text.innerText = selectedOption;
			optionMenus.classList.remove('active')
		})
	})
});

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