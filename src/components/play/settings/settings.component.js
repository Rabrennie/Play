
import { SweetAlertService } from 'ng2-sweetalert2';

import _ from 'lodash';

import { Component } from '@angular/core';
import template from './settings.html';
import './settings.less';

const thanks = [
  { name: 'Darkblizer', reason: 'Art' },
  { name: 'Sedgwick', reason: 'Donation, Maps' },
  { name: 'Latin', reason: 'Donation' },
  { name: 'Marcus', reason: 'Donation' }
];

@Component({
  template
})
export class SettingsComponent {

  static get parameters() {
    return [[SweetAlertService]];
  }

  constructor(swal) {
    this.swal = swal;
  }

  thanksHtml() {
    return `
<p>If you're interested in helping design content for the game, let Seiyria know.</p>

<p><strong>Contributions:</strong></p>
${_.map(thanks, t => `<div>${t.name} - ${t.reason}</div>`).join('')}

<p></p>
<p><strong>Want to help?</strong></p>
<p>All support goes directly to the game and servers! Thanks in advance!</p>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick">
  <input type="hidden" name="hosted_button_id" value="TF5HJJLVYWMQU">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
`;
  }

  showThanks() {
    this.swal.swal({
      title: 'Special Thanks',
      html: this.thanksHtml()
    });
  }
}