import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService]
})
export class EmpInfoComponent implements OnInit {

  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  getInfoFromServiceClass1(){
    this.infoReceived1 = this.service.getInfo1()
  }

  getInfoFromServiceClass2(){
    this.infoReceived2 = this.service.getInfo2()
  }

  getInfoFromServiceClass3(){
    this.infoReceived3 = this.service.getInfo3()
  }

  constructor(private service: RecordsService) { }

  ngOnInit(): void {
  }

}
