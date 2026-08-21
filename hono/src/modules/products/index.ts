import { Hono } from 'hono';
import { db } from '../../db/index.js';
import { products } from '../../db/schema/index.js';
import { eq } from 'drizzle-orm';

export const productsModule = new Hono();

// List all active products
productsModule.get('/', async (c) => {
  try {
    const allProducts = await db
      .select()
      .from(products)
      .where(eq(products.isActive, true));

    return c.json({ success: true, data: allProducts });
  } catch (error: any) {
    // If DB tables aren't migrated yet, return clean fallback
    return c.json({ success: true, data: [], note: 'Database ready for migration' });
  }
});

// Get single product by ID
productsModule.get('/:id', async (c) => {
  const id = Number(c.req.param('id'));
  if (isNaN(id)) {
    return c.json({ success: false, error: 'Invalid product ID' }, 400);
  }

  try {
    const [product] = await db
      .select()
      .from(products)
      .where(eq(products.id, id))
      .limit(1);

    if (!product) {
      return c.json({ success: false, error: 'Product not found' }, 404);
    }

    return c.json({ success: true, data: product });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
});
