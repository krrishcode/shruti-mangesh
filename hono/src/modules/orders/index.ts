import { Hono } from 'hono';

export const ordersModule = new Hono();

ordersModule.get('/', (c) => c.json({ success: true, module: 'orders' }));
