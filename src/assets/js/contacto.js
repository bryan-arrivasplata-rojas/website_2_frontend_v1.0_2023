$("#formulario_contacto").on("submit", function(e){
              
    // Cancelamos el evento si se requiere 
    e.preventDefault();
    var formData = new FormData(document.getElementById("formulario_contacto"));
    console.log(formData);
    $.ajax({
        url: "https://formsubmit.co/ajax/rojas@bryanarrivasplata.com",
        method: "POST",
        data: $('#formulario_contacto').serialize(),
        dataType: "json"
    }).done(function() {
        $(".msg").html("<div class='alert alert-success alert-dismissible fade show' role='alert'>Tu Mensaje ha sido enviado Correctamente !   <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>");                     
        $("#formulario_contacto").trigger("reset");
        //alert( "la petición se ejecutó con éxito" );
        //aquí puedes ejecutar más cosas
    
      })
      .fail(function() {
        $(".msg").html("<div class='alert alert-danger alert-dismissible fade show' role='alert'>Tu Mensaje no ha podido ser enviado!   <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div></div>");      
        //aquí puedes ejecutar más cosas
    
      });
});