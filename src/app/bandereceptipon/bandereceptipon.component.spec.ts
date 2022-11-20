import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandereceptiponComponent } from './bandereceptipon.component';

describe('BandereceptiponComponent', () => {
  let component: BandereceptiponComponent;
  let fixture: ComponentFixture<BandereceptiponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandereceptiponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandereceptiponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
