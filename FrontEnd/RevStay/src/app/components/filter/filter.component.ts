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

  filterType! : string;

  @Output() newFilterType = new EventEmitter<string>();
  @Output() newFilterValue = new EventEmitter<string>();

  constructor(private el : ElementRef){}

  addFilterType(type:string) {
    this.newFilterType.emit(type);

  }
  addFilterValue(value: string) {
    
    this.newFilterValue.emit(value);
  }
  changeFilterType(ftype:string) {
    const element = this.el.nativeElement.querySelector("#filterText") as HTMLInputElement;
    switch(ftype){
      case "price":
        element.type = "number";
        element.placeholder = "Min-Max"
        break;
      case "location":
        element.type = "text";
        element.placeholder = "Please enter location"

    }
  }
  

}
