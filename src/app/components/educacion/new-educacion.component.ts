import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/Services/image.service';
import { EducacionService } from 'src/app/Services/sEducacion.service';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {

  imageEdu: string;
  cursoEdu: string;
  fechaEdu: string;
  instiEdu: string;
  descrpEdu: string;

  constructor(private educacionS: EducacionService, private router: Router, public imageService: ImageService, private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {    
  }

  onCreate(): void {
      const educacion = new Educacion(this.imageEdu, this.cursoEdu, this.fechaEdu, this.instiEdu, this.descrpEdu);
      this.educacionS.save(educacion).subscribe(
        data => {alert("Educación añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate([''])
      }
    )
  }

  

}
