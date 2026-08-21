import { Hono } from 'hono';

export const paymentsModule = new Hono();

paymentsModule.get('/', (c) => c.json({ success: true, module: 'payments' }));
