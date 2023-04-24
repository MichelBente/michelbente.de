import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  retakemordor = "https://github.com/MichelBente/RETAKE-MORDOR";
  join = "https://github.com/FlorianIsenberg/join";
  projectMordor = "https://michel-helmut-bente.developerakademie.net/Retake_Mordor/index.html";
  projectJoin = "https://gruppe-07i.developerakademie.net/index.html";
  openMordor() {
    window.open(this.retakemordor, '_blank');
  };
 
  openJoin() {
    window.open(this.join, '_blank');
  };
 
openRetakeMordor() {
  window.open(this.projectMordor, '_blank');
}

openJoinProject() {
  window.open(this.projectJoin, '_blank');
}

}
