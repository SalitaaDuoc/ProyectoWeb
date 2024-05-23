$(document).ready(function() {
    $("#btnReg").click(function (e) { 
        
        let isValidado = true;
        
        //Aqui quitamos los texto de validacion
        $('#txtRegUserName').text(' ');
        $('#txtRegPrimerNombre').text(' ');
        $('#txtRegSegundoNombre').text(' ');
        $('#txtRegEmail').text(' ');
        $('#txtRegContrasenna').text(' ');

        //validacion de Nombre de usuario
        let userName = $('#RegUserName').val();
        if (userName.length < 5) {
            $('#txtLogUserName').text('El nombre de usuario debe tener mas de 4 letras');
            isValidado = false;
        }

        //validacion de Primer nombre
        let primerNombre = $('#RegPrimerNombre').val();
        if (primerNombre.length < 5) {
            $('#txtRegPrimerNombre').text('El primer nombre debe tener mas de 4 letras');
            isValidado = false;
        }

        //validacion de Segundo nombre
        let segundoNombre = $('#RegSegundoNombre').val();
        if (segundoNombre.length < 5) {
            $('#txtRegSegundoNombre').text('El segundo nombre debe tener mas de 4 letras');
            isValidado = false;
        }

        //validacion de email
        let email = $('#RegEmail').val();
        let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailPattern.test(email)) {
            $('#txtRegEmail').text('El email debe tener el formato de un correo electronico');
            isValidado = false;
        }

        //validacion de contrasenna
        let password = $('#RegContrasenna').val();
        let passPattern = /^(?=.*\d).{8,}$/;
        if (!passPattern.test(password)) {
            $('#txtRegContrasenna').text('La contraseña debe tener 8 o mas caracteres y numeros');
            isValidado = false;
        }

    });
});