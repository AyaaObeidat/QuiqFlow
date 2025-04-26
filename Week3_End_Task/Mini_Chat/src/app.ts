import { initializeModels } from './models'; // استدعاء الـ models
import Server from './server';

async function main() {
  initializeModels();

  const server = new Server(3000);
  server.start();
}

main();
