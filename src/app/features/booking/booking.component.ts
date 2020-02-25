import { Component, OnInit } from '@angular/core';
import { ETC_CONSTANTS } from 'src/app/app.constant';

@Component({
  selector: 'etc-booking',
  templateUrl: 'booking.component.html',
  styleUrls: ['booking.component.scss'],
})
export class BookingComponent implements OnInit {
  constructor() {}
  public email = ETC_CONSTANTS.email;
  ngOnInit() {}
}
