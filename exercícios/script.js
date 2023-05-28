function buscar() {
    const exercicio = document.getElementById("exercicio");
    const pagina = document.getElementById("pagina");

    let tema;
    let limite;
    //let endereco = "./ex" + exercicio.value; 

    switch(Number(exercicio.value)) {
        case 22:
            tema = "fundo";
            limite = 7;
        break;
        case 23: 
            tema = "tabela";
            limite = 6;
        break;
        case 24:
            tema = "iframe";
            limite = 6;
        break;
        case 25:
            tema = "form";
            limite = 10;
        break;
        case 26:
            tema = "mq0";
            limite = 5;
        break;
        default:
            limite = -9;
        break;
    }

    let endereco;

    if(Number(exercicio.value) != 26) {
        endereco = "./ex" + Number(exercicio.value) + "/" + tema + "0" + pagina.value + ".html";
    } else if(Number(exercicio.value) == 26 && exercicio.value != "null") {
        endereco = "./ex" + Number(exercicio.value) + "/" + tema + Number(pagina.value) + "/index.html"; 
    }

    if(Number(pagina.value) > 0 && Number(pagina.value) <= limite) {
        window.location.href = endereco;
    } else {
        tela.src = "./erro.html";
    }
}

function verPrevia() {
    const exercicio = document.getElementById("exercicio");
    const pagina = document.getElementById("pagina");
    const iframe = document.getElementById("tela");

    let tema;
    let limite;
    //let endereco = "./ex" + exercicio.value; 

    switch(Number(exercicio.value)) {
        case 22:
            tema = "fundo";
            limite = 7;
        break;
        case 23: 
            tema = "tabela";
            limite = 6;
        break;
        case 24:
            tema = "iframe";
            limite = 6;
        break;
        case 25:
            tema = "form";
            limite = 10;
        break;
        case 26:
            tema = "mq0";
            limite = 5;
        break;
        default:
            limite = -9;
        break;
    }

    let endereco;

    if(Number(exercicio.value) != 26) {
        endereco = "./ex" + Number(exercicio.value) + "/" + tema + "0" + pagina.value + ".html";
    } else if(Number(exercicio.value) == 26 && exercicio.value != "null") {
        endereco = "./ex" + Number(exercicio.value) + "/" + tema + Number(pagina.value) + "/index.html"; 
    }

    if(Number(pagina.value) > 0 && Number(pagina.value) <= limite) {
        tela.src = endereco;
    } else {
        tela.src = "./erro.html";
    }
}