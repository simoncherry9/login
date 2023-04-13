import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string) {

    switch (code) {
      case "auth/email-already-in-use":
        return "El usuario ya existe";
      case "auth/weak-password":
        return "La contraseña es muy corta";
      case "auth/invalid-email":
        return "Correo electrónico inválido";
      default:
        return "Error desconocido"
      case "auth/wrong-password":
          return "Contraseña incorrecta";
      case "auth/user-not-found":
          return "El usuario no existe";
    }
  }

}
