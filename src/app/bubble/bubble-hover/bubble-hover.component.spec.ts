import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleHoverComponent } from './bubble-hover.component';

describe('BubbleHoverComponent', () => {
  let component: BubbleHoverComponent;
  let fixture: ComponentFixture<BubbleHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleHoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
