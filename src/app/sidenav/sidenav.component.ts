import { Component, OnInit, Output, HostListener } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IDataMenu } from '../_interfaces/IDataMenu';
import { IToggle } from '../_interfaces/IToggle';
import { allMenuLinks } from '../data/dataMenu';
import { trigger, transition, keyframes, animate, style } from '@angular/animations';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' })
          ]))
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSN: EventEmitter<IToggle> = new EventEmitter()
  collapsed = false;
  screenWidth = 0;
  allMenuLinks: IDataMenu[] = allMenuLinks;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSN.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })

    }
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth

  }
  toggleSN(): void {
    this.collapsed = !this.collapsed
    this.onToggleSN.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }
  closeSN(): void {
    this.collapsed = false
    this.onToggleSN.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

}
