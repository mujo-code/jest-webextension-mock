// https://developer.chrome.com/extensions/alarms

export const alarms = {
  create: jest.fn(),
  get: jest.fn((alarm, cb) => cb(null)),
  getAll: jest.fn(cb => cb([])),
  clear: jest.fn((alarm, cb) => cb(true)),
  clearAll: jest.fn(cb => cb(true)),
  onAlarm: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
};
