import { Component, OnInit } from '@angular/core';

import { HeroesService, Heroe } from '../services/heroes.service';
//Importar Rutas e inicializando en el constructor
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];

  constructor(private _heroesService:HeroesService,
              private router:Router) {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('onInit');
    this.heroes=this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  //Usando button con una funcion
  verHeroe(index:number){
    console.log(index);
    this.router.navigate(['/heroe',index]);
  }

}
