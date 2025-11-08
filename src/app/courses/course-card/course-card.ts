import { Component , EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Course } from '../../model/course'
import { CommonModule  } from '@angular/common'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-course-card',
  imports: [
    CommonModule
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnInit {
    @Input() courses: Course[] = [];


    @Output('courseSelected')
    courseEmitter = new EventEmitter<string>


    ngOnInit(): void {
      console.log(this.courses)
    }

 
    editCourse(data:Course){
      console.log(data)
    }

 
}
