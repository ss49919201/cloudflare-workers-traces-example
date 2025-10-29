import { Hono } from 'hono';
import { Context } from 'hono';

const app = new Hono<{ Bindings: Env }>();

app.get('/', async (c: Context) => {
	await fetch('https://ss49919201.work/');
	return c.text('Hello World!');
});

export default app;
