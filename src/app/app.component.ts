import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuto_y_angular';
  actions:Array<any> = [
    {title:'Home',"route":"/home",icon:'house'},
    {title:'Products',"route":"/products",icon:'search'},
    {title:'new product',"route":"/new_product",icon:'safe'}
  ];
  CurrentAction:any;
  SetCurrentAction(action:any){
    this.CurrentAction= action;
  }
}
