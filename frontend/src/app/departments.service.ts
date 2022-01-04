import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private baseUrl: string = "http://localhost:5005/api/deparment";

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<DepartmentData>{
    return this.httpClient.get<DepartmentData>(`${this.baseUrl}`);
  }

  public post(name: string): Observable<any>{
  return this.httpClient.post(`${this.baseUrl}`, { name });
  }
}


interface DepartmentData {
  data: [];
  pagination: {};
  }