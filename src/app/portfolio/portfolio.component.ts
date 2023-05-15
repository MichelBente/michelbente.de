import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  retakemordor = "https://github.com/MichelBente/RETAKE-MORDOR";
  join = "https://github.com/MichelBente/New-Join";
  projectMordor = "http://michelbente.com/projects/Retake_Mordor/index.html";
  projectJoin = "https://michelbente.com/projects/join-main/join-main/index.html";
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
