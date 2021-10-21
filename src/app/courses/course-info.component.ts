import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-info.component.html',
    styleUrls: ['/course-info.component.css']
})

export class CourseInfoComponent implements OnInit {
    
    course: Course;

    constructor(
        private activedRoute: ActivatedRoute,
        private courseService: CourseService,
        private router: Router
    ) {}
    
    ngOnInit(): void {
        this.retrieveById();
    }
    retrieveById(): void {        
        this.courseService.retrieveById(+this.activedRoute.snapshot.paramMap.get('id'))
            .subscribe({
                next: course => this.course = course,
                error: err => console.log('Error', err)
            });
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log(course),
            error: err => console.log('Error', err)
        });
        this.router.navigate(['/courses']);
    }
}