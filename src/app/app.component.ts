import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, OnDestroy {
  
  constructor() {
    this.logIt(`constroctor`);
    this.name.setValue('nama awal');
  }

  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }


  ngOnChanges(){
    this.logIt(`ngOnChanges`);
  }

  ngDoCheck(){
    this.logIt(`ngDoCheck`);
  }

  ngOnInit() {
    this.logIt(`onInit`);
  }

  ngOnDestroy() {
    this.logIt(`onDestroy`);
  }

  ngAfterContentInit(){
    this.logIt(`ngAfterContentInit`);
  }

  ngAfterContentChecked(){
    this.logIt(`ngAfterContentChecked`);
  }

  ngAfterViewInit(){
    this.logIt(`ngAfterViewInit`);
  }

  ngAfterViewChecked(){
    this.logIt(`ngAfterViewChecked`);
  }

  private logIt(msg: string) {
    console.log(msg);
  }

}
