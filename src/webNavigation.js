// https://developer.chrome.com/extensions/webNavigation

export const webNavigation = {
  onCommitted: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
    hasListener: jest.fn(),
  },
};
