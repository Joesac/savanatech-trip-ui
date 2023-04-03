import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss']
})
export class DestinationDetailComponent implements OnInit {
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(pMap => {
      if (!pMap.has('id')) {
        this.router.navigateByUrl('/home');
        return;
      }

      let id = pMap.get('id');
      console.log(id)
    })
  }
}
