import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/interfaces/characters';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {

  @Input() characters: Character[] = [];

  constructor() { }

  ngOnInit() {}

}
