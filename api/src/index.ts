import { Context, Hono } from 'hono';

const app = new Hono<{ Bindings: Env }>();

app.get('/err', async (c: Context) => {
	c.status(500);
	return c.text('Internal error');
});

app.get('/', async (c: Context) => {
	await fetch('https://ss49919201.work/');
	return c.text('Hello World!');
});

export default app;
