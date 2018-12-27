import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Authenticate} from '../../models/user';
import {DxFormComponent} from 'devextreme-angular';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  buttonOptions: any = {
    text: 'Login',
    type: 'default',
    useSubmitBehavior: true
  };
  authUser: Authenticate;
  @ViewChild(DxFormComponent) loginForm: DxFormComponent;

  @Input()
  set pending(isPending: boolean) {
    this.loginForm.disabled = isPending;
  }
  @Input() errorMessage: string | null;
  @Output() submitted = new EventEmitter<Authenticate>();

  constructor() { }

  ngOnInit() {
  }

  submit(e) {
    console.log(this.authUser);
    e.preventDefault();

    this.submitted.emit(this.authUser);
  }



}
