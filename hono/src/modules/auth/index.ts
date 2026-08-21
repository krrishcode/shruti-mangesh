import { Hono } from 'hono';

export const authModule = new Hono();

authModule.post('/login', async (c) => {
  return c.json({ success: true, message: 'Login endpoint' });
});

authModule.post('/register', async (c) => {
  return c.json({ success: true, message: 'Register endpoint' });
});
