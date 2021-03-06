import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	categories: Category[]
	currentCategory: Category
	dataLoaded = false
	constructor(private categoryService:CategoryService) { }

	ngOnInit(): void {
	this.getCategories()
	}

	getCategories() {
	this.categoryService.getCategories().subscribe(response => {
			this.categories = response.data
			this.dataLoaded = true
		})
	}

	setAllCategory() {
		this.currentCategory = {categoryId:0, categoryName: ""}
	}

	setCurrentCategory(category:Category) {
		this.currentCategory = category
	}

	getCurrentCategoryClass(category:Category) {
		return category == this.currentCategory ? "list-group-item active" : "list-group-item"
	}

	getAllCategoryClass() {
		if (!this.currentCategory || this.currentCategory.categoryId === 0) return "list-group-item active"
		else return "list-group-item"
	}
}
