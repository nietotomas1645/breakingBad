import { Component, Input,  } from '@angular/core';
import { Personaje } from 'src/app/interfaces/Personajes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

  @Input() personaje!: Personaje ;

  constructor() { }



}
