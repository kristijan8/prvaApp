import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from '../course';
import { COURSES } from '../db-data';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, CourseCardComponent],
})
export class AppComponent {
  title = 'prvaApp';

  kursevi = COURSES;

  onAppViewed(c: Event) {
    console.log('Vo app' + c);
  }
}
