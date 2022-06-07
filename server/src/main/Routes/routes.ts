import { Router } from "express";
const router = Router();

/* PRODUCTS */
import { router as postProduct } from "./ProductRoutes/post_products";
import { router as putProduct } from "./ProductRoutes/put_product";
import { router as delProduct } from "./ProductRoutes/del_product";
import { router as getRouter } from "./ProductRoutes/get_product";

router.use(postProduct);
router.use(putProduct);
router.use(delProduct);
router.use(getRouter);

/* OFFERS */

import { router as postOffer } from "./OfferRoutes/post_offer";
import { router as putOffer } from "./OfferRoutes/put_offer";
import { router as delOffer } from "./OfferRoutes/del_offer";
import { router as getOffer } from "./OfferRoutes/get_offer";

router.use(postOffer);
router.use(putOffer);
router.use(delOffer);
router.use(getOffer);

export { router };
