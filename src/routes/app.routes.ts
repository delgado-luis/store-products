import { Router } from 'express';

export class AppRoutes {
  router() {
    const router = Router();

    router.use('/', () => {});

    return router;
  }
}
