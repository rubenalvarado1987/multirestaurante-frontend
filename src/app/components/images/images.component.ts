import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { UsersService } from './../../services/users.service';
import { resolve } from 'url';
import { TokenService } from '../../services/token.service';
import io from 'socket.io-client';

const URL = 'http://ec2-18-231-197-224.sa-east-1.compute.amazonaws.com/api/chatapp/upload-image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url : URL,
    disableMultipart: true
  });
  user: any;
  selectedFile : any;
  images = [];

  socket: any;

  constructor(private usersService : UsersService, private tokenService: TokenService) {
      this.socket = io('http://ec2-18-231-197-224.sa-east-1.compute.amazonaws.com/');
  }

  ngOnInit() {
    this.user = this.tokenService.GetPayLoad();
    this.GetUser();

    this.socket.on('refreshPage' , () => {
        this.GetUser();
    });
  }

  GetUser(){
    this.usersService.GetUserById(this.user._id).subscribe(data => {
        this.images = data.result.images;
      },
        err => console.log(err)
    );
  }

  OnFileSelected(event){
    const file: File = event[0];

    this.ReadAsBase64(file).then(result => {
        this.selectedFile = result;
    }).catch(err => console.log(err));
  }

  Upload(){
      if(this.selectedFile){
          this.usersService.AddImage(this.selectedFile).subscribe(data => {

              this.socket.emit('refresh', {} );

              const filePath = <HTMLInputElement>document.getElementById('filePath');
              filePath.value = '';
          },
            err => {

              console.log(err);
            });
      }
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

  SetProfileImage(image){
    this.usersService.SetDefaultImage(image.imgId, image.imgVersion).subscribe(data => {
        this.socket.emit('refresh' , {});
    }, err=> console.log(err));
  }

}
