import { setupWorker, SetupWorkerApi } from 'msw';
import { handlers } from './handlers';
import { browser, dev } from '$app/env';

let worker: SetupWorkerApi | null;
if (browser && dev) {
  worker = setupWorker(...handlers);
} else {
  worker = null;
}

export { worker };
