import { Hono } from 'hono';

export const usersModule = new Hono();

usersModule.get('/', (c) => c.json({ success: true, module: 'users' }));
