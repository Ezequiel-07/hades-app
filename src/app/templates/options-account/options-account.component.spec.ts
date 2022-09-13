import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsAccountComponent } from './options-account.component';

describe('OptionsAccountComponent', () => {
  let component: OptionsAccountComponent;
  let fixture: ComponentFixture<OptionsAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
