import express from 'express'
const router = express.Router();
router.get('/teste',(req,res)=>res.send({message:"pronta"}))
export default router