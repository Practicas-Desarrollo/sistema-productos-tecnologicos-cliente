import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../../core/services/category/category.service";
import { Category } from "../../../core/models/category.model";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  displayedColumns: string[] = ['displayId', 'nombre', 'garantia'];
  dataSource = new MatTableDataSource<Category>([]);

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoryService.getCategories().subscribe(
      (data: Category[]) => {
        this.dataSource.data = data.map((category, index) => ({
          ...category,
          displayId: index + 1,
        }));
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }

  navigateToAddCategory(): void {
    this.router.navigate(['/add-category']);
  }

}
