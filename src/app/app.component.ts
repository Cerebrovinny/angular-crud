import { Component, ElementRef, ViewChild, OnInit, ViewChildren } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'angular-crud';

  name: any;
  personalInfo: any;
  dataSource: any;
  editObj: any;
  
  @ViewChild('btnShow')
  btnShow!: ElementRef;
  @ViewChild('btnClose')
  btnClose!: ElementRef;

  constructor(private store: AngularFirestore){

  }

  ngOnInit(){
    this.getAll();
  }
  
  openDialog(){
    this.btnShow.nativeElement.click();
  }
  
  closeDialog(){
    this.btnClose.nativeElement.click();
  }

  getAll(){
    this.store.collection('userInfo').snapshotChanges().subscribe((response) => {
      // console.log('response ', response);
      this.dataSource = response.map(item => 
        Object.assign({id : item.payload.doc.id}, item.payload.doc.data()))
    })
  }

  add(){
    if(this.editObj){
      this.store.collection('userInfo').doc(this.editObj.id)
      .update({name: this.name, personalInfo: this.personalInfo});
    } else {
      this.store.collection('userInfo').add({
        name: this.name, personalInfo: this.personalInfo
      });
    }
    this.closeDialog();
  }

  edit(id: string){
    this.store.collection('userInfo').doc(id).get().subscribe((response) => {
      this.editObj = Object.assign({id: response.id}, response.data());
      this.name = this.editObj.name;
      this.personalInfo = this.editObj.personalInfo;
      this.openDialog();
    })
  }

}
