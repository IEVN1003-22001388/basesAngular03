import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperasBasComponent } from './operas-bas.component';

describe('OperasBasComponent', () => {
  let component: OperasBasComponent;
  let fixture: ComponentFixture<OperasBasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperasBasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperasBasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
