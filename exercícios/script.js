function checarSite(url) {
    fetch(url).then(response => {
        if(response == 200) {
            return true;
        } else {
            return false;
        }
    })
} 

function buscar() {
    const exercicio = document.getElementById("exercicio");
    const pagina = document.getElementById("pagina");

    let tema;
    //let endereco = "./ex" + exercicio.value; 

    switch(Number(exercicio.value)) {
        case 22:
            tema = "fundo";
        break;
        case 23: 
            tema = "tabelas";
        break;
        case 24:
            tema = "iframe";
        break;
        case 25:
            tema = "form";
        break;
    }

    let endereco = "./ex" + exercicio.value + "/" + tema + pagina.value + ".html";

    if(checarSite(endereco)) {
        window.location.href = endereco;
    } else {
        window.location.href = "./erro";
    }
}

function previa() {
    const exercicio = document.getElementById("exercicio");
    const pagina = document.getElementById("pagina");
    const iframe = document.getElementById("tela");

    let tema;
    //let endereco = "./ex" + exercicio.value; 

    switch(Number(exercicio.value)) {
        case 22:
            tema = "fundo";
        break;
        case 23: 
            tema = "tabelas";
        break;
        case 24:
            tema = "iframe";
        break;
        case 25:
            tema = "form";
        break;
    }

    let endereco = "./ex" + exercicio.value + "/" + tema + pagina.value + ".html";

    if(checarSite(endereco)) {
        tela.src = endereco;
    } else {
        tela.src = "./erro";
    }
}