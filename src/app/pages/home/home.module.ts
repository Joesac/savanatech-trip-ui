import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';

import { SwiperModule } from 'swiper/angular';
import { TabBarComponent } from 'src/app/components/tab-bar/tab-bar.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    ToolbarComponent,
    SearchBarComponent,
    AvatarComponent,
    TabBarComponent
  ]
})
export class HomeModule { }
