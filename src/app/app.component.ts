import { Component,OnInit } from '@angular/core';
import { Person } from './person.model'
import { PersonService } from './person.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  persons:Person[];
  constructor(private personService: PersonService){}
  ngOnInit(){
    return this.personService.getPersons()
            .subscribe(data => this.persons = data)
  }
}
