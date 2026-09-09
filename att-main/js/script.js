let tamanhoGrande = false; 
let tamanhoPequeno = false; 
 
function aumentarTexto() { 
    const conteudo = document.getElementById("conteudo"); 
    conteudo.classList.remove("texto-pequeno"); 
    conteudo.classList.add("texto-grande"); 
    tamanhoGrande = true; 
    tamanhoPequeno = false; 
} 
 
function diminuirTexto() { 
    const conteudo = document.getElementById("conteudo"); 
    conteudo.classList.remove("texto-grande"); 
    conteudo.classList.add("texto-pequeno"); 
    tamanhoGrande = false; 
    tamanhoPequeno = true; 
} 
 
function altoContraste() { 
    const btn = document.getElementById('btnAltoContraste'); 
    const ativado = document.body.classList.toggle('alto-contraste'); 
    
    if (btn) { 
        btn.setAttribute('aria-pressed', ativado ? 'true' : 'false'); 
    } 
} 
 
function lerPagina() { 
    speechSynthesis.cancel(); 
 
    const texto = document.getElementById("conteudo").innerText; 
 
    const leitura = new SpeechSynthesisUtterance(texto); 
 
    leitura.lang = "de-DE"; 
    leitura.rate = 0.9; 
 
    speechSynthesis.speak(leitura); 
} 

function pararLeitura() {
    speechSynthesis.cancel();
}

