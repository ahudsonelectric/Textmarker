import './sass/index.scss'

import _ERRORTRACKER from './../_shared/utils'
import { _MODULE } from './../_shared/utils'
import { _L10N } from './../_shared/utils'
import _PORT from './port'
import _STORE from './_store'
import './modules/markers'
import './modules/mark-actions'
import './modules/page-actions'
import './modules/links'

_L10N();

new _MODULE({
  events: {
    ENV: {
      'started:app': 'onStart',
      'toggled:addon': 'power'
    }
  },

  power(on) {
    const placeholder = document.getElementById('textmarker-sidebar--paused');
    const content = document.getElementById('textmarker-sidebar');

    if (on) {
      placeholder.classList.add('u-display--none');
      content.classList.remove('u-display--none');
    } else {
      placeholder.classList.remove('u-display--none');
      content.classList.add('u-display--none');
    }
  },
  onStart() {
    _STORE.get('mode').then(mode => this.power(mode));
  }
})
