import { Component } from '@angular/core';
import { Store, Action } from "@ngrx/store";
import { IncrementarAction, DecrementarAction } from "src/app/contador/contador.actions";
import { AppState } from "src/app/app.reducer";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  contador:number;

  constructor(private store:Store<AppState>)
  {
    //this.contador = 10;
    //obtener todo el state
    //store.select("contador").subscribe(state=>{

    //obtener propiedad especifica
    store.select("contador").subscribe(contador=>{
      //console.log(state);
      //this.contador = state.contador;
      this.contador = contador;
    });
  }

  incrementar()
  {
    //this.contador++;
    const action = new IncrementarAction();
    this.store.dispatch(action);
  }

  decrementar()
  {
    //this.contador--;
     const action = new DecrementarAction();
    this.store.dispatch(action);
  }
}
