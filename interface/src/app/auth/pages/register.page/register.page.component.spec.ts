import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageComponent } from './register.page.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPageComponent],
      imports: [MatFormFieldModule, MatIconModule]
    });
    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty name input field initially', () => {
    const nameInput = fixture.nativeElement.querySelector('input[matInput][type="text"]');
    expect(nameInput).toBeTruthy();
    expect(nameInput.value).toBe('');
  });

  it('should have an empty username input field initially', () => {
    const usernameInput = fixture.nativeElement.querySelector('input[matInput][type="text"]');
    expect(usernameInput).toBeTruthy();
    expect(usernameInput.value).toBe('');
  });

  it('should have an empty password input field initially', () => {
    const passwordInput = fixture.nativeElement.querySelector('input[matInput][type="password"]');
    expect(passwordInput).toBeTruthy();
    expect(passwordInput.value).toBe('');
  });

  it('should render a "Crear" button', () => {
    const createButton = fixture.nativeElement.querySelector('button[color="warn"]');
    expect(createButton).toBeTruthy();
    expect(createButton.textContent.trim()).toBe('Crear');
  });

  it('should render a link to login page', () => {
    const loginLink = fixture.nativeElement.querySelector('a[routerLink="/auth/login"]');
    expect(loginLink).toBeTruthy();
    expect(loginLink.textContent.trim()).toBe('¿Ya tienes cuenta? Ingresa');
  });

});
