import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyNicknameComponent } from './modify-nickname.component';

describe('ModifyNicknameComponent', () => {
  let component: ModifyNicknameComponent;
  let fixture: ComponentFixture<ModifyNicknameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyNicknameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyNicknameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
