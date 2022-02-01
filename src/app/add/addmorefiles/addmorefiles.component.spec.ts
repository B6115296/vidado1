import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmorefilesComponent } from './addmorefiles.component';

describe('AddmorefilesComponent', () => {
  let component: AddmorefilesComponent;
  let fixture: ComponentFixture<AddmorefilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmorefilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmorefilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
