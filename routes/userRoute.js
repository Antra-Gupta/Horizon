import express from 'express';
import jwtCheck from "../config/auth0Config.js";
import {createUser,
    bookVisit,
    allBookings,
    cancelBooking,
    toFav,
    getAllFavorites} from "../controllers/userCntrl.js";
const router=express.Router()
router.post( "/register",createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/getAllBookings",allBookings)
router.post("/removeBooking/:id",cancelBooking);
router.post("/toFav/:rid", toFav);
router.post("/allFav/", getAllFavorites);
export { router as userRoute };