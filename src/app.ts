import { envs } from './config/envs.ts';
import { AppRoutes } from './routes/app.routes.ts';
import { Server } from './server.ts';

function main() {
  const appRoutes = new AppRoutes();

  const server = new Server(envs.PORT, appRoutes.router());

  server.start();
}

main();
