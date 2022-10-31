import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharactersResponse } from 'src/interfaces/characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  page: number = 0;
  constructor(private http: HttpClient) { }

  loadCharacters(){
    let currentPage: number = this.page++;
    return this.http.get<CharactersResponse>(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
  }
}
