import { Router } from "express";
import ResourceModel from "../models/Resource";

const router = Router()

router.get('/', ( async (req, res) => {
  const resources = await ResourceModel.find({});

  res.send(resources);
}))

router.get('/calculator', ((req, res) => {
  res.send('good News!!');
}))

export default router;
