import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Product } from "../dto/product.dto";

@Injectable()
export class ProductService {
    endpoint: string = 'http://localhost:8080/product';

    httpHeader = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    }

    constructor(private httpClient: HttpClient) {

    }

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.endpoint);
    }

    searchProductsByName(name: string): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.endpoint + "?name=" + name);
    }

    getProductById(id: number): Observable<Product> {
        return this.httpClient.get<Product>(this.endpoint + "/" + id);
    }

    addProduct(product: Product): Observable<Product>{
        return this.httpClient.post<Product>(this.endpoint, product, this.httpHeader);
    }

    updateProduct(product: Product): Observable<Product>{
        return this.httpClient.put<Product>(this.endpoint, product, this.httpHeader);
    }

    deleteProduct(id: number): Observable<any>{
        return this.httpClient.delete(this.endpoint + "/" + id);
    }
}