import { envs } from './config/envs.ts';
import { initializeDataSource } from './database/connection.ts';
import { AppRoutes } from './routes/app.routes.ts';
import { Server } from './server.ts';

async function main() {
  await initializeDataSource();

  const appRoutes = new AppRoutes();

  const server = new Server(envs.PORT, appRoutes.router());

  server.start();
}

void main();
