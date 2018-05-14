import {Component, Input} from '@angular/core';
import { Pet } from '../../classes/pet';
import { PetService } from '../../services/pet/pet.service';

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
    pets: Array<Pet>;

    constructor(private _petsService : PetService) {
     // esta forma de escribir el parametro en el constructor lo que hace es:
     // 1) declara un parametro de tipo PetService en el constructor
     // 2) declara un atributo de clase privado llamado _petService
     // 3) asigna el valor del parámetro al atributo de la clase
    }

    ngOnInit(): void {
        this.pets = this._petsService.getPets();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message:string):void {
        this.pageOriginalTitle = this.pageOriginalTitle || this.pageTitle;
        this.pageTitle = this.pageOriginalTitle + ": " + message;
    }
}