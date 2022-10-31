import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Character } from 'src/interfaces/characters';
import { CharacterModalComponent } from '../character-modal/character-modal.component';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss'],
})
export class CharacterItemComponent implements OnInit {

  @Input() character: Character = null;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async showModal(){
    const modal = await this.modalCtrl.create(
      {
        component: CharacterModalComponent,
        componentProps: {
          character: this.character
        }
      }
    );
    modal.present();
  }

}
