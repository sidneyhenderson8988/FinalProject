import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Users } from './../../model/users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: any = {};
  error: any = {};
  data: any = {};

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
}
