function toggleClass(x, className) {
    x.classList.toggle("change");
}

function mobileMenuOnClick() {
  var x = document.getElementById('idTopNavMenu');
  var menuBtn = document.getElementById('idTopNavMenuBtn');
  
  if (x.className === 'top-nav-menu') {
    x.className += ' responsive';
  } else {
    x.className = 'top-nav-menu';
  }
  toggleClass(menuBtn, 'change');
  // toggleClass(x, 'top-nav-menu');
}