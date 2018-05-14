import { Injectable } from "@angular/core";
import { Pet } from "../../classes/pet";


@Injectable()
export class PetService {

    getPets() : Array<Pet> {
        return [
            new Pet("1","Bobby",4,"Grande", new Date(),20,"Golden Retriever", 3, "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Golden_Retriever_with_tennis_ball.jpg/1200px-Golden_Retriever_with_tennis_ball.jpg"),
            new Pet("2","Diana",4,"Mediana", new Date(),10,"Perro", 4, "https://www.mundoperro.net/wp-content/uploads/Perro-de-la-raza-Dachshund.jpg"),
            new Pet("3","Lupita",4,"Chica", new Date(),2.5,"Perro", 5, "https://www.mundoperro.net/wp-content/uploads/bichon-frise.jpg"),
        ];
    }
}