const btn = document.querySelector("#btnS")
var res = document.querySelectorAll(".responder")
var NumCmt = 0

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#chk') 

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})

res.forEach(button =>{
    button.addEventListener("click", function(){

        const divPai = button.parentNode
    
        digitarCmt ('#'+divPai.id)

        envio(divPai.id)

    })
})

function envio(divPai){
    document.getElementById('subject').addEventListener('keyup', function(event) {
        if (event.code === 'Enter'){
            event.preventDefault();

            const name = document.querySelector("#name").value
            const subject = document.querySelector("#subject").value
            adcComentario(name,subject,('#'+divPai))

            var formulario = document.getElementById('formulario')
            formulario.parentNode.removeChild(formulario)
        }
    });
}

function digitarCmt(divPai){

    if(!document.getElementById("formulario")){
        const divForumCmt = document.querySelector(divPai);

        const forum = document.createElement("form");   
        forum.setAttribute("id", "formulario")         
        
        const divNome = document.createElement("input");
        divNome.setAttribute("id", "name")
        divNome.setAttribute("placeholder", "Nome...")
        
        const space = document.createElement("br");

        const divComentario = document.createElement("textarea");
        divComentario.setAttribute('placeholder', 'Comentario...')
        divComentario.setAttribute('id', 'subject')
    
        forum.appendChild(divNome);
        forum.appendChild(space);
        forum.appendChild(divComentario);
        divForumCmt.appendChild(forum);
    }
}

function adcComentario (nome,comentario, local) {


    if(local=='#div1'){
        var divForum = document.createElement("div");
        divForum.classList.add("forum")
    }else{
        var divForum = document.querySelector(local)
    }

    divForum.setAttribute("id", `Comentario${NumCmt}`)
    NumCmt++

    const divNome = document.createElement("div");
    divNome.classList.add("nome");
    const nomeNovo = document.createTextNode(nome);
    divNome.appendChild(nomeNovo);
    
    const divComentario = document.createElement("div");
    divComentario.classList.add("comentario");
    const comentarioNovo = document.createTextNode(comentario);
    divComentario.appendChild(comentarioNovo);
    
    if(local=="#div1"){
        const inputButon = document.createElement("input");
        inputButon.classList.add("responder");
        inputButon.value = "Responder"
        inputButon.setAttribute("type", "button");
        divForum.appendChild(divNome);
        divForum.appendChild(divComentario);
        divForum.appendChild(inputButon);
    } else{
        divForum.appendChild(divNome);
        divForum.appendChild(divComentario);
    }

    if(local=="#div1"){
        const divAtual = document.querySelector(".comentarios");
        divAtual.appendChild(divForum);
    }

    res = document.querySelectorAll(".responder")

    res.forEach(button =>{
        button.addEventListener("click", function(){

            const divPai = button.parentNode

            console.log(divPai.id)
        
            digitarCmt ('#'+divPai.id)

            envio(divPai.id)

        })
    })

}



btn.addEventListener("click", function(event){
    event.preventDefault()

    const nome = document.querySelector("#name0").value
    const comentario = document.querySelector("#subject0").value

    document.querySelector("#name0").value = ""
    document.querySelector("#subject0").value = ""
    
    adcComentario (nome, comentario, "#div1")

})