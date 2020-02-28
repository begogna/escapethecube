import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { Feedback } from './Feedback';

@Component({
  selector: 'etc-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss'],
})
export class FeedbacksComponent implements OnInit {
  // public feedbacks: Observable<Feedback[]>;
  public feedbacks: Observable<any>;

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.feedbacks = this.db.collection('feedbacks').valueChanges();
  }
}
