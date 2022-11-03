import { FrozenMap } from './frozen-map';

describe('FrozenMap', () => {
	it('set', () => {
		const sut = new FrozenMap();
		sut.set('A', '1');
		sut.set('A', '2');
		sut.set('A', '3');
		expect(sut.get('A')).toMatchInlineSnapshot(`"1"`);
	});
});
