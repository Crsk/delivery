import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, fadeIn } from 'ngx-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
  ]
})
export class HomeComponent implements OnInit {
  bounce: any;
  fadeIn: any;
  
  constructor() { }

  ngOnInit() {
  }

}
