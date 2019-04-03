import { Component, OnInit, Input } from '@angular/core';
import { SumaryService } from '../../services/sumary.service';
import { ImplicitReceiver } from '@angular/compiler';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: []
})
export class TarjetaComponent implements OnInit {

  sumary:any []= [];

  @Input() items: any [] = [];

  constructor( private _sumaryService:SumaryService) { }

  ngOnInit() {
   
  }

}
