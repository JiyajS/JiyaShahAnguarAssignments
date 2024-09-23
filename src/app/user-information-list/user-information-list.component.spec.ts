import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationListComponent } from './user-information-list.component';

describe('UserInformationListComponent', () => {
  let component: UserInformationListComponent;
  let fixture: ComponentFixture<UserInformationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInformationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
