import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetListFilterPipe } from './components/pet-list/pet-list-filter.pipe';
import { StarRateComponent } from './components/star/star-rate.component';
import { PetService } from './services/pet/pet.service';
import { WelcomeComponent } from './components/home/welcome.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { PetDetailComponent } from './components/pets-detail/pet-detail.component';
import { PetDetailGuard } from './components/pets-detail/pet-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetsComponent,
    PetListFilterPipe,
    WelcomeComponent,
    StarRateComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'pets', component: PetsComponent},
      { path: 'pets/:id', 
        component: PetDetailComponent,
        canActivate: [PetDetailGuard]
      },
      { path: 'welcome', component:  WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [PetService, PetDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
