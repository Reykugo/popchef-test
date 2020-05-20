import express from 'express';
import { welcome } from 'business/app/controllers';

const router = express.Router();

router.get('/', welcome);

export default router;
