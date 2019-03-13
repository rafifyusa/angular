import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  id = '';
  form = { name: '', price: 0 };
  constructor(private formBuilder: FormBuilder, private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.form);
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
    if (this.route.params.value.id != null) {
      this.id = this.route.params.value.id
      const thisD = this
      this.data.findById(this.id).subscribe(data => {
        thisD.form.name = data.name
        thisD.form.price = data.price;
      });
    }

  }

  onSubmit() {
    if (this.messageForm.invalid) {
      console.log('invalid')
      return;
    }
    console.log(this.form);

    if (this.id !== '') {
      this.data.updateProductFromDB({name: this.messageForm.controls.name.value, price: this.messageForm.controls.price.value}, this.id)
        .subscribe(datas => {
          console.log(datas);
          alert(datas.message);
          location.href = '/';
        });
    } else {
      this.data.insertProductIntoDB({name: this.messageForm.controls.name.value, price: this.messageForm.controls.price.value})
        .subscribe(datas => {
          console.log(datas);
          alert(datas.message);
          location.href = '/';
        });
    }
  }
}
