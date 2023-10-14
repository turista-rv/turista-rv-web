import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { User } from 'src/app/models/LoginUser.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent {
  user: User = {
    name: '',
    // documentNumber: '',
    //cpf: '',
    email: '',
    phone: '' || undefined,
    password: '' || undefined,
    rvLength: 0,
    rvPlate: '' || undefined,
    tugPlate: '' || undefined,
    touristType: 'ADMIRADOR',
    vehicleType: '' || undefined,
  };
  
  documentNumber: string = ''
  confirmEmail = '';
  confirmPassword = '';

  constructor(
    private UserService: UserService,
    private router: Router
  ) { }

  invalidFields: string[] = [];

  createAccount() {
    this.invalidFields = this.getInvalidFields();
    if(this.isPassport) this.user.passport = this.documentNumber
      else this.user.cpf = this.documentNumber
    
      this.UserService.registerUser(this.user).subscribe(
        (response) => {
          this.router.navigateByUrl('/');
          console.log('Conta criada com sucesso!', response);
          alert('Conta criada com sucesso!');
        },
        
        (error) => {
          alert("Erro, verifique os campos e preencha corretamente");
        }
      );
  }
  

  private getInvalidFields(): string[] {
    const invalidFields: string[] = [];

    if (!this.user.name) {
      invalidFields.push('Nome');
    }
    if (!this.user.email) {
      invalidFields.push('Email');
    }
    // if (!this.user.emailActive) {
    //   invalidFields.push('Confirme o Email');
    // }


    return invalidFields;
  }

  private validateFields(): boolean {
    if (
      // !this.user.firstName ||
      // !this.user.lastName ||
      !this.user.name ||
      !this.user.email ||
      // !this.user.emailActive ||
      // !this.user.dateBirth ||
      // !this.user.dateBirth ||
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
