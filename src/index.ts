const buttonElm = document.querySelector(".click-me") as HTMLButtonElement;
const bodyElm: HTMLElement = document.body;
let isWhite: boolean = false;

buttonElm.addEventListener("click", () => {
  console.log("click me");
  if (isWhite) {
    bodyElm.style.backgroundColor = "";
  } else {
    bodyElm.style.backgroundColor = "#CEDEBD";
  }

  isWhite = !isWhite;
});
