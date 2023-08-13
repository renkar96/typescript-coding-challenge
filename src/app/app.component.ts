import { Component } from '@angular/core';
import { SketchfabService } from './sketchfab.service';
import { SketchfabModel } from './sketchfab.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-example';
  modelos!: SketchfabModel;
  categoria!: SketchfabModel;

  constructor(private modelService: SketchfabService) {  }

  ngOnInit(): void {
     //Llamar categorias
     
    this.modelService.getModels().subscribe(models => {
      this.modelos = models
    })
    this.modelService.getCategories().subscribe(categories => {
      this.categoria = categories
    })
    
  }  
}
