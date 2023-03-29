import { newOffer } from "./post_offer";
import { editOffer, switchOfferStatus } from "./put_offer";
import { delOffer } from "./del_offer";
import { getAllOffers } from "./get_offer";

export const OfferController = {
  newOffer,
  editOffer,
  delOffer,
  getAllOffers,
  switchOfferStatus,
};
