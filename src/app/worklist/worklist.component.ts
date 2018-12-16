import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material'
import { ProductserviceService } from '../Services/productservice.service'

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.css']
})
export class WorklistComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['Id', 'Status', 'InvoiceDate', 'CustomerName', 'TotalAmount', 'PaidAmount', 'Action'];
  dataSource: MatTableDataSource<UserData>;
  products: any;

  constructor(private _productService: ProductserviceService) {
    const users: UserData[] = [];    
    //this.dataSource = new MatTableDataSource(users);

    this._productService.GetProduct().subscribe((response) => {
      this.products = response;
      console.log(response);
      this.dataSource = new MatTableDataSource(this.products);
    })
  }

  ngOnInit() {     
      
  }

  ngAfterViewInit() {
    console.log(this.paginator);     
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.dataSource.sort = this.sort;       
  }

  applyFilter(filterValue: string) {     
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}