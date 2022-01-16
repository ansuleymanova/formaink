import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEmphasisComponent } from './button-emphasis.component';

describe('ButtonEmphasisComponent', () => {
  let component: ButtonEmphasisComponent;
  let fixture: ComponentFixture<ButtonEmphasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEmphasisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonEmphasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
