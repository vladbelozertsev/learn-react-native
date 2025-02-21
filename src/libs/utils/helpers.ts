export const capitalize = (s: string) => {
  return (s && s[0].toUpperCase() + s.slice(1)) || '';
};

export const numberWithSpaces = (x: number) => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};

export const callback = (cbs: Function[], args?: any) => {
  return () => {
    cbs.forEach(cb => {
      if (typeof cb === 'function') cb(args);
    });
  };
};

export const exec = (cbs: Function[], args?: any) => {
  cbs.forEach(cb => {
    if (typeof cb === 'function') cb(args);
  });
};

export const clear = (arr: any[], cb?: boolean) => {
  if (cb) return () => arr.splice(0, arr.length);
  arr.splice(0, arr.length);
};

export const delkeys = <T extends { [key: string]: any }, Keys extends keyof T>(obj: T, keys: Keys[]) => {
  keys.forEach(key => delete obj[key]);
  return obj as Omit<T, (typeof keys)[number]>;
};

export const isObj = (v: any) => {
  const obj = typeof v === 'object' && v !== null;
  const hasURI = obj && v.hasOwnProperty('uri');
  const hasName = obj && v.hasOwnProperty('name');
  const hasType = obj && v.hasOwnProperty('type');
  return hasURI && hasName && hasType ? false : obj;
};

export const params = (obj?: { [key: string]: string | number }) => {
  const arr = Object.entries(obj || {});
  const qpArr = arr.flatMap(qp => `${qp[0]}=${qp[1]}`);
  return obj ? `?${qpArr.join('&')}` : '';
};

export const getHtmlTemplate = (html: string) => {
  return `<html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
              ${html}
            </body>
          </html>`;
};

export const wset = (prams: { [key: string]: any }) => {
  const arr = Object.entries(prams);
  const entries = arr.map(el => [el[0], { set: el[1] }]);
  return Object.fromEntries(entries);
};

export class RNFile {
  uri: string;
  name: string;
  type: string;
  constructor({ uri, name, type }: { uri: string; name: string; type: string }) {
    this.uri = uri;
    this.name = name;
    this.type = type;
  }
}
