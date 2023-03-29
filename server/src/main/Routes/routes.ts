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

/* CATEGORIES */
import { router as postCategory } from "./CategoryRoutes/post_category";
import { router as getCategory } from "./CategoryRoutes/get_category";
import { router as delCategory } from "./CategoryRoutes/del_category";
import { router as putCategory } from "./CategoryRoutes/put_category";

router.use(postCategory);
router.use(getCategory);
router.use(delCategory);
router.use(putCategory);

/* OFFERS */

import { router as postOffer } from "./OfferRoutes/post_offer";
import { router as putOffer } from "./OfferRoutes/put_offer";
import { router as delOffer } from "./OfferRoutes/del_offer";
import { router as getOffer } from "./OfferRoutes/get_offer";

router.use(postOffer);
router.use(putOffer);
router.use(delOffer);
router.use(getOffer);

/* USER */

import { router as postUser } from "./User/post_user";

router.use(postUser);

import { router as postQuoter } from "./QuoterRoutes/post_quoter";
import { router as getQuoter } from "./QuoterRoutes/get_quoter";
import { router as putQuoter } from "./QuoterRoutes/put_quoter";

router.use(postQuoter);
router.use(getQuoter);
router.use(putQuoter);

export { router };
