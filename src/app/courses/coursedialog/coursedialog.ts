import { Component , EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/course';
import { FormGroup , ReactiveFormsModule , FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { CoursesService } from '../courses-services'
@Component({
  selector: 'app-coursedialog',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './coursedialog.html',
  styleUrl: './coursedialog.css',
})
export class Coursedialog implements OnInit {

  @Output() close = new EventEmitter<any>()
  @Output() save = new EventEmitter<any>()
  @Input() selectedCourse:Course
  form: FormGroup

  constructor(private fb:FormBuilder , private CousesService : CoursesService){

  }

   ngOnInit(): void {
    this.form = this.fb.group({
      description : [this.selectedCourse.description || '' ]
    })
  }

  onSave(){
      this.CousesService.saveCourse(this.selectedCourse.id,this.form.value).subscribe(
        res => {
          this.save.emit()
          this.onCancle()
        }
      )
  }

  onCancle(){
    this.close.emit(null)
  }

  saveCouese(){
    this.save.emit("200")
  }
}
