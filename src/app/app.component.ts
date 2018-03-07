import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Sample {
	Firstname: string;
	Lastname: string;
	Phone: number;
	Mobile: number;
	Email: string;
	Address: string;
}
interface SampleId extends Sample {
	id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	sampleCol: AngularFirestoreCollection<Sample>;
	samples: any;

	Firstname: string;
	Lastname: string;
	Phone: number;
	Mobile: number;
	Email: string;
	Address: string;

	sampleDoc: AngularFirestoreDocument<Sample>;
  sample: Observable<Sample>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
		this.sampleCol = this.afs.collection('samples');
		//this.samples = this.sampleCol.valueChanges();
		this.samples = this.sampleCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Sample;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
	}
	addPost() {
		//this.afs.collection('samples').add({'Firstname': this.Firstname, 'Lastname': this.Lastname,'Phone': this.Phone, 'Mobile': this.Mobile, 'Email': this.Email, 'Address': this.Address });
		this.afs.collection('samples').doc('my-custom-id').set({'Firstname': this.Firstname, 'Lastname': this.Lastname,
		'Phone': this.Phone, 'Mobile': this.Mobile, 'Email': this.Email, 'Address': this.Address });
	}
	getPost(sampleId) {
    this.sampleDoc = this.afs.doc('samples/'+sampleId);
    this.samples = this.sampleDoc.valueChanges();
	}
	deletePost(sampleId) {
    this.afs.doc('samples/'+sampleId).delete();
  }
}
