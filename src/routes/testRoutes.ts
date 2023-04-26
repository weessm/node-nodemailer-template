import { Router } from 'express';
import { TestController } from '../controllers/TestController';

const testRouter = Router();
const testController = new TestController();

testRouter.post('/', testController.useMail);

export { testRouter };
