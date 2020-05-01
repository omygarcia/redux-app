import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducer";
import { MultiplicarAction, DividirAction } from "src/app/contador/contador.actions";

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  /*@Input() contador:number;
  @Output() cambioContador = new EventEmitter<number>();*/
  contador:number;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select("contador").subscribe(contador=>{
      this.contador = contador;
      console.log(contador);
    });
  }

  multiplicar()
  {
    const action = new MultiplicarAction(2);
    this.store.dispatch(action);
    //this.contador*=2;
    //this.cambioContador.emit(this.contador);
  }

  dividir()
  {
    const action = new DividirAction(2);
    this.store.dispatch(action);
    //this.contador/=2;
    //this.cambioContador.emit(this.contador);
  }

  /*resetHijo(nuevoContador)
  {
    this.cambioContador.emit(nuevoContador);
  }*/

}
