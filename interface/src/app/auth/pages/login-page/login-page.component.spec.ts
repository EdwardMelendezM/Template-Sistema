import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'interface/src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
 
describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        BrowserModule
      ]
    });
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
    expect(createButton.textContent.trim()).toContain('Ingresar');
  });

  it('should render a link to login page', () => {
    const loginLink = fixture.nativeElement.querySelector('a[routerLink="/auth/register"]');
    expect(loginLink).toBeTruthy();
    expect(loginLink.textContent.trim()).toBe('¿No tienes cuenta? Create una');
  });
});
