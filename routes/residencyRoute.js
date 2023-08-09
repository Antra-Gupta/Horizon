import express from 'express';
// import jwtCheck from "../config/auth0Config.js";
import {createResidency,getAllResidencies,getResidency} from "../controllers/residencyCntrl.js";
const router=express.Router()
router.post("/create", createResidency)
router.get("/allresd",getAllResidencies) 
router.get("/:id",getResidency)
export {router as residencyRoute}  