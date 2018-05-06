import { Component, Input } from '@angular/core';

@Component({
    selector: 'pm-pets',
    templateUrl: './pet-list.component.html'
})
export class PetListComponent {
    @Input() pageTitle: string = "Pet List";

    constructor() {
    }
}