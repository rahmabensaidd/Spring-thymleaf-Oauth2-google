import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
public productForm!: FormGroup;
constructor(private fb: FormBuilder, private productService: ProductService) {

}
ngOnInit(): void {
  this.productForm = this.fb.group({
    name:this.fb.control('', [Validators.required]),
    price:this.fb.control('', [Validators.required]),
    checked:this.fb.control('false', [Validators.required]),
  })
}

  saveProduct() {
    let product = this.productForm.value; // Récupère les données du formulaire
    this.productService.saveProduct(product).subscribe({
      next: (data) => {
        alert('Produit sauvegardé avec succès : ' + JSON.stringify(data));
      },
      error: (err) => {
        alert('Erreur lors de la sauvegarde : ' + JSON.stringify(err));
      }
    });
  }

}
