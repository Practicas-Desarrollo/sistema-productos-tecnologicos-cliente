import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl: string = environment.restApiUrl;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}` + '/categorias');
  }
}
