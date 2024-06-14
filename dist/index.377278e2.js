const buttonElm = document.querySelector(".click-me");
const bodyElm = document.body;
let isWhite = false;
buttonElm.addEventListener("click", ()=>{
    console.log("click me");
    if (isWhite) bodyElm.style.backgroundColor = "";
    else bodyElm.style.backgroundColor = "#CEDEBD";
    isWhite = !isWhite;
});

//# sourceMappingURL=index.377278e2.js.map
