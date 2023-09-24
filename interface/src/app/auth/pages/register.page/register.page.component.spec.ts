import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPageComponent } from './register.page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'interface/src/app/material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';

// Importa UserModel, Observable y of desde rxjs
import { UserModel } from 'domain/user/models/user.model';
import { Observable, of } from 'rxjs';
import { LoginUseCase } from 'domain/user/usercases/login.usecase';
import { RegisterUseCase } from 'domain/user/usercases/register.usecase';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

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

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPageComponent],
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
        { provide: LoginUseCase, useClass: MockLoginUseCase },
        { provide: RegisterUseCase, useClass: MockRegistersCase}
      ]
    });
    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
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
    expect(createButton.textContent.trim()).toContain('Crear');
  });

  it('should render a link to login page', () => {
    const loginLink = fixture.nativeElement.querySelector('a[routerLink="/auth/login"]');
    expect(loginLink).toBeTruthy();
    expect(loginLink.textContent.trim()).toBe('¿Ya tienes cuenta? Ingresa');
  });


});
