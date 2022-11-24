import { Component, OnInit } from '@angular/core';
import { IProject } from '../_interfaces/IProjects';
import { allProjects } from '../data/dataProjects';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
public projects:IProject[]=allProjects
  constructor() { }

  ngOnInit(): void {
    console.log("projects",this.projects);

  }

}
