import { omnibox } from './omnibox';
import { tabs } from './tabs';
import { runtime } from './runtime';
import { storage } from './storage';
import { browserAction } from './browserAction';
import { commands } from './commands';
import { notifications } from './notifications';
import { i18n } from './i18n';
import { permissions } from './permissions';
import { topSites } from './topSites';
import { alarms } from './alarms';
import { webNavigation } from './webNavigation';

// Firefox specific API
import { geckoProfiler } from './geckoProfiler';

const chrome = {
  omnibox,
  tabs,
  runtime,
  storage,
  browserAction,
  commands,
  geckoProfiler,
  notifications,
  i18n,
  permissions,
  topSites,
  alarms,
  webNavigation,
};

export { chrome };
export { chrome as browser }; // Firefox uses 'browser' but aliases it to chrome
