import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliyComponent } from './familiy.component';

describe('FamiliyComponent', () => {
  let component: FamiliyComponent;
  let fixture: ComponentFixture<FamiliyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamiliyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
