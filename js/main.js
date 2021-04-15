/*Loader*/
window.onload = function () {
  let loader  = document.querySelector(".loader");
  loader.style.display = "none";
};

/*Custom Select*/
function select() {
    const elem = document.querySelector(".contact-us__item-wrapp");
    elem.hidden = !elem.hidden;
    elem.onclick = (event) =>{
      let curr = event.target.textContent;
      let title = document.querySelector(".contact-us__item-title");
      title.innerHTML = curr;
    }
}