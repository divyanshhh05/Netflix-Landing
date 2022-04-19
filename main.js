const tabitems = document.querySelectorAll(".tab-item");
const tabcontentitems = document.querySelectorAll(".tab-content-item");

function selectitem(e) {
  removeshow();
  removeBorder();
  this.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

function removeshow() {
  tabcontentitems.forEach((item) => {
    item.classList.remove("show");
  });
}

function removeBorder() {
  tabitems.forEach((item) => {
    item.classList.remove("tab-border");
  });
}

tabitems.forEach((item) => item.addEventListener("click", selectitem));
