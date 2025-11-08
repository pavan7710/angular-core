import { Injectable } from '@angular/core';
import {} from 'rxjs'
import { Course } from '../model/course'
import { HttpClient , HttpHeaders , HttpParams } from '@angular/common/http'
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  
  constructor(private http:HttpClient){

  }


  courseList(){
      return this.http.get<Course[]>('/api/courses') 
  }
}
