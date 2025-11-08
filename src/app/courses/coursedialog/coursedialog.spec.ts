import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursedialog } from './coursedialog';

describe('Coursedialog', () => {
  let component: Coursedialog;
  let fixture: ComponentFixture<Coursedialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coursedialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coursedialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
