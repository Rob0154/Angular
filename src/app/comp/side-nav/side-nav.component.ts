import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }
public menuItms = [{
  img1: 'menu1.png',
  itm1: 'Dshboard',
  img2: 'statistics1.png',
  itm2: 'Reports',
  img3: 'money1.png',
  itm3: 'Finacial',
  img4: 'project1.png',
  itm4: 'Projects',
  img5: 'Group.png',
  itm5: 'Employee Information',
  img6: 'webglob.png',
  itm6: 'Website'
}]

  ngOnInit(): void {
  }

}
