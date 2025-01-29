/** @todo: change MODE to 'LIVE' before production build **/

const MODE: valueof<typeof MODES> = 'LIVE';

/***********************************************/

const MODES = { DEV: 'DEV', LIVE: 'LIVE' } as const;

const MODES_URLS = {
  [MODES.DEV]: {
    API: 'http://devapi.allcargo.market/v1/',
    FILE: 'https://allcargo.market/',
    IMGS: 'https://allcargo.market/themes/default/images/',
  },
  [MODES.LIVE]: {
    API: 'https://api.allcargo.market/v1/',
    FILE: 'https://allcargo.market/',
    IMGS: 'https://allcargo.market/themes/default/images/',
  },
} as const;

const USERS_ALL = {
  [MODES.LIVE]: {
    VladimirP2529: { Email: 'VladimirP2529@yandex.ru', Password: 'Kolop123!' },
    Vladim34534irP2529: { Email: 'Vladim34534irP2529@ya345ndex.ru', Password: 'Kolop123!' },
    rostislav: { Email: 'rostislav.mbvp@gmail.com', Password: 'Nitreni;12345' },
    osp308: { Email: 'osp308@mail.ru', Password: 'Osp123456789+' },
  },
  [MODES.DEV]: {
    VladimirP2529: { Email: 'VladimirP2529@yandex.ru', Password: 'Kolop123!' },
    Vladim34534irP2529: { Email: 'Vladim34534irP2529@ya345ndex.ru', Password: 'Kolop123!' },
  },
};

export const USERS = USERS_ALL[MODE];
export const GUEST_TOKEN = 'allcargo_live_b5DjaWt3svFsaEq32Abg_quest';
export const URLS = MODES_URLS[MODE];
