import { MultiValueWeakMap } from './multi-value-weak-map';

interface Something {
	name: string;
}
describe('MultiValueWeakMap', () => {
	it('get - empty', () => {
		const sut = new MultiValueWeakMap();
		const fooKey = {};
		const emptyArray = sut.get(fooKey);
		expect(emptyArray).toMatchInlineSnapshot(`Array []`);
	});

	it('get - array', () => {
		const sut = new MultiValueWeakMap<Something, string>();
		const fooKey = { name: 'foo' };
		const barKey = { name: 'bar' };
		sut.push(fooKey, '1');
		sut.push(fooKey, '2');
		sut.push(fooKey, '3');
		sut.push(barKey, '1');
		sut.push(barKey, '2');
		const array = sut.get(fooKey);
		expect(array).toMatchInlineSnapshot(`
Array [
  "1",
  "2",
  "3",
]
`);
	});

	it('delete', () => {
		const sut = new MultiValueWeakMap();
		const fooKey = {};
		const emptyKey = {};
		sut.push(fooKey, 'bar');
		sut.delete(fooKey);
		expect(sut.has(fooKey)).toBe(false);
		expect(sut.has(emptyKey)).toBe(false);
	});

	it('has', () => {
		const sut = new MultiValueWeakMap();
		const fooKey = {};
		const emptyKey = {};
		sut.push(fooKey, 'bar');
		expect(sut.has(fooKey)).toBe(true);
		expect(sut.has(emptyKey)).toBe(false);
	});

	it('[Symbol.toStringTag]', () => {
		const sut = new MultiValueWeakMap();
		expect(sut.toString()).toMatchInlineSnapshot(`"[object [object WeakMap]]"`);
	});
});
