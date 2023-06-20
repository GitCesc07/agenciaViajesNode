import express from 'express';
import {
  paginaDetallesViaje,
  paginaInicio,
  paginaNosotros,
  paginaTestimonio,
  paginaViajes
} from '../controllers/paginasController.js';

import {
  guardarTestimonial
} from '../controllers/testimonialController.js';

const router = express.Router();

// * req - lo que enviamos : res - lo que express nos responde
router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);
router.get("/viajes/:slug", paginaDetallesViaje);

router.get("/testimoniales", paginaTestimonio);
router.post("/testimoniales", guardarTestimonial);

export default router;