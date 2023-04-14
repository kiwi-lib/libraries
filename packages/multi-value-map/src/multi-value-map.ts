export class MultiValueMap<K extends string | symbol, V = any>
	implements
		Omit<
			Map<K, V[]>,
			'get' | 'set' | 'keys' | 'values' | 'entries' | 'forEach'
		>
{
	private readonly map = new Map<K, V[]>();

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

	toObject(): Record<K, V[]> {
		return Object.fromEntries(this.entries()) as Record<K, V[]>;
	}

	keys(): K[] {
		return [...this.map.keys()];
	}

	values(): V[][] {
		return [...this.map.values()];
	}

	entries(): [K, V[]][] {
		return [...this.map.entries()];
	}

	forEach(
		callbackfn: (values: V[], key: K, map: MultiValueMap<K, V>) => void,
		thisArg?: any,
	): void {
		this.map.forEach((values, key) => {
			callbackfn(values, key, this);
		}, thisArg);
	}

	clear(): void {
		this.map.clear();
	}

	delete(key: K): boolean {
		return this.map.delete(key);
	}

	has(key: K): boolean {
		return this.map.has(key);
	}

	[Symbol.iterator](): IterableIterator<[K, V[]]> {
		return this.map[Symbol.iterator]();
	}

	get size(): number {
		return this.map.size;
	}

	get [Symbol.toStringTag](): string {
		return this.map.toString();
	}
}
