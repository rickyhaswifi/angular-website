import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less']
})
export class HeroComponent implements OnInit {

  @Input() heroTitle: string;
  @Input() heroSubtitle: string;

  constructor() { }

  ngOnInit() {
  }

}
