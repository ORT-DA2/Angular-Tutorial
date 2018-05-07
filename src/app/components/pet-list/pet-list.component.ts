import {Component, Input} from '@angular/core';
import { Pet } from '../../classes/pet';

@Component({
    selector: 'pm-pets', 
    templateUrl: './pet-list.component.html'
})
export class PetListComponent {

    @Input() pageTitle: string;
    pageOriginalTitle: string 
    imageWidth: number = 100;
    imageMargin: number = 1;
    showImage: boolean = false;
    listFilter: string = "";

    pets: Array<Pet> = [
        new Pet("1","Perro 1",4,"Grande", new Date(),20,"Golden Retriever", 2, "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Golden_Retriever_with_tennis_ball.jpg/1200px-Golden_Retriever_with_tennis_ball.jpg"),
        new Pet("2","Perro 2",4,"Chico", new Date(),20,"Golden", 4, "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Golden_Retriever_with_tennis_ball.jpg/1200px-Golden_Retriever_with_tennis_ball.jpg")
    ];

    constructor() {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message:string):void {
        this.pageOriginalTitle = this.pageOriginalTitle || this.pageTitle;
        this.pageTitle = this.pageOriginalTitle + ": " + message;
    }
}