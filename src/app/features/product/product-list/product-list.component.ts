import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../../core/services/product/product.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['displayId', 'nombre', 'precio', 'cantidad', 'categoria', 'actions'];
  dataSource = new MatTableDataSource<Product>([]);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.dataSource.data = data.map((product, index) => ({
          ...product,
          displayId: index + 1,
        }));
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  editProduct(product: Product) {
    console.log('Editing product', product);
  }

  deleteProduct(id: string) { 
    console.log('Deleting product with ID', id);
  }

}
