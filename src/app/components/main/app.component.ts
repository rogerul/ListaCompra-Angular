import { Component } from '@angular/core';
import { Producto } from '../../classes/producto';

@Component({
	moduleId: module.id,
 	selector: 'my-app',
  	templateUrl: 'app.component.html'
})
export class AppComponent  {
	producto: Producto = new Producto(1, 'Patatas' , 3, 10, 'Patatas para freir');

}
