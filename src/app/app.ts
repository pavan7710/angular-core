import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule   } from '@angular/common'
import { COURSES } from '../db'
import { CourseCard } from "./courses/course-card/course-card";
import { Course } from './model/course'
import { CourseImage } from './courses/course-image/course-image'
import {  CoursesService } from './courses/courses-services'
import { Observable, pipe } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('coreConcept');

  constructor(private CoursesService:CoursesService){

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
    const courses$ = this.CoursesService.courseList()
    this .beginnerCourses$ = courses$.pipe(
      map(course => course.filter(data => data.category ==='BEGINNER'))
    )

    this.advanceCourses$ = courses$.pipe(
      map(course => course.filter(data => data.category === 'ADVANCED')),
    )

  }

}
