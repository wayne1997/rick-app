import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Character } from 'src/interfaces/characters';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  @ViewChild( IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }
  loadCharacters(){
    this.characterService.loadCharacters().subscribe( response => {
      this.characters.push(...response.results);
    });
  }
  loadData(event){
    setTimeout(() => {
      this.loadCharacters();
      this.infiniteScroll.complete();
      if( this.characters.length >= 200 ){
        this.infiniteScroll.disabled = true;
      }
    }, 700);
  }
}
