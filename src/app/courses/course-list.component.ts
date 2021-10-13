import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export  class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular Forms',
                imageUrl: './assets/images/forms.png',
                price: 99.99,
                code: 'Z233',
                duration: 120,
                rating: 4.6,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 1,
                name: 'Angular HTTP',
                imageUrl: './assets/images/http.png',
                price: 99.99,
                code: 'Z233',
                duration: 120,
                rating: 3.6,
                releaseDate: 'December, 2, 2019'
            }
        ];
    }
}