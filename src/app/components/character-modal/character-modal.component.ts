import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Character } from 'src/interfaces/characters';

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.scss'],
})
export class CharacterModalComponent implements OnInit {

  character: Character;
  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}

  async onClick(){
    return this.modalCtrl.dismiss();
  }
}
