import { Component , EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Course } from '../../model/course'
import { CommonModule  } from '@angular/common'
import { BehaviorSubject, Subject, Observable, filter } from 'rxjs';

import { Coursedialog } from '../coursedialog/coursedialog'
@Component({
  selector: 'app-course-card',
  imports: [
    CommonModule,
    Coursedialog
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnInit {
    @Input() courses: Course[] = [];
    @Output('courseSelected')
    courseEmitter = new EventEmitter<string>

    editCourse$ = new BehaviorSubject<any | null >(null)

    ngOnInit(): void {
      console.log(this.courses)
    }

    onDialogClose(data:any){
      console.log(data)
      this.editCourse$.next(data)
    }
 

 
}
