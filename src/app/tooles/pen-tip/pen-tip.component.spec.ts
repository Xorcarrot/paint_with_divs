import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenTipComponent } from './pen-tip.component';

describe('PenTipComponent', () => {
  let component: PenTipComponent;
  let fixture: ComponentFixture<PenTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenTipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
