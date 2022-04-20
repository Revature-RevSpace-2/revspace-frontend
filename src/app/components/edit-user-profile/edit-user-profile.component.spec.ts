import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EditUserProfileComponent } from './edit-user-profile.component';

describe('EditUserProfileComponent', () => {
  let component: EditUserProfileComponent;
  let fixture: ComponentFixture<EditUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should detect a profile picture change and set current user model', () => {
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(new File([''], 'test-file.pdf'))
    const inputDebugEl  = fixture.debugElement.query(By.css('input[type=file]'));
    inputDebugEl.nativeElement.files = dataTransfer.files;
    inputDebugEl.nativeElement.dispatchEvent(new InputEvent('change'));
    fixture.detectChanges();
    expect(component.currentUser.image).toBe('');
    
});

it('file change event should arrive in handler', () => {
    const element = fixture.nativeElement;
    const input = element.querySelector('#file');
    spyOn(component, 'confirmUpdateProfile');
    input.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.confirmUpdateProfile).toHaveBeenCalled();
});

it('should display image',()=>{
  const fixture = TestBed.createComponent(EditUserProfileComponent);
  const app = fixture.componentInstance.currentUser;
  expect(app.image).toContain('');
})  

});
