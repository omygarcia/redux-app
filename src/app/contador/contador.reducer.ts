//import {Action} from '@ngrx/store';
import { INCREMENTAR, DECREMENTAR, actions, MULTIPLICAR, DIVIDIR, RESET } from "src/app/contador/contador.actions";

export function contadorReducer(state:number = 10,action:actions)
{
    switch(action.type)
    {
        case INCREMENTAR:
            return state +1;

        case DECREMENTAR:
            return state-1;

        case MULTIPLICAR:
            return state*action.payload;

        case DIVIDIR:
            return state/action.payload;

        case RESET:
            return 0;

        default:
            return state;
    }
}