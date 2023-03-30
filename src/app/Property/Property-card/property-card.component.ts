import { Component } from "@angular/core";


@Component( {
  selector: "app-property-card", // this name will be used in html
 // template: '<h1> This is card </h1> ',
  templateUrl:'property-card.component.html',
  //styles: ['h1{font-weight: normal;}']
  styleUrls:['property-card.component.css']
}

)   // decorator
export class PropertyCardComponent
{
  Property: any ={
    "Id":1,
    "Type":"House",
    "Name":"Birla House",
    "Price": 20

  }

}
