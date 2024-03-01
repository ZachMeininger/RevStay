import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelShowcaseComponent } from './hotel-showcase.component';

describe('HotelShowcaseComponent', () => {
  let component: HotelShowcaseComponent;
  let fixture: ComponentFixture<HotelShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
