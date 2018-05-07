import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetListFilterPipe } from './components/pet-list/pet-list-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetListFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
