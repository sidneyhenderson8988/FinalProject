import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../model/users';

const api = 'http://localhost:3000/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

registerUser(user: Users): Observable<Users>{
  return this.httpClient.post<Users>(api + 'register', user);
}

addUser(user: Users): Observable<Users>{
  return this.httpClient.post<Users>(api + 'addUser', user);
}

login(user: Users): Observable<Users>{
  return this.httpClient.post<Users>(api + 'login' , user);
}

}
