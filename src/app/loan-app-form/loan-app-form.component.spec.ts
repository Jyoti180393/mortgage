import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAppFormComponent } from './loan-app-form.component';

describe('LoanAppFormComponent', () => {
  let component: LoanAppFormComponent;
  let fixture: ComponentFixture<LoanAppFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAppFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
