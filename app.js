

//Idea de logica
//Crear funciones para cada boton del header y que cada que se presione me lleve a la seccion que deseo y le cambie el display a las demas por display none

//Paso 1: crear variables manipulando el DOM y llamando cada seccion
let homeID = document.getElementById('home')
let aboutID = document.getElementById('about')
let projectsID = document.getElementById('projects')
let contactID = document.getElementById('contact')

function home(){
    homeID.style.display= "flex"

    aboutID.style.display= "none"
    projectsID.style.display= "none"
    contactID.style.display= "none"
}

function about(){
    aboutID.style.display= "flex"

    homeID.style.display= "none"
    projectsID.style.display= "none"
    contactID.style.display= "none"
    
}

function projects(){
    projectsID.style.display= "flex"

    homeID.style.display= "none"
    aboutID.style.display= "none"
    contactID.style.display= "none"
    
}

function contact(){
    contactID.style.display= "flex"

    homeID.style.display= "none"
    aboutID.style.display= "none"
    projectsID.style.display= "none"
    
}