import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Course } from '../model/course'
import { map, shareReplay} from 'rxjs/operators'
import { HttpClient , HttpHeaders , HttpParams } from '@angular/common/http'
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  
  constructor(private http:HttpClient){

  }


  // courseList(): Observable<Course> {
  //     return this.http.get<Course[]>('/api/courses').pipe(
  //       map(
  //         res => res['payload']
  //       )
  //     )
  // }

    courseList(): Observable<Course[]> {
      return this.http.get<{ payload: Course[] }>('/api/courses').pipe(
        map(
          res => res['payload']
        ),
        shareReplay()
      )
  }
}
