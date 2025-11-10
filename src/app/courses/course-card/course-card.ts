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
    courseSelected = new EventEmitter<Course>

    editCourse$ = new BehaviorSubject<any | null >(null)

    ngOnInit(): void {
    }

    viewCourse(data:Course){

    }

    onDialogClose(data:any){
      this.editCourse$.next(data)
    }

    onSave(data:string){
      this.courseSelected.emit()
      this.editCourse$.next(null)
    }
 

 
}
