import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent {
  user = {
    firstName: '',
    lastName: '',
    documentNumber: '',
    email: '',
    whatsapp: '',
    password: '',
    rvLength: '',
    rvPlate: '',
    towPlate: '',
    isCaravanist: '',
    vehicleType: '',
  };

  confirmEmail = '';
  confirmPassword = '';
  acceptedPrivacyPolicy = false;

  constructor(private authService: AuthService) {}

  createAccount() {
    if (this.validateFields()) {
      this.authService.registerUser(this.user).subscribe(
        (response) => {
          // Lidar com a resposta da API e redirecionar após o login bem-sucedido
        },
        (error) => {
          // Lidar com erros e exibir mensagens de erro
        }
      );
    }
  }

  private validateFields(): boolean {
    // Exemplo de validação simples para fins de demonstração
    if (
      !this.user.firstName ||
      !this.user.lastName ||
      !this.user.email ||
      !this.user.password ||
      this.user.email !== this.confirmEmail ||
      this.user.password !== this.confirmPassword ||
      !this.acceptedPrivacyPolicy
    ) {
      // Exibir uma mensagem de erro ou tratar a validação de acordo com seus requisitos
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
