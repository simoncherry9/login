import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/compat/auth"
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router
  ) {

    this.registrarUsuario = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      repetirPassword: ["", Validators.required]
    })

  }

  ngOnInit(): void {

  }

  registrar() {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;

    if (password !== repetirPassword) {
      this.toastr.error("Las contraseñas no coinciden", ("Error"));
      return;
    }

    this.loading = true;
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.loading = false;
        this.toastr.success("¡El usuario fue registrado con exito!", "Usuario registrado");
        this.router.navigate(["/login"]);
      })
      .catch((error) => {
        this.loading = false;
        this.toastr.error(this.firebaseError(error.code), "Error");
      })
  }

  firebaseError(code: string) {

    switch (code) {
      case "auth/email-already-in-use":
        return "El usuario ya existe";
      case "auth/weak-password":
        return "La contraseña es muy corta";
      case "auth/invalid-email":
        return "Correo electrónico inválido";
      default:
        return "Error desconocido"
    }

  }

}