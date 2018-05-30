import { Injectable } from "@angular/core";
import { Pet } from "../../classes/pet";
import { Http, Response, RequestOptions, Headers } from "@angular/http"; 
import { Observable, throwError } from "rxjs";  
import { map, tap, catchError } from 'rxjs/operators'; 

@Injectable()
export class PetService {
    private WEB_API_URL : string = 'http://localhost:4015/api/pet'; 
 
    constructor(private _httpService: Http) {  } 
 
    getPets(): Observable<Array<Pet>> { 
        const myHeaders = new Headers(); 
        myHeaders.append('Accept', 'application/json');     
        const requestOptions = new RequestOptions({headers: myHeaders}); 
           
        return this._httpService.get(this.WEB_API_URL, requestOptions) 
        .pipe( 
            map((response : Response) => <Array<Pet>> response.json()),
            tap(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data))),
            catchError(this.handleError) 
        ); 
    }
    
    getPetById(id:string): Observable<Pet> {
        const myHeaders = new Headers(); 
        myHeaders.append('Accept', 'application/json');     
        const requestOptions = new RequestOptions({headers: myHeaders}); 
           
        return this._httpService.get(this.WEB_API_URL, requestOptions) 
        .pipe( 
            map((response : Response) => <Pet> response.json().find((pet:Pet) => pet.id = id)),
            tap(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data))),
            catchError(this.handleError) 
        ); 
    }
 
    private handleError(error: Response) { 
        console.error(error); 
        return throwError(error.json().error|| 'Server error'); 
    } 

}