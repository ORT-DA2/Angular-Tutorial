import {Component, Input} from '@angular/core';
import { Pet } from '../../classes/pet';

@Component({
    selector: 'pm-pets', 
    templateUrl: './pet-list.component.html'
})
export class PetListComponent {

    @Input()pageTitle : string;
    
    pets: Array<Pet> = [
        new Pet("1","Perro",4,"Grande", new Date(),20,"Golden Retriever", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Golden_Retriever_with_tennis_ball.jpg/1200px-Golden_Retriever_with_tennis_ball.jpg")
    ];

    imageWidth: number = 100;
    imageMargin: number = 1;

    constructor() {}
}