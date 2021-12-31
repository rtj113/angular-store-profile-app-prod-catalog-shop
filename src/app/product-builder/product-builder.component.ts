import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-builder',
  templateUrl: './product-builder.component.html',
  styleUrls: ['./product-builder.component.css']
})
export class ProductBuilderComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  updateName(){
    this.name.setValue('Nancy');
  }
  ngOnInit(): void {
    // this.heroForm = new FormGroup({

    // })
  }

}
