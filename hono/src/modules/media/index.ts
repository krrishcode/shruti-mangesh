import { Hono } from 'hono';

export const mediaModule = new Hono();

mediaModule.get('/', (c) => c.json({ success: true, module: 'media' }));
