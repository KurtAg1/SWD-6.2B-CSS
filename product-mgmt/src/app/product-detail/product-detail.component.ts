import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../dto/product.dto';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe((res: Product) => {
      this.product = res;
    });
  }

  onBackButtonClick(){
    this.router.navigate(['/products']);
  }

}
