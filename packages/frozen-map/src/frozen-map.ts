/**
 * FrozenMap does not overwrite the value if the key is present
 */
export class FrozenMap<K, V> extends Map<K, V> {
	/**
	 * If a value is already stored in the key, it will not be saved.
	 */
	override set(key: K, value: V): this {
		if (!this.has(key)) {
			super.set(key, value);
		}
		return this;
	}
}
