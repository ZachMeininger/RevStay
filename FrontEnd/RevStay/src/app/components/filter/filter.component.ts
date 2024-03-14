import { Component,Output, EventEmitter,ElementRef  } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  filterType : string = "location";

  @Output() newFilterType = new EventEmitter<string>();
  @Output() newFilterValue = new EventEmitter<string>();

  constructor(private el : ElementRef){}

  addFilterType(type:string) {
    this.newFilterType.emit(type);

  }
  addFilterValue(possibleLocation: string,valueMax:string) {
    if(this.filterType != "location"){
      possibleLocation = possibleLocation +"-"+valueMax;
    }
    this.newFilterValue.emit(possibleLocation);
  }
  changeFilterType(ftype:string) {
    const element = this.el.nativeElement.querySelector("#filterText") as HTMLInputElement;
    const priceMax = this.el.nativeElement.querySelector("#filterPrice2") as HTMLInputElement;
    this.filterType = ftype;
    switch(ftype){
      case "price":
        element.type = "number";
        element.placeholder = "Min"
        priceMax.hidden = false;
        break;
      case "location":
        element.type = "text";
        element.placeholder = "Please enter location"
        priceMax.hidden = true;

    }
  }
  

}
