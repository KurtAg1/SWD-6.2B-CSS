import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../dto/product.dto';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  product: Product;

  constructor(private formBuilder: FormBuilder, 
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      starRating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      imageUrl: ['', [Validators.required]],
    });
  }

  submitForm() {
    console.log(JSON.stringify(this.productForm.value));
    this.productService.addProduct(this.productForm.value).subscribe((res: Product) => {
      this.product = res;
      this.router.navigate(['/products']);
    });
  }

}
