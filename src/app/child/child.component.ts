import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
{  
  private _SharedValue : string;

  
  @Input() public get SharedValue() : string 
  {
    return this._SharedValue;
  }
  public set SharedValue(v : string) 
  {
    this.ValueChanged.emit(v);
    this._SharedValue = v;
  }


  @Output() ValueChanged: EventEmitter<string> = new EventEmitter();
}
