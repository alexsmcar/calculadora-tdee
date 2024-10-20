const form = document.querySelector(".formulario_main");
const btn = document.querySelector(".btn");
const paragrafo = document.getElementById("paragrafo")
const span = document.getElementById("tdee")
function calculate(event) {
    event.preventDefault();
    if (checkInput()) {
        const sexo = form["sexo"].value;
        const idade = form["idade"].value;
        const peso = form["peso"].value.replace(",",".");
        const altura = form["altura"].value;
        const atividade = form["atividade"].value;
        console.log(peso)
        if (isNaN(peso)) {
            console.log("valor incorreto")
        }
        function tdee() {
            const formula = (10 * (+peso) + 6.25 * (+altura) - 5 * (+idade));
            if (sexo === "masculino") {
                return Math.round((formula + 5) * (+atividade))
            }
            else if (sexo === "feminino") {
                return Math.round((formula - 161) * (+atividade))
            }
        }
        displayTdee(tdee());
    }
}

function checkInput() {
    let isValid = true;
    const elements = Array.from(form.elements).filter(item => {
    const itemTag = item.tagName;
        if (itemTag === "INPUT" || itemTag === "SELECT") {
            return item;
        }
    });
    elements.forEach(element => {
        const erro = element.nextElementSibling;
        if (element.value.trim() === "") {
            erro.innerText = "* Por favor, preencha este campo."
            isValid = false;
        }
        else {
        erro.innerText = "";
        }
    })
    return isValid;
}

function displayTdee(tdee) {
    span.innerText = tdee;
    paragrafo.classList.add("ativo")
}

form.addEventListener("submit", calculate)


