import express from "express";
import {sendendRegistartion} from '../Controller/registration.js'

const router = express.Router();
router.post('/send', sendendRegistartion);

export default router;
