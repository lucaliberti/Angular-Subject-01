import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component01',
  templateUrl: './component01.component.html',
  styleUrls: ['./component01.component.css'],
})


export class Component01Component implements OnInit, OnDestroy {
  dato: number = 0;
  mysubject=new Subject<number>()
  private mysubscription1!: Subscription;
  private mysubscription2!: Subscription;



  observer01 = {
    next: (v: number) => console.log(`observer01: ${v}`),
  };
  observer02 = {
    next: (v: number) => console.log(`observer02: ${v}`),
  };


  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.mysubscription1.unsubscribe();
    this.mysubscription2.unsubscribe();
    console.log('Unsubscribed');
  }


  onProduciDato() {
    this.mysubject.next(this.dato++);
  }

  onSubscribe1() {
    this.mysubscription1 = this.mysubject.subscribe(this.observer01);
    console.log('Subscribed1');
  }

  onSubscribe2() {
    this.mysubscription2 = this.mysubject.subscribe(this.observer02);
    console.log('Subscribed2');
  }

}




/*  OUTPUT

observer01: 0 main.js:83:34
observer02: 0 main.js:86:34
observer01: 1 main.js:83:34
observer02: 1 main.js:86:34
observer01: 2 main.js:83:34
observer02: 2 main.js:86:34
observer01: 3 main.js:83:34
observer02: 3 main.js:86:34
observer01: 4 main.js:83:34
observer02: 4 main.js:86:34
observer01: 5 main.js:83:34
...

*/
