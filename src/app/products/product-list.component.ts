import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';




@Component({
  templateUrl: './product-list.component.html',
  selector: 'pm-products',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements  OnInit{
  pageTitle = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage = false;
  _listFilter = '';
  filteredProducts: IProduct[] = [];

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }


  products: IProduct[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void{
      this.products = this.productService.getProduct();
      this.filteredProducts = this.products;
    }


  constructor(private productService: ProductService) {
  }
  onRatingClicked(message:string): void{
    this.pageTitle = 'Product List: ' + message;

  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onNotify(message: string): void{

  }
}
