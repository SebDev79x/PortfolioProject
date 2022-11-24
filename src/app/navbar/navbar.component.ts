import { Component, OnInit } from '@angular/core';
import { IDataMenu } from '../_interfaces/IDataMenu';

import { allMenuLinks } from '../data/dataMenu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  allMenuLinks: IDataMenu[] = allMenuLinks;

  constructor() { }

  ngOnInit(): void {
  }

}
