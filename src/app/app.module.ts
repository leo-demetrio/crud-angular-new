import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './404/not-found.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,   
  ],
  imports: [
    HttpClientModule,  
    CourseModule,
    CoreModule,
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
