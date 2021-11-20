
var USUARIO=[{"Nombre":"Admin", "Password":"123"}]
console.log(USUARIO)

function validar_user(){
    
    var sw=false
    var nombre=document.getElementById('txt_user').value
    var pass=document.getElementById('txt_Password').value

        USUARIO.forEach(function(x){
            if (x.Nombre==nombre && x.Password==pass)
        {
            location.href='principal.html'
            sw=true            
        }

        })
        if(sw==false)
        {
            alert("El Usuario no existe, Credenciales y/o Password Incorrectos")
        }
}

function Registrar()
{
    location.href="registrar.html"
}