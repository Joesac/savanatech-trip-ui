
import { Component, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  places: {id: string, img: string, desc: string, price: number, perPerson: number}[] = [
    {
      id: "1",
      img: '../../assets/place1.jpg',
      desc: 'Shimia',
      price: 12354,
      perPerson: 2342
    },
    {
      id: '2',
      img: '../../assets/place2.jpg',
      desc: 'Goa',
      price: 4355,
      perPerson: 198
    },
    {
      id: '3',
      img: '../../assets/place3.jpg',
      desc: 'Brazil',
      price: 57653,
      perPerson: 767
    },
    {
      id: '4',
      img: '../../assets/place4.jpg',
      desc: 'Hamburg',
      price: 87673,
      perPerson: 876
    },
    {
      id: '5',
      img: '../../assets/place5.jpg',
      desc: 'Standford',
      price: 98786,
      perPerson: 234
    },
  ];

  constructor() {};

}
