import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Component({
  selector: 'etc-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss'],
})
export class FeedbacksComponent implements OnInit {
  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.db
      .collection('feedbacks')
      .valueChanges()
      .subscribe(result => {
        console.log(result);
      });
  }
}
