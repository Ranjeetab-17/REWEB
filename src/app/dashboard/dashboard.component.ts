import { Component, OnInit, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material'
import { ProductserviceService } from '../Services/productservice.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']  
})
export class DashboardComponent implements OnInit {
  position: any;
  userphoto: string;
  products: any;
  user: any;
  mytheme: string;  

  constructor(public snacbars: MatSnackBar, 
              private _productService: ProductserviceService) {

    //localStorage.setItem('currentTheme','light-theme');

    this.position = "left";
    this.userphoto = "http://www.kailashhealthcare.com/UserFiles/Doctor/Default.png";
    this.snacbars.openFromComponent(SnacBarComponent, {
      duration: 5000
    });

    this._productService.GetProduct().subscribe((response) => {
      this.products = response;
      console.log(response);
    })

  }

  ngOnInit() {
    this.mytheme = sessionStorage.getItem("currentTheme");
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 720) {
      return true;
    } else {
      return false;
    }
  }

  @HostListener('onclick')
  SetTheme() {
    alert('it works');
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: './SnacBar.html'
})

export class SnacBarComponent { }
