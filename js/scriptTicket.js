const valorTicket = 200;
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("cat");
function quitarError(){
    let x = document.querySelectorAll(".campo, .campoMail, .campoPrecio");
    let i;
    for( i = 0; i < x; i++){
        x[i].classList.remove('invalido');
    }
}
function totalPagar(){
    quitarError();
    if (nombre.value === ""){
        alert("Por favor, escriba su nombre");
        nombre.classList.add("invalido");
        nombre.focus();
        return;
    }
    if (apellido.value === ""){
        alert("Por favor, escriba su apellido");
        apellido.classList.add("invalido");
        apellido.focus();
        return;
    }
    if (mail.value === ""){
        alert("Por favor, escriba su correo electrónico");
        mail.classList.add("invalido");
        mail.focus();
        return;
    }
    const mailValido = mail =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }
    if (!mailValido(mail.value)){
        alert("Por favor, escriba su correo electrónico valido");
        mail.classList.add("invalido");
        mail.focus();
        return;
    }
    if ((cantidad.value == 0) || (isNaN(cantidad.value))){
        alert("Por favor, ingrese correctamente la cantidad de tickets");
        cantidad.classList.add("invalido");
        cantidad.focus();
        return;
    }
    let valorTotal = valorTicket*(cantidad.value)
    if(categoria.value==0){
        valorTotal=valorTotal;
    }
    if(categoria.value==1){
        valorTotal=valorTotal-(descuentoEstudiante/100*valorTotal);
    }
    if(categoria.value==2){
        valorTotal=valorTotal-(descuentoTrainee/100*valorTotal);
    }
    if(categoria.value==3){
        valorTotal=valorTotal-(descuentoJunior/100*valorTotal);
    }
    totalPago.innerHTML = valorTotal;
}
bResumen.addEventListener('click', totalPagar)
function resetear(){
    quitarError();
    totalPago.innerHTML="";
}
bBorrar.addEventListener('click', resetear)