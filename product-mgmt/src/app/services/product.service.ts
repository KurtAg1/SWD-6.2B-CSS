import { HttpClient, HttpHeaders } from "@angular/common/http";

export class ProductService {
    endpoint: string = 'http://localhost:8080/product';

    httpHeader = {
        header: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    }

    constructor(private httpClient: HttpClient){
        
    }
}