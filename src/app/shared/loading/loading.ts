import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading-service'
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-loading',
  imports: [ CommonModule ],
  templateUrl: './loading.html',
  styleUrl: './loading.css',
})
export class Loading implements OnInit {

  constructor(public loadingService : LoadingService) {

  }

  ngOnInit(): void {
    
  }

}
