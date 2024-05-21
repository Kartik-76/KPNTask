import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewemployeeapplicationComponent } from './newemployeeapplication.component';

describe('NewemployeeapplicationComponent', () => {
  let component: NewemployeeapplicationComponent;
  let fixture: ComponentFixture<NewemployeeapplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewemployeeapplicationComponent]
    });
    fixture = TestBed.createComponent(NewemployeeapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
