import { Component , Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-image',
  imports: [],
  templateUrl: './course-image.html',
  styleUrl: './course-image.css',
})
export class CourseImage implements OnInit {

  @Input('img')
  img: string

  ngOnInit(): void {
      console.log(this.img)
  }

}
