import { Viaje } from '../models/Viaje.js';
import { Testimoniales } from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => {

  // Consultar 3 viajes del modelo viaje
  const promiseDB = [];

  promiseDB.push(Viaje.findAll({ limit: 3 }));
  promiseDB.push(Testimoniales.findAll({ limit: 3 }));


  try {

    const resultado = await Promise.all(promiseDB);

    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes: resultado[0],
      testimoniales: resultado[1]
    });
  } catch (error) {
    console.log(error);
  }

}

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros"
  });
}

const paginaViajes = async (req, res) => {

  // * Consultar base de datos
  const viajes = await Viaje.findAll();

  console.log(viajes);

  res.render("viajes", {
    pagina: "Próximos Viajes",
    viajes,
  });
}

const paginaTestimonio = async (req, res) => {

  try {
    const testimoniales = await Testimoniales.findAll();

    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales
    });
  } catch (error) {
    console.log(error);
  }
}


//* Cargando Viaje por su slug
const paginaDetallesViaje = async (req, res) => {
  const { slug } = req.params;

  try {
    const viaje = await Viaje.findOne({ where: { slug } })

    res.render("viaje", {
      pagina: "Información Viaje",
      viaje
    })
  } catch (error) {
    console.log(error);
  }
}

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimonio,
  paginaDetallesViaje
}