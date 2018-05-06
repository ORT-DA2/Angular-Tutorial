import {Component, Input} from '@angular/core';

@Component({
    selector: 'pm-pets', 
    templateUrl: './pet-list.component.html'
})
export class PetListComponent {
    
    @Input()pageTitle : string = "Pet List";
    @Input()pageTitlePassedAsProperty : string = "Pet List Subtitle";
    @Input()pageTitleInterpolated : string = "Pet List Header";

    constructor() {}
}