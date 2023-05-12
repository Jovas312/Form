function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const genero = document.getElementById("genero").value;
    const exampleCheck1 = document.getElementById("exampleCheck1").value;
  
    if (nombre === "") {
      alert("Por favor, ingrese su nombre.");
      return false;
    }
  
    if (apellido === "") {
      alert("Por favor, ingrese su apellido.");
      return false;
    }
  
    if (genero === "Selecciona tu sexo") {
      alert("Por favor, ingrese elige tu sexo.");
      return false;
    }

    if (exampleCheck1 === "") {
        alert("Por favor, acepte los terminos y condiciones.");
        return false;
      }
  
    return true;
  }