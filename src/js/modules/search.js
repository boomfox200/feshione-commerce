export function search() {
  const searchBlock = document.querySelector(".cart-block__search");
  document.addEventListener("click", function (e) {
    if (e.target.className === "active") {
      searchBlock.firstElementChild.className = "noactive";
      searchBlock.lastElementChild.className = "active";
      searchBlock.classList.add("123");
    } else {
      searchBlock.firstElementChild.className = "active";
      searchBlock.lastElementChild.className = "noactive";
      searchBlock.classList.remove("123");
    }
  });
}
