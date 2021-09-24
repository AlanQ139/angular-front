import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRankRoutingModule } from './page-rank-routing.module';
import { PageRankComponent } from './page-rank.component';


@NgModule({
  declarations: [PageRankComponent],
  imports: [
    CommonModule,
    PageRankRoutingModule
  ]
})
export class PageRankModule { }
