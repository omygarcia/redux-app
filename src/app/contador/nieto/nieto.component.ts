import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducer";
import { ResetearAction } from "src/app/contador/contador.actions";

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  /*@Input() contador:number;
  @Output() cambioContador = new EventEmitter<number>();*/
  contador:number;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
     this.store.select("contador").subscribe(contador=>this.contador=contador);
  }

  reset()
  {
    const action = new ResetearAction();
    this.store.dispatch(action);
    /*this.contador = 0;
    this.cambioContador.emit(this.contador);*/
  }

}
