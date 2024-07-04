import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1: string[] = ["Dinesh", "Patil", "101"]
  info2: string[] = ["Dinesh", "Patil", "102"]
  info3: string[] = ["Dinesh", "Patil", "103"]

  getInfo1(): string[]{
    return this.info1
  }
  getInfo2(): string[]{
    return this.info2
  }
  getInfo3(): string[]{
    return this.info3
  }
  constructor() { }
}
