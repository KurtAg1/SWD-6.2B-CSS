import { Component, OnInit } from '@angular/core';
import { Product } from '../dto/product.dto';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string = "Product Management System v1.0";
  colour: string = "green";

  imageWidth: number = 40;
  imageMargin: number = 2;

  products: Product[] = [];
  message: string = '';

  areImagesVisible: boolean = true;
  private _listFilter: string = '';

  constructor(private productService: ProductService) {
   }

  ngOnInit(): void {
    this.initialiseProducts();
  }

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(listFilter: string){
    this._listFilter = listFilter;
    this.productService.searchProductsByName(listFilter).subscribe((res: Product[]) => {
      this.products = res;
    });
  }

  initialiseProducts(){
    this.productService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
    })
  }

  getTitle(): string {
    return this.title;
  }

  toggleImages(): void {
    this.areImagesVisible = !this.areImagesVisible;
  }

  onNotify(message: string): void{
    this.message = message;
  }

}
