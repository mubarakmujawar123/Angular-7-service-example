import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.model'
@Injectable({
  providedIn: 'root',
})
export class PersonService {
    apiUrl ='https://jsonplaceholder.typicode.com/users';
    constructor(private _http : HttpClient){
    }
    getPersons(): Observable<Person[]>{
        return this._http.get<Person[]>(this.apiUrl)
    }
}