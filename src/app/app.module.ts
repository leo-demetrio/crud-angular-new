import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './404/not-found.component';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,   
  ],
  imports: [
    HttpClientModule,  
    CourseModule,
    RouterModule.forRoot([      
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },     
      {
        path: '**', component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
