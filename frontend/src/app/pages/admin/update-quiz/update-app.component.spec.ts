import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppComponent } from './update-app.component';

describe('UpdateAppComponent', () => {
  let component: UpdateAppComponent;
  let fixture: ComponentFixture<UpdateAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAppComponent]
    });
    fixture = TestBed.createComponent(UpdateAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
