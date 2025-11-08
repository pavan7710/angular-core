import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule   } from '@angular/common'
import { COURSES } from '../db'
import { CourseCard } from "./courses/course-card/course-card";
import { Course } from './model/course'
import { CourseImage } from './courses/course-image/course-image'
import {  CoursesService } from './courses/courses-services'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CourseCard , CourseImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('coreConcept');

  constructor(private Courses:CoursesService){

  }

  courses = COURSES

  ngOnInit(): void {
      console.log(this.Courses.courseList().subscribe())
  }

  @ViewChild(CourseCard)
  card!: CourseCard

  message!: string

  onCourseSelected(course:string){
      console.log(course)
      this.message = course
      console.log(this.card)
  }

}
