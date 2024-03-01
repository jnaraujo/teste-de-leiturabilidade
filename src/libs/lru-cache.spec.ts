import { describe, expect, test } from "vitest";
import { LRUCache } from "./lru-cache";

describe("LRUCache", () => {
  test("Should work", () => {
    const lruCache = new LRUCache<string, string>({
      limit: 5,
    });

    lruCache.add("v1", "k1");
    lruCache.add("v2", "k2");
    lruCache.add("v3", "k3");
    lruCache.add("v4", "k4");
    lruCache.add("v5", "k5");

    expect(lruCache.readCache()).toStrictEqual({
      v1: "k1",
      v2: "k2",
      v3: "k3",
      v4: "k4",
      v5: "k5",
    });
    expect(lruCache.readKeys()).toEqual(["v1", "v2", "v3", "v4", "v5"]);

    lruCache.add("v6", "k6");

    expect(lruCache.readCache()).toStrictEqual({
      v1: "k1",
      v2: "k2",
      v3: "k3",
      v4: "k4",
      v6: "k6",
    });
    expect(lruCache.readKeys()).toEqual(["v1", "v2", "v3", "v4", "v6"]);

    lruCache.add("v2", "k2");
    expect(lruCache.readCache()).toStrictEqual({
      v2: "k2",
      v1: "k1",
      v3: "k3",
      v4: "k4",
      v6: "k6",
    });
    expect(lruCache.readKeys()).toEqual(["v2", "v1", "v3", "v4", "v6"]);

    lruCache.get("v3");

    expect(lruCache.readKeys()).toEqual(["v3", "v2", "v1", "v4", "v6"]);
  });
});
