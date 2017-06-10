import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Bienenido {{name}} al curso</h1><h2>{{curso}}</h2>`,
})
export class AppComponent  {
	name = 'Roger'; 
	curso= 'Angular'

}
