import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import {Product} from "../model/product.model"; // Assurez-vous que le chemin vers le modèle `Product` est correct

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly baseUrl = 'http://localhost:8089/products';

  constructor(private http: HttpClient) {}

  // Récupérer tous les produits
  public getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.baseUrl);
  }

  // Cocher/Décocher un produit
  public checkProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.baseUrl}/${product.id}`, {
      checked: !product.checked,
    });
  }

  // Supprimer un produit et retourner la liste mise à jour
  public deleteProduct(product: Product): Observable<Array<Product>> {
    return this.http.delete<void>(`${this.baseUrl}/${product.id}`).pipe(
      switchMap(() => this.getProducts()) // Récupère la liste mise à jour
    );
  }

  // Sauvegarder un nouveau produit
  public saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  // Pagination des produits
  public getProductsPaged(
    page: number = 1,
    size: number = 4
  ): Observable<HttpResponse<Array<Product>>> {
    return this.http.get<Array<Product>>(`${this.baseUrl}?_page=${page}&_limit=${size}`, {
      observe: 'response',
    });
  }
}
