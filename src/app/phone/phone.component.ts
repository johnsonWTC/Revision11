import { Component, OnInit } from '@angular/core';


export interface Phone{
  name : string,
  camera : string,
  size : number

}

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  showTableBtn = false;
  showTableBtnText = "Hide table";
  constructor() { }

  ngOnInit(): void {
  }


  phones : Phone[] = [
    {
      name: "iPhone",
      camera: "20 px",
      size: 50
    },
    {
      name: "Philips",
      camera: "50 px",
      size: 30
    },
    {
      name: "Xiaomi",
      camera: "120 px",
      size: 150
    }
]

  ShowTableAndHidetable(){
    if(this.showTableBtn){
      this.showTableBtn = false;
      this.showTableBtnText = "Hide table";
    }else{
      this.showTableBtn = true;
      this.showTableBtnText = "Show table";
    }
  }

}
