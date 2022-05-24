import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDashboradComponent } from './emp-dashborad.component';

describe('EmpDashboradComponent', () => {
  let component: EmpDashboradComponent;
  let fixture: ComponentFixture<EmpDashboradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDashboradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
