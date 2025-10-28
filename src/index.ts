export default {
	async fetch(request, env, ctx): Promise<Response> {
		await fetch('https://ss49919201.work/');

		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
