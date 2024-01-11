import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../course';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements OnInit {
  constructor() {}
  @Output()
  cuci: EventEmitter<Course> | undefined;

  @Input()
  indeks: number = -1;

  @Input()
  kurs: Course | undefined;
  OnCrsViewed() {
    console.log('Se naogjam vo child');
    this.cuci?.emit(this.kurs);
  }
  ngOnInit() {}
  klasi() {
    return { ' course-card': true, begin: true };
  }
}
