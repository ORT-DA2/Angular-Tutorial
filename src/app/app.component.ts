import { Component } from '@angular/core';
import { PetService } from './services/pet/pet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PetService]
})
export class AppComponent {
  title = 'LUPI';
}
