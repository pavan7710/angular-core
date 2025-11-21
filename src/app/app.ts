import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule   } from '@angular/common'
import { COURSES } from '../db'
import { CourseCard } from "./courses/course-card/course-card";
import { Course } from './model/course'
import { CourseImage } from './courses/course-image/course-image'
import {  CoursesService } from './courses/courses-services'
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, finalize, map, shareReplay } from 'rxjs/operators'
import { Loading } from './shared/loading/loading';
import { LoadingService  } from './shared/loading/loading-service';
import { MessageService } from './shared/message/message-service';
import { Message } from "./shared/message/message";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CourseCard, Loading, Message],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers : [LoadingService,
    MessageService
  ]
})
export class App implements OnInit {
  protected readonly title = signal('coreConcept');

  constructor(private CoursesService:CoursesService , private LoadingService : LoadingService , private messageService : MessageService ){

  }

  courses = COURSES

  beginnerCourses$ : Observable<Course[]>
  advanceCourses$ : Observable<Course[]>

  listAllTheCourse!:Course[]

  ngOnInit(): void {
    this.loadCourse()
  }

  @ViewChild(CourseCard)
  card!: CourseCard

  message!: string

  onCourseSelected(){
    this.loadCourse()
  }

  loadCourse(){
    this.LoadingService.loadingOn()
    const courses$ = this.CoursesService.courseList().pipe(
      finalize(() => this.LoadingService.loadingOff()),
      catchError(err => {
        const message = "Could not load courses";
        this.messageService.showErrors([message]);
        console.log(message , err);
        return throwError(err);
      })
    )
    this .beginnerCourses$ = courses$.pipe(
      map(course => course.filter(data => data.category ==='BEGINNER'))
    )

    this.advanceCourses$ = courses$.pipe(
      map(course => course.filter(data => data.category === 'ADVANCED')),
    )

  }

}
