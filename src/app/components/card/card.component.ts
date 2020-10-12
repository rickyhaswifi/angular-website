import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() cardImage: string;
  @Input() cardStack: string;
  @Input() cardTitle: string;
  @Input() cardSubtitle: string;

  constructor() { }

  ngOnInit() {
  }

}
