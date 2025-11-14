import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule   } from '@angular/common'
import { COURSES } from '../db'
import { CourseCard } from "./courses/course-card/course-card";
import { Course } from './model/course'
import { CourseImage } from './courses/course-image/course-image'
import {  CoursesService } from './courses/courses-services'
import { Observable, pipe } from 'rxjs';
import { finalize, map, shareReplay } from 'rxjs/operators'
import { Loading } from './shared/loading/loading';
import { LoadingService  } from './shared/loading/loading-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CourseCard , Loading],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('coreConcept');

  constructor(private CoursesService:CoursesService , private LoadingService : LoadingService ){

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
      finalize(() => this.LoadingService.loadingOff())
    )
    this .beginnerCourses$ = courses$.pipe(
      map(course => course.filter(data => data.category ==='BEGINNER'))
    )

    this.advanceCourses$ = courses$.pipe(
      map(course => course.filter(data => data.category === 'ADVANCED')),
    )

  }

}
