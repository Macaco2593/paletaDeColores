const codigo = document.querySelector("#codigo"),
        container = document.querySelector("#container"),
        textArea = document.querySelector("#textArea"),
        paletaColores = document.querySelector("#color"),
        body = document.querySelector("body")

paletaColores.addEventListener("input", () =>{
    let color = paletaColores.value
    codigo.innerHTML = color
    codigo.style.color = color
    container.style.background = color
    container.style.border = color
    body.style.background = color
    textArea.style.color = color
})