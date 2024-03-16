import express from 'express';
import { deleteUser, getAllUsers, login, signup } from '../controllers/user-controller.js';

const router = express.Router();

router.get("/",getAllUsers);
router.post("/signup",signup);
router.post("/login",login);
router.delete("/:id",deleteUser);

export default router; 