import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SumaryService } from '../../services/sumary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit{

  status:boolean;

  constructor( private _sumaryService:SumaryService) { }

  total:any []= [];
  afc:any [] = [];
  bcc:any [] = [];
  fc:any [] = [];

  

  ngOnInit() {

    

    // this.sumary = this._sumaryService.getSumary();
    // console.log(this.sumary);

    this.total = this._sumaryService.getBu("total");
    this.afc = this._sumaryService.getBu("afc");
    this.bcc = this._sumaryService.getBu("bcc");
    this.fc = this._sumaryService.getBu("fc");
    
    

    $('#total').show();
    $('.navegacion a:first').addClass('activo');

    $('.navegacion a').on('click', function() {

        $('.navegacion a').removeClass('activo');
        $(this).addClass('activo');

        $('.ocultar').hide();

        var enlace = $(this).attr('href');
        $(enlace).show();

              
        return false;
    });

  

  }


  
}
