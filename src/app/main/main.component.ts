import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  emailstring = "mailto:bentemichel@web.de"
  linkstring = "open:https://github.com/MichelBente"

  github = 'https://github.com/MichelBente';
  linkedin = 'https://www.linkedin.com/in/michel-bente-243927270/';

  openNewWindow() {
    window.open(this.github, '_blank');
  }

  openLink() {
    window.open(this.linkedin, '_blank');
  }
}
