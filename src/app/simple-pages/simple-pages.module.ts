import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimplePagesRoutingModule } from './simple-pages-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    SimplePagesRoutingModule,
    FlexLayoutModule
  ]
})
export class SimplePagesModule { }
