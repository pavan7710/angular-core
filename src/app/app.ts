import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule   } from '@angular/common'
import { COURSES } from '../db'
import { CourseCard } from "./course-card/course-card";
import { Course } from './model/course'
import { CourseImage } from './course-image/course-image'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CourseCard , CourseImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('coreConcept');

  courses = COURSES

  ngOnInit(): void {
    
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
