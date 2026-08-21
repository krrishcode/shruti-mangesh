import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const createProductSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().optional(),
  price: z.number().positive(),
  sale_price: z.number().positive().optional(),
  stock: z.number().int().nonnegative().default(0),
  sku: z.string().min(2),
  category_id: z.number().int().optional(),
  designer_id: z.number().int().optional(),
  collection_id: z.number().int().optional(),
});
