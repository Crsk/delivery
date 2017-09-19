import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product/product.service';
import { CategoryService } from './../../category/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productService: ProductService) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    // tomo solo 1 asi que no tengo que dessubscribirme
    if (this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
  }

  save(product) {
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    // TODO - bs dialog box
    if (!confirm('¿Quieres eliminar este producto?')) return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }
}
