
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function getData(){
    let data = {};
    data.code = document.getElementById('codigo').value;
    data.description = document.getElementById('descricao').value;
    data.descriptionRedux = document.getElementById('descReduzida').value;
    document.getElementById('prc').click(); // mudar aba

    setTimeout(() => {
        const element = document.getElementById('venda1');
        // Simula o primeiro clique
        element.dispatchEvent(new Event('click'));
        // Aguarda um curto intervalo de tempo entre os cliques (pode ser ajustado conforme necessário)
        setTimeout(() => {
            // Simula o segundo clique
            element.dispatchEvent(new Event('click'));
        }, 100); // Por exemplo, espera 100 milissegundos entre os cliques
    }, 500);


    
    data.price = document.getElementById('venda1').value;
    localStorage.data = JSON.stringify(data)

    copyToClipboard(localStorage.data)
}



let button = document.createElement('button')
button.innerText = 'Copiar dados'
button.style.position = 'fixed'
button.style.top = '0px'
button.style.right = '5px'
button.onclick = getData

document.querySelector('body').appendChild(button)



{`
"code":"2",
"description":"(PM-20) POTE REDONDO ALTO 2L INCOLOR/BRANCO",
"descriptionRedux":"(PM-20) POTE REDONDO",
"price":"5,49"
`}

