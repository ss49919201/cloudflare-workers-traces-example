import { RpcTarget } from 'cloudflare:workers';

// RPC サービスの実装
export class RpcService implements RpcTarget {
	async add(a: number, b: number): Promise<number> {
		return a + b;
	}

	async multiply(a: number, b: number): Promise<number> {
		return a * b;
	}

	async greet(name: string): Promise<string> {
		return `Hello, ${name}!`;
	}

	async fetchExternalData(url: string): Promise<string> {
		const response = await fetch(url);
		return response.text();
	}
}

export default new RpcService();
