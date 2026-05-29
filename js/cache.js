const CACHE_DURATION = 60 * 60 * 1000;

export function saveToCache(key, data) {

  const cacheData = {
    data,
    timestamp: Date.now(),
  };

  localStorage.setItem(
    key,
    JSON.stringify(cacheData)
  );
}

export function getFromCache(key) {

  const cached = localStorage.getItem(key);

  if (!cached) return null;

  const parsed = JSON.parse(cached);

  const isValid =
    Date.now() - parsed.timestamp < CACHE_DURATION;

  if (!isValid) {
    localStorage.removeItem(key);
    return null;
  }

  return parsed.data;
}