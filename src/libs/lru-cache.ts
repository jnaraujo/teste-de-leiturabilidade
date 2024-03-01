export class LRUCache<KeyType, ValueType> {
  private limit: number;

  private cache = new Map<KeyType, ValueType>();
  private keys: KeyType[] = [];

  constructor({ limit = 10 }) {
    this.limit = limit;
  }

  add(key: KeyType, value: ValueType) {
    if (this.cache.has(key)) {
      this.keys.splice(this.keys.indexOf(key)!, 1);
      this.keys.unshift(key);

      this.cache.set(key, value);
      return;
    }

    if (this.keys.length >= this.limit) {
      const tailKey = this.keys.pop()!;
      this.cache.delete(tailKey);
    }

    this.keys.unshift(key);
    this.cache.set(key, value);
  }

  get(key: KeyType) {
    if (this.cache.has(key)) {
      this.keys.splice(this.keys.indexOf(key)!, 1);
      this.keys.unshift(key);
    }

    return this.cache.get(key);
  }

  readCache() {
    return Object.fromEntries(this.cache);
  }
  readKeys() {
    return this.keys.slice();
  }
}
