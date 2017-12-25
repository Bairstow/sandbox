/* eslint-env browser */
export const constructUrl = (route) => {
  const path = route.get('path');
  const query = route.get('query');
  let result = path.join('/');
  let queryArr = [];
  if (query && typeof query === 'object') {
    queryArr = Object.keys(query).sort()
      .filter(key => query[key] !== null)
      .map(key => `${key}=${query[key]}`);
  }

  if (queryArr.length > 0) {
    result += `?${queryArr.join('&')}`;
  }

  return result;
};

export const parseUrl = (windowHash) => {
  let path = [];
  const query = {};
  const hashArr = windowHash.replace('#/', '').split('?');
  path = hashArr[0].split('/');

  if (hashArr.length > 1) {
    hashArr[1].split('&').forEach((str) => {
      const arr = str.split('=');
      const key = arr[0];
      const value = arr[1];
      if (isNaN(value)) {
        query[key] = value;
      } else {
        query[key] = Number(value);
      }
    });
  }

  return { path, query };
};

export const pushState = (route) => {
  history.pushState({ route }, '', `#/${constructUrl(route)}`);
};
