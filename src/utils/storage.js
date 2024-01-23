export function saveWithExpiry(key, value, ttl) {
  let now = new Date();
  let item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getWithExpiry(key) {
  let itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  let item = JSON.parse(itemStr);
  let now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}
