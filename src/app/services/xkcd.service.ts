import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Comic } from '../models/comic';

@Injectable({
  providedIn: 'root'
})
export class XkcdService {

  constructor(private http: HttpClient) { }

  getComicById(id: number): Observable<Comic> {
    //TODO implement. Should return the comic by id
    return this.http.get<Comic>('./api/' + id + '/info.0.json');
  }
  findComics(): Observable<Comic[]> {
    //TODO implement. Should return the first 10 comics
    return forkJoin(
      this.getComicById(1),
      this.getComicById(2),
      this.getComicById(3),
      this.getComicById(4),
      this.getComicById(5));
  }
}
