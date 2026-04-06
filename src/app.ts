import { AppRoutes } from './routes/app.routes.ts';
import { Server } from './server.ts';

function main() {
  const appRoutes = new AppRoutes();

  const server = new Server(3000, appRoutes.router());

  server.start();
}

main();
