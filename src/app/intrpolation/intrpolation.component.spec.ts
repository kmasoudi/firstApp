import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrpolationComponent } from './intrpolation.component';

describe('IntrpolationComponent', () => {
  let component: IntrpolationComponent;
  let fixture: ComponentFixture<IntrpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
