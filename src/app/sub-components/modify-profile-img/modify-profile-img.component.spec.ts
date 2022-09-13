import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProfileImgComponent } from './modify-profile-img.component';

describe('ModifyProfileImgComponent', () => {
  let component: ModifyProfileImgComponent;
  let fixture: ComponentFixture<ModifyProfileImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyProfileImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyProfileImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
