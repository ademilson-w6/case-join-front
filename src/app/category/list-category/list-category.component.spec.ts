import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategory } from './list-category.component';

describe('HomeComponent', () => {
  let component: ListCategory;
  let fixture: ComponentFixture<ListCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategory ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
