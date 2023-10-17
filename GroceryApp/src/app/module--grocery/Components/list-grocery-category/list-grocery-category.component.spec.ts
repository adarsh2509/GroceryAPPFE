import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroceryCategoryComponent } from './list-grocery-category.component';

describe('ListGroceryCategoryComponent', () => {
  let component: ListGroceryCategoryComponent;
  let fixture: ComponentFixture<ListGroceryCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGroceryCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGroceryCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
