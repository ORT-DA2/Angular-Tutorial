import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";
import { IComponentCanBeDeactivated } from "./componentCanBeDeactivated";


@Injectable()
export class LockGuard implements CanDeactivate<IComponentCanBeDeactivated> {
    constructor() { }

    canDeactivate(
        component: IComponentCanBeDeactivated,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return component.isLocked ? true : false;
    }
}