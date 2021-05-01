# Angular
Learning Angular

setup:

creating project :

ng new angular-tour-of-heroes

starting server : 
ng serve --open

open in vs code

Angular is single page application ... if you go to src > index.html . this is main page
`<app-root></app-root>` = this is main component

angular.json =. which provides default styles, scxripts, asssests and many more.

`app ` here you will create componsnents

`app.module.ts` is main module

```angular
@NgModule({
  declarations: [  // Component will go here
    AppComponent
  ],
  imports: [ // modules will go here for example httpmodule
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
```
all your components will be typescript
speces.ts is testing

`app.component` 
```
@Component({
  selector: 'app-root', // header tag or selector which will be used
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash'; // this is used in appcomponent.html `<span>{{ title }} app is running!</span>` this is called string interpolation
}

```

appcomponent.html

you can use variable like `{{title}} `
lets convert it to upper case : `{{title.toUpperCase}}`  or `{{title | UpperCase}}` will both convert to upper case , means angular support pipe  
{{1+!}} we can do calculation also

if you do in appcomponent.ts then it will be much clear

we will do everything in components folder 
to create folder run `ng generate component components/todolist` or you can do with `ng g c components/todolist`

`ngOnInit` is lifecycler method
`constructor` is used to use services but most of things we will do it from `ngOnInit`


ng g s services/Todo for services

to work with https you need to import module : in appModule.ts
import {HttpClientModule} from '@angular/common/http';
import in servies


for routing : app-routing-moudle.ts






