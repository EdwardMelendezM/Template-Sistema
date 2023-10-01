import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskModalEditComponent } from './task-modal-edit.component';

describe('TaskModalEditComponent', () => {
  let component: TaskModalEditComponent;
  let fixture: ComponentFixture<TaskModalEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskModalEditComponent]
    });
    fixture = TestBed.createComponent(TaskModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
