import express from 'express'
const router = express.Router();
router.get('/api-para-sprint',(req,res)=>res.send({message:"pronta"}))
export default router