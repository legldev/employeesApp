import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  private baseUrl: string = "http://localhost:5005/api/employee";

  constructor(private httpClient: HttpClient) { }

  public get(page: number, limit:number = 5): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}?page=${page}&limit=${limit}`);
}

public post(data: employeeData): Observable<any>{
  return this.httpClient.post(this.baseUrl, data);
}
}

interface employeeData {
  name: string;
  salary: number;
  department: string;
  }