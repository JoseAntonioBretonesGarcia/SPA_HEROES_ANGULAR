import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Heroe, HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  public heroe: any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private heroeService:HeroesService ) {

    this.activatedRoute.params.subscribe( params =>{
      this.heroe = this.heroeService.getHeroe(params['id']);
    });

  }

  ngOnInit(): void {
  }

}
