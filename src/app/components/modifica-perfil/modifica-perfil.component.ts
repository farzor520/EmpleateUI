import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modifica-perfil',
  templateUrl: './modifica-perfil.component.html',
  styleUrls: ['./modifica-perfil.component.css']
})
export class ModificaPerfilComponent implements OnInit {

	//hide = true;
	registerForm: FormGroup;
    submitted = false;
    //

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  	this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }




  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)')
    }	




}
