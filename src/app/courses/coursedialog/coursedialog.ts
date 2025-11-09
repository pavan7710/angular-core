import { Component , EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'app-coursedialog',
  imports: [],
  templateUrl: './coursedialog.html',
  styleUrl: './coursedialog.css',
})
export class Coursedialog implements OnInit {

  ngOnInit(): void {
    console.log(this.selectedCourse)
  }

  @Output() close = new EventEmitter<any>()
  @Output() save = new EventEmitter<any>()
  @Input() selectedCourse:Course

  onCancle(){
    this.close.emit(null)
  }
  onBackdropClick(){
    this.close.emit(null)
  }

  saveCouese(){
    this.save.emit("200")
  }
}
