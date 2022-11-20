import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandereceptipon',
  templateUrl: './bandereceptipon.component.html',
  styleUrls: ['./bandereceptipon.component.css'],
})
export class BandereceptiponComponent implements OnInit {

  daterec!: Date;
  idc!:Float32Array;
  qte!:number;
  nbc!:number;
  
   bandRec= [{daterec:this.daterec, idc:this.idc, qte:this.qte, nbc:this.nbc }];

  constructor() {}
empty=true
  ngOnInit(): void {

  }
  addbandres() {
   
    this.bandRec.push({daterec:this.daterec, idc:this.idc, qte:this.qte, nbc:this.nbc});
    this.empty=false;
    return this.bandRec;
  }
    addaff() {
      return this.bandRec;
    }
 
}
