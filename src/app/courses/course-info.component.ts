import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {
    
    course: Course;

    constructor(
        private activedRoute: ActivatedRoute,
        private courseService: CourseService,
        private router: Router
    ) {}
    
    ngOnInit(): void {
        this.course = this.courseService.retrieveById(+this.activedRoute.snapshot.paramMap.get('id'));
    }
    save(): void {
        this.courseService.save(this.course);
        this.router.navigate(['/courses']);
    }
}