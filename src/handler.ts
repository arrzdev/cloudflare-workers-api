import { Router } from 'itty-router';

import Hi from './handlers/hi';

const router = Router();

router
  .get('/api/hi', Hi)
  .get('*', () => new Response('Not found', { status: 404 }));

export const handleRequest = request => router.handle(request);