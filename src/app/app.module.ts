import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,       
  ],
  imports: [
    HttpClientModule,  
    CourseModule,
    CoreModule,
    RouterModule.forRoot([      
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },         
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
