import express, { type Router } from 'express';

export class Server {
  private readonly app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(port: number, routes: Router) {
    this.port = port;
    this.routes = routes;
  }

  start() {
    this.app.use(express.json());
    this.app.use(this.routes);
    this.app.listen(this.port, () =>
      console.log(`Server running on port ${this.port}`),
    );
  }
}
