import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TollPageComponent } from './toll-page.component';

describe('TollPageComponent', () => {
  let component: TollPageComponent;
  let fixture: ComponentFixture<TollPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TollPageComponent]
    });
    fixture = TestBed.createComponent(TollPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
