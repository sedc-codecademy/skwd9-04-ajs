import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable()
export class UserService {

    usersDefaultUrl = "https://jsonplaceholder.typicode.com/users";

    constructor(private _httpClient: HttpClient) {}
    
    getUsers(): Observable<any> {
        return this._httpClient.get(this.usersDefaultUrl)
    }
}