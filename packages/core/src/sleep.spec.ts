import { sleep } from './sleep';

describe('sleep', () => {
	it('성공', async () => {
		const startedAt = Date.now();
		await sleep(1000);
		expect(Date.now()).toBeGreaterThanOrEqual(startedAt + 1000);
	});
});
