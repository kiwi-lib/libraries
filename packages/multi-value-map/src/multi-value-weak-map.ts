export class MultiValueWeakMap<K extends object, V>
	implements Omit<WeakMap<K, V[]>, 'set'>
{
	private readonly map = new WeakMap<K, V[]>();

	get(key: K): V[] {
		return this.map.get(key) || [];
	}

	push(key: K, value: V): this {
		const array = this.get(key);
		if (!array.length) {
			this.map.set(key, array);
		}
		array.push(value);
		return this;
	}

	delete(key: K): boolean {
		return this.map.delete(key);
	}

	has(key: K): boolean {
		return this.map.has(key);
	}

	get [Symbol.toStringTag](): string {
		return this.map.toString();
	}
}
