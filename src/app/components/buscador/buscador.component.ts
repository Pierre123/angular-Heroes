import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[]=[];
  @Input() heroe:any={};
  @Input() indice:number;
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroeService:HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.termino=params['termino'];
      this.heroes=this._heroeService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }



}
