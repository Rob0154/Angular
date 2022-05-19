import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss']
})
export class HederComponent implements OnInit {

  constructor() { }
public name = 'John';
public lastName = 'Fox';

public user ={
  firstName: 'DEN',
  lastName: ' Marcbely',
  img: 'free.png'
}

  ngOnInit(): void {
  }

}
