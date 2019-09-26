// https://developer.chrome.com/extensions/permissions

export const permissions = {
  getAll: jest.fn(cb => cb({})),
  contains: jest.fn((info, cb) => cb(true)),
  remove: jest.fn((info, cb) => cb(true)),
  request: jest.fn((info, cb) => cb(true)),
};
