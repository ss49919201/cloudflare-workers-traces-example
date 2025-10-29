import { Context, Hono } from 'hono';

interface Env {
	RPC: any;
}

const app = new Hono<{ Bindings: Env }>();

app.get('/err', async (c: Context) => {
	c.status(500);
	return c.text('Internal error');
});

app.get('/', async (c: Context) => {
	await fetch('https://ss49919201.work/');
	return c.text('Hello World!');
});

// RPC エンドポイント
app.get('/rpc/add', async (c: Context) => {
	const a = parseFloat(c.req.query('a') || '0');
	const b = parseFloat(c.req.query('b') || '0');
	const result = await c.env.RPC.add(a, b);
	return c.json({ result });
});

app.get('/rpc/multiply', async (c: Context) => {
	const a = parseFloat(c.req.query('a') || '0');
	const b = parseFloat(c.req.query('b') || '0');
	const result = await c.env.RPC.multiply(a, b);
	return c.json({ result });
});

app.get('/rpc/greet', async (c: Context) => {
	const name = c.req.query('name') || 'World';
	const result = await c.env.RPC.greet(name);
	return c.json({ result });
});

app.get('/rpc/fetch', async (c: Context) => {
	const url = c.req.query('url') || 'https://example.com';
	const result = await c.env.RPC.fetchExternalData(url);
	return c.json({ result });
});

export default app;
