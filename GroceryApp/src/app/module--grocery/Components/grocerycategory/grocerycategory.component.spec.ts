import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerycategoryComponent } from './grocerycategory.component';

describe('GrocerycategoryComponent', () => {
  let component: GrocerycategoryComponent;
  let fixture: ComponentFixture<GrocerycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrocerycategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrocerycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
