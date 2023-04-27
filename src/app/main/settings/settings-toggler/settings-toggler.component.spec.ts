import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTogglerComponent } from './settings-toggler.component';

describe('SettingsIconComponent', () => {
  let component: SettingsTogglerComponent;
  let fixture: ComponentFixture<SettingsTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsTogglerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
