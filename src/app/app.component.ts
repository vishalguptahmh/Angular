import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash';
  name ="Vishal";
  constructor(){
    console.log("as soon as component load it prints");
    this.changeName("Vishal Gupta");
  }

  changeName(name : string){
    this.name=name;
  }

}
