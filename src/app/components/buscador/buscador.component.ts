import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  terminoBusqueda: string = '';

  constructor(private _heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router:Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.terminoBusqueda =params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log( this.heroes );
    });

  }

  verHeroe(indiceHeroe: number) {
    this.router.navigate(['/heroe', indiceHeroe]);
  }

}
