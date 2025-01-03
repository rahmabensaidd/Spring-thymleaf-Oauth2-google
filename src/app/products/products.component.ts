import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import { Product } from "../model/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = [];
  allProductsCount!: number;
  totalPages!: number;
  pageSize: number = 2;
  currentPage!: number ;

  constructor(private productsservices: ProductService) {}

  ngOnInit(): void {
    // Appel initial pour récupérer les produits paginés
    this.getProducts();
  }

  getProducts(): void {
    this.productsservices.getProductsPaged(this.currentPage, this.pageSize).subscribe({
      next: (resp) => {
        this.products = resp.body as Product[];
        this.getTotalProducts();
        console.log(this.products.length);
      }
    });
  }

  getTotalProducts(): void {
    // Appelez l'API pour obtenir uniquement le nombre total de produits
    this.productsservices.getProducts().subscribe({
      next: (data) => {
        this.allProductsCount = data.length;  // Récupère le nombre total des produits
        console.log('Total des produits :', this.allProductsCount);
        this.totalPages = Math.ceil(this.allProductsCount / this.pageSize);  // Calculer le total des pages
        console.log('Total pages :', this.totalPages);
      }
    });
  }

  handleCheckproduct(product: Product): void {
    this.productsservices.checkProduct(product).subscribe({
      next: (updatedproduct) => {
        product.checked = !product.checked;
      }
    });
  }

  deleteproduct(product: Product): void {
    this.productsservices.deleteProduct(product).subscribe({
      next: () => {
        // Supprimer le produit de la liste locale sans refaire une requête complète
        this.products = this.products.filter(p => p.id !== product.id);
      }
    });
  }

  handlegotopage(page: number): void {
    this.currentPage = page;
    this.getProducts();  // Rechercher les produits de la nouvelle page
  }
}
