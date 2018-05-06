import { Component } from '@angular/core';

@Component({
    selector: 'pm-pets',
    templateUrl: './pet-list.component.html'
})
export class PetListComponent {
    pageTitle: string = "Pet List";

    constructor() {
    }
}