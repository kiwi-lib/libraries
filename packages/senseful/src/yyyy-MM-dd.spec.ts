import { yyyyMMdd } from './yyyy-MM-dd';

describe('yyyyMMdd', () => {
	it('yyyyMMdd', () => {
		expect(yyyyMMdd('20000101')).toMatchInlineSnapshot(`"20000101"`);
	});

	it('yyyy.MM.dd', () => {
		expect(yyyyMMdd('2000.01.01')).toMatchInlineSnapshot(`"20000101"`);
	});

	it('yyyy-MM-dd', () => {
		expect(yyyyMMdd('2000-01-01')).toMatchInlineSnapshot(`"20000101"`);
	});

	it('separator', () => {
		expect(yyyyMMdd('2000-01-01', { separator: '.' })).toMatchInlineSnapshot(
			`"2000.01.01"`,
		);
	});
});
