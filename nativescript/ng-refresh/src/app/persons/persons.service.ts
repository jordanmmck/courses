import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  personsChanged = new Subject<string[]>();
  persons: string[];

  constructor(private http: HttpClient) {}

  fetchPersons() {
    this.http
      .get<any>('https://swapi.co/api/people')
      .pipe(
        map(response => {
          return response.results.map(item => item.name);
        })
      )
      .subscribe(data => {
        this.personsChanged.next(data);
      });
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }
  removePerson(name: string) {
    this.persons = this.persons.filter(person => person !== name);
    this.personsChanged.next(this.persons);
  }
}
