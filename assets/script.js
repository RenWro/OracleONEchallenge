const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem');

function encriptarBtn() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = '';
    mensagem.style.backgroundImage = "none";
}

function encriptar(texto){
    let criptoMatriz =[['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    texto = texto.toLowerCase();
    for(let i = 0;criptoMatriz.length > i; i++){
        if(texto.includes(criptoMatriz[i][0])){
            texto = texto.replaceAll(criptoMatriz[i][0], criptoMatriz[i][1]);
        }
    }
    return texto;
}

function desencriptarBtn(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = '';
    mensagem.style.backgroundImage = "none";
}
function desencriptar(texto){
    let criptoMatriz =[['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    texto = texto.toLowerCase();
    for(let i = 0;criptoMatriz.length > i; i++){
        if(texto.includes(criptoMatriz[i][1])){
            texto = texto.replaceAll(criptoMatriz[i][1], criptoMatriz[i][0]);
        }
    }
    return texto;
}

function copiar() {
    navigator.clipboard.writeText(mensagem.value)
        .then(() => {
            console.log("Texto copiado com sucesso");
        })
        .catch(err => {
            console.error("Erro ao copiar texto: ", err);
        })
    }