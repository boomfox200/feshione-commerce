export function menu() {
  const searchBlock = document.querySelector(".header-container-menu");
  document.addEventListener("click", function (e) {
    if (e.target.className === "linkOne") {
      searchBlock.className = "header-container-menu-mobile";
      e.target.className = "linkOne _active";
    } else if (e.target.className === "linkOne _active") {
      searchBlock.className = "header-container-menu";
      e.target.className = "linkOne";
    }
  });
}
