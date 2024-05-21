import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationlistComponent } from './applicationlist.component';

describe('ApplicationlistComponent', () => {
  let component: ApplicationlistComponent;
  let fixture: ComponentFixture<ApplicationlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationlistComponent]
    });
    fixture = TestBed.createComponent(ApplicationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
