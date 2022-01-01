import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud';
  dataSource: any;

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
}
