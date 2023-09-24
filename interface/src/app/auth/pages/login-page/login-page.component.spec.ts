import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'interface/src/app/material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { LoginUseCase } from 'domain/user/usercases/login.usecase';
import { RegisterUseCase } from 'domain/user/usercases/register.usecase';
import { UserModel } from 'domain/user/models/user.model';
import { Observable, of } from 'rxjs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../../service/auth.service';

class MockLoginUseCase {
  execute(user: UserModel): Observable<any> {
    // Simula el comportamiento de LoginUseCase
    // Puedes personalizarlo según tus necesidades de prueba
    return of({ /* datos simulados */ });
  }
}

class MockRegistersCase {
  execute(user: UserModel): Observable<any> {
    // Simula el comportamiento de LoginUseCase
    // Puedes personalizarlo según tus necesidades de prueba
    return of({ /* datos simulados */ });
  }
}

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        MatFormFieldModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MaterialModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        AuthService,
        // Proporciona el mock en lugar de LoginUseCase
        { provide: LoginUseCase, useClass: MockLoginUseCase },
        { provide: RegisterUseCase, useClass: MockRegistersCase }
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



  it('should render a link to login page', () => {
    const loginLink = fixture.nativeElement.querySelector('a[routerLink="/auth/register"]');
    expect(loginLink).toBeTruthy();
    expect(loginLink.textContent.trim()).toBe('¿No tienes cuenta? Create una');
  });
});
