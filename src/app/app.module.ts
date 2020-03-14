import { CoreModule } from './core/core.mdule';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Error404Compoennt } from './error-404/error-404.component';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent, 
    Error404Compoennt, 
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Compoennt
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
