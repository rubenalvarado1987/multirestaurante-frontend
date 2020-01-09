import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { RestaurantService } from '../../services/restaurant.service';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

const URL = 'http://ec2-18-231-197-224.sa-east-1.compute.amazonaws.com/api/chatapp/upload-image';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url : URL,
    disableMultipart: true
  });

  selectedFile : any;

  postForm: FormGroup;

  restaurants = [];

  restaurantSelectId: any;

  constructor(private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit() {

    this.init();

    this.GetAllRestaurant();

    const dropDownELement = document.querySelectorAll('select');
    M.FormSelect.init(dropDownELement, {

    });



  }

  init(){
    this.postForm = this.fb.group({
      categoryName: ['', Validators.required],
      categoryDescription: ['', Validators.required],
      restaurantId: [this.restaurants[1]]
    })
  }

  GetAllRestaurant(){
    this.restaurantService.GetAllRestaurants().subscribe(data => {
      console.log(data);
      this.restaurants = data.restaurants;

      console.log(this.restaurants);
    });
  }

  SubmitPost(){
    let body;

      body = {
        image: this.selectedFile,
        categoryName: this.postForm.value.categoryName,
        categoryDescription: this.postForm.value.categoryDescription,
        restaurantId: this.postForm.value.restaurantId,


     }

     //console.log(body);

     this.categoryService.addCategory(body).subscribe(data => {
       console.log(data);

       this.postForm.reset();

       this.router.navigate(['/category/all']);
     });

  }

  ReadAsBase64(file): Promise <any> {
    const reader = new FileReader();
    const fileValue = new Promise((resolve ,reject) => {
        reader.addEventListener('load' , () => {
          resolve(reader.result);
        });

        reader.addEventListener('error' , (event) => {
          reject(event);
        });

        reader.readAsDataURL(file);
    });

    return fileValue;
  }

  OnFileSelected(event){
    const file: File = event[0];

    this.ReadAsBase64(file).then(result => {
        this.selectedFile = result;
    }).catch(err => console.log(err));
  }

}
