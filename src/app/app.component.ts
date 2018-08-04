import { Component, ViewChild, ElementRef } from '@angular/core';
import { TweenLite } from 'gsap/TweenMax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  @ViewChild('list')
  listElmRef : ElementRef;
  title = 'app';


  start(): void {
    const element = this.listElmRef.nativeElement;
    TweenLite.set(element, { height: 'auto', opacity: 1 });
    TweenLite.from(element, 2000, { height: 0, opacity: 0 });
  }
}
