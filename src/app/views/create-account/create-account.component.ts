import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent {
  user = {
    // firstName: 'Felipe',
    // lastName: 'Silva',
    name: 'Felipe Silva',
    gender: 'MASCULINO',
    documentNumber: '',
    cpf: '407.583.555-11',
    email: 'flipe.silva@terra.com.br',
    emailActive: 'flipe.silva@terra.com.br',
    dateBirth: '06/10/1990',
    phone: '11964509988',
    password: '123456',
    rvLength: 10,
    rvPlate: 'ABD5555',
    tugPlate: 'ABD5555',
    touristType: 'CARAVANISTA',
    vehicleType: '',
  };

  confirmEmail = '';
  confirmPassword = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  invalidFields: string[] = [];

  createAccount() {
    this.invalidFields = this.getInvalidFields();
    if (this.invalidFields.length === 0) {
      this.authService.registerUser(this.user).subscribe(
        (response) => {
          this.router.navigateByUrl('/login');
          console.log('Conta criada com sucesso!');
        },
        (error) => {
          console.log("Erro, verifique os campos e preencha corretamente")
          console.log(error)
          console.error('Erro ao conectar à API:', error);
         
        }
      );
    }
  }
  private getInvalidFields(): string[] {
    const invalidFields: string[] = [];
  
    if (!this.user.name) {
      invalidFields.push('Nome');
    }
    if (!this.user.email) {
      invalidFields.push('Email');
    }
    if (!this.user.emailActive) {
      invalidFields.push('Confirme o Email');
    }
   
  
    return invalidFields;
  }
  
  private validateFields(): boolean {
    if (
      // !this.user.firstName ||
      // !this.user.lastName ||
      !this.user.name ||
      !this.user.email ||
      !this.user.emailActive ||
      !this.user.dateBirth ||
      !this.user.dateBirth ||
      !this.user.phone ||
      this.user.email !== this.confirmEmail ||
      this.user.password !== this.confirmPassword 
    ) {
      console.error('Campos inválidos ou não preenchidos.');
      return false;
    }
    return true;
  }

  isPassport = false;

  toggleDocumentType() {
    this.isPassport = !this.isPassport;
  }
}
