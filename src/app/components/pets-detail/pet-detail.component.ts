import { Component } from '@angular/core';

import { Pet } from './../../classes/pet';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../services/pet/pet.service';

@Component({
    templateUrl: "./pet-detail.component.html"
}) 
export class PetDetailComponent {
    pageTitle : string = 'Pet Detail';
    pet : Pet;

    constructor(private _currentRoute: ActivatedRoute,
        private _router : Router,
        private _petsService : PetService) {  }

    ngOnInit() : void {
        let id =+ "" + this._currentRoute.snapshot.params['id'];
        this.pageTitle +=  `: ${id}`;
        this._petsService.getPetById(id).subscribe(
            ((data : Pet) => this.result(data)),
            ((error: any) => console.log(error))
        );
    }

    private result(data: Pet): void {
        this.pet = data;
        console.log(this.pet);
    }

    onBack(): void {
        this._router.navigate(['/pets']);
    }
}