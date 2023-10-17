import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuschangeComponent } from './statuschange.component';

describe('StatuschangeComponent', () => {
  let component: StatuschangeComponent;
  let fixture: ComponentFixture<StatuschangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatuschangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatuschangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
