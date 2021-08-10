import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
  formData = new FormData();
  constructor(private uploadService:UploadService) { }

  ngOnInit(): void {
  }

  importFile(event) {
  if (event.target.files.length == 0) {
      console.log("No file selected!");
      return
  }
    let file: File = event.target.files[0];
    console.log(file);
    this.formData.append("imagen", file);
    this.formData.append("folder", 'usuarios');
  }

  subir() {
    console.log();
    this.uploadService.subirImagen(this.formData).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

}
