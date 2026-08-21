import { Hono } from 'hono';

export const wishlistModule = new Hono();

wishlistModule.get('/', (c) => c.json({ success: true, module: 'wishlist' }));
