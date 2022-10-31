import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterItemComponent } from './character-item/character-item.component';
import { IonicModule } from '@ionic/angular';
import { CharacterModalComponent } from './character-modal/character-modal.component';



@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterItemComponent,
    CharacterModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CharacterListComponent
  ]
})
export class ComponentsModule { }
