import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Router } from'@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  //Variables como Inputs cogidas de su componente padre
 @Input() heroe:any = {};
 @Input() index:number;
 @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {
    this.heroeSeleccionado = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  //Ejemplo de emitir un Output del componente hijo al padre
  verHeroe(){
   this.heroeSeleccionado.emit(this.index);
  }

}
