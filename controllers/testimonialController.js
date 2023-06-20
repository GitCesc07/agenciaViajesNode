import { Testimoniales } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {

  // ! Validando formulario

  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "El Nombre está vacío" });
  }

  if (correo.trim() === "") {
    errores.push({ mensaje: "El Correo está vacío" });
  }

  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El Mensaje está vacío" });
  }

  if (errores.length > 0) {

    // COnsultar testimoniales Existentes
    const testimoniales = await Testimoniales.findAll();


    // * Mostrar la vista con errores
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales
    })
  }
  else {
    // Almacenarlo en la base de datos
    try {
      await Testimoniales.create({
        nombre,
        correo,
        mensaje
      });

      res.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
}

export {
  guardarTestimonial
}