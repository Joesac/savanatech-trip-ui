import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationDetailRoutingModule } from './destination-detail-routing.module';
import { DestinationDetailComponent } from './destination-detail.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';

import { SwiperModule } from "swiper/angular";
import { DividerComponent } from 'src/app/components/divider/divider.component';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  declarations: [
    DestinationDetailComponent
  ],
  imports: [
    CommonModule,
    DestinationDetailRoutingModule,
    ToolbarComponent,
    SwiperModule,
    DividerComponent,
    CardComponent
  ]
})
export class DestinationDetailModule { }
