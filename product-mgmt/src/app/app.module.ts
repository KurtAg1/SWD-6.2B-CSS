import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ProductService } from './services/product.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailGuardService } from './services/product-detail-guard.service';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarRatingComponent,
    HomeComponent,
    ProductDetailComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductService,
    ProductDetailGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
