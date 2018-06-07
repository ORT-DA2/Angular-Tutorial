import { Observable } from "rxjs";

export interface IComponentCanBeDeactivated {
    isLocked() : Observable<boolean> | Promise<boolean> | boolean;
}