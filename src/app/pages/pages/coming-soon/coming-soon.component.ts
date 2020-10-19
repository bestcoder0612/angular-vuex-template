import { Component, OnInit } from '@angular/core';
import faFacebook from '@iconify/icons-logos/facebook';
import faTwitter from '@iconify/icons-logos/twitter';
import faInstagram from '@iconify/icons-logos/instagram-icon';
import faPinterest from '@iconify/icons-logos/pinterest';
import faGithub from '@iconify/icons-logos/github-icon';
import icMail from '@iconify/icons-ic/twotone-mail';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class ComingSoonComponent implements OnInit {

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faPinterest = faPinterest;
  faGithub = faGithub;
  icMail = icMail;

  constructor() { }

  ngOnInit() {
  }

}
