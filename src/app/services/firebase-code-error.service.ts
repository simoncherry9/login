import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string) {

    switch (code) {
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return "El usuario ya existe";
      case FirebaseCodeErrorEnum.WeakPassword:
        return "La contraseña es muy corta";
        case FirebaseCodeErrorEnum.InvalidEmail:
        return "Correo electrónico inválido";
      default:
        return "Error desconocido"
      case FirebaseCodeErrorEnum.WrongPassword:
          return "Contraseña incorrecta";
      case FirebaseCodeErrorEnum.UserNotFound:
          return "El usuario no existe";
    }
  }

}
