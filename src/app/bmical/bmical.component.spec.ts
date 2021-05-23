import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmicalComponent } from './bmical.component';

describe('BmicalComponent', () => {
  let component: BmicalComponent;
  let fixture: ComponentFixture<BmicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
