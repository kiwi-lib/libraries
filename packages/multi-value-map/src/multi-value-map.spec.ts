import { MultiValueMap } from './multi-value-map';

describe('MultiValueMap', () => {
	it('get - empty', () => {
		const sut = new MultiValueMap();
		const emptyArray = sut.get('foo');
		expect(emptyArray).toMatchInlineSnapshot(`Array []`);
	});

	it('get - array', () => {
		const sut = new MultiValueMap<'foo' | 'bar', string>();
		sut.push('foo', '1');
		sut.push('foo', '2');
		sut.push('foo', '3');
		sut.push('bar', '1');
		sut.push('bar', '2');
		const array = sut.get('foo');
		expect(array).toMatchInlineSnapshot(`
Array [
  "1",
  "2",
  "3",
]
`);
	});

	it('keys, values, entries', () => {
		const sut = new MultiValueMap();
		sut.push('foo', '1');
		sut.push('foo', '2');
		sut.push('foo', '3');
		expect(sut.keys()).toMatchInlineSnapshot(`
Array [
  "foo",
]
`);
		expect(sut.values()).toMatchInlineSnapshot(`
Array [
  Array [
    "1",
    "2",
    "3",
  ],
]
`);
		expect(sut.entries()).toMatchInlineSnapshot(`
Array [
  Array [
    "foo",
    Array [
      "1",
      "2",
      "3",
    ],
  ],
]
`);
	});

	it('forEach', () => {
		const sut = new MultiValueMap();
		sut.push('foo', '1');
		sut.push('foo', '2');
		sut.push('bar', '1');

		const callbackArgs: any = [];
		sut.forEach((values, key, map) => {
			expect(map).toBe(sut);
			callbackArgs.push([key, values]);
		});
		expect(callbackArgs).toMatchInlineSnapshot(`
Array [
  Array [
    "foo",
    Array [
      "1",
      "2",
    ],
  ],
  Array [
    "bar",
    Array [
      "1",
    ],
  ],
]
`);
	});

	it('clear', () => {
		const sut = new MultiValueMap();
		sut.push('foo', 'bar');
		sut.clear();
		expect(sut.has('foo')).toBe(false);
		expect(sut.has('empty')).toBe(false);
	});

	it('delete', () => {
		const sut = new MultiValueMap();
		sut.push('foo', 'bar');
		sut.delete('foo');
		expect(sut.has('foo')).toBe(false);
		expect(sut.has('empty')).toBe(false);
	});

	it('has', () => {
		const sut = new MultiValueMap();
		sut.push('foo', 'bar');
		expect(sut.has('foo')).toBe(true);
		expect(sut.has('empty')).toBe(false);
	});

	it('[Symbol.iterator]', () => {
		const sut = new MultiValueMap();
		sut.push('foo', '1');
		sut.push('foo', '2');
		sut.push('bar', '1');

		const values = [];
		for (const value of sut) {
			values.push(value);
		}
		expect(values).toMatchInlineSnapshot(`
Array [
  Array [
    "foo",
    Array [
      "1",
      "2",
    ],
  ],
  Array [
    "bar",
    Array [
      "1",
    ],
  ],
]
`);
	});

	it('size', () => {
		const sut = new MultiValueMap();
		sut.push('foo', '1');
		sut.push('foo', '2');
		sut.push('bar', '1');
		expect(sut.size).toMatchInlineSnapshot(`2`);
	});

	it('[Symbol.toStringTag]', () => {
		const sut = new MultiValueMap();
		expect(sut.toString()).toMatchInlineSnapshot(`"[object [object Map]]"`);
	});
});
