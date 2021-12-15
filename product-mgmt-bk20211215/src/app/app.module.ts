import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarRatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ProductService,
  ],
  bootstrap: [ProductListComponent]
})
export class AppModule { }
