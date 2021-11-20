var USUARIOS=[]
console.log(USUARIOS)




function agregarRegistro(){

    var nombre=document.getElementById('txt_user').value
    var pass=document.getElementById('txt_Password').value
    var Cedula=document.getElementById('txt_Cedula').value
    var Persona={"User":nombre,"Pass":pass, "Cedula":Cedula}
    USUARIOS.push(Persona)
    console.log(USUARIOS)
    document.getElementById('txt_user').value=""
    document.getElementById('txt_Password').value=""
    document.getElementById('txt_Cedula').value=""

    USUARIOS.forEach(function(x){
        console.log(x)
        console.log(x.User)

    })

}

function Login()
{
    location.href='login.html'
}