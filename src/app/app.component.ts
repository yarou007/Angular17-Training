import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'FirstApp';

  public currentRoute : any;
 
  constructor(private router:Router){

  }

  goToProducts(){
    this.currentRoute = "home";
     this.router.navigateByUrl("/products");
  }
  goToHome() {
    this.currentRoute = "products";

    this.router.navigateByUrl("/home");

  }



}
