const tela = document.getElementById("sobremim");
var isMenuOff = true;

function sobremim() {
    if(isMenuOff) {
        tela.style.display = "block";
        isMenuOff = false;
    } else {
        tela.style.display = "none";
        isMenuOff = true;
    }
}