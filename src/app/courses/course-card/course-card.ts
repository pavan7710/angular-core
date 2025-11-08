import { Component , EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Course } from '../../model/course'
import { CommonModule  } from '@angular/common'
@Component({
  selector: 'app-course-card',
  imports: [
    CommonModule
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnInit {
    @Input() course! : Course

    @Input() noImageTpl!: TemplateRef<any>

    @Output('courseSelected')
    courseEmitter = new EventEmitter<string>


    ngOnInit(): void {
      console.log(this.course)
    }

    editItem(item:Course){
      
    }

    viewItem(item:Course){
      this.courseEmitter.emit("my name is pavan")
    }
}
