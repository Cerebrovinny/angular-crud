import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
  
  @ViewChild('btnShow')
  btnShow!: ElementRef;
  @ViewChild('btnClose')
  btnClose!: ElementRef;

  constructor(private store: AngularFirestore){

  }

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.store.collection('userInfo').snapshotChanges().subscribe((response) => {
      // console.log('response ', response);
      this.dataSource = response.map(item => 
        Object.assign({id : item.payload.doc.id}, item.payload.doc.data()))
    })
  }

  add(){
    this.store.collection('userInfo').add({
      name: this.name, personalInfo: this.personalInfo
    });
    this.closeDialog();
  }

  openDialog(){
    this.btnShow.nativeElement.click();
  }

  closeDialog(){
    this.btnClose.nativeElement.click();
  }
}
