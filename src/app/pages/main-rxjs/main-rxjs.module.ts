import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRxjsRoutingModule } from './main-rxjs-routing.module';
import { MaterialModule } from '../../shared/material/material.module';
import { MainRxjsComponent } from './main-rxjs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SimpleLoaderComponent } from '../../components/simple-loader/simple-loader.component';
import { CodeScreensComponent } from '../../shared/components/code-screens/code-screens.component';
import { DialogScreensComponent } from '../../shared/components/dialog-screens/dialog-screens.component';



@NgModule({
  declarations: [MainRxjsComponent, SimpleLoaderComponent, CodeScreensComponent, DialogScreensComponent],
  imports: [
    CommonModule,
    MainRxjsRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class MainRxjsModule { }
