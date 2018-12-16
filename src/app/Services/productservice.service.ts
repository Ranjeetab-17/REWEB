import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private _http: HttpClient) { }

  GetProduct() {
    var token = sessionStorage.getItem('AuthorizationToken');
    const header = new HttpHeaders().set('AuthorizedToken', "cUJ6eDBDelR5ajNjS3JpbDZ1TTh0UXhWRyttblZreXh5MWk5WUZ2SmIybz06MzpnZXQ6MTgyLjUwLjEzNS4xMTY=");
    return this._http.get('http://api.octainfotech.com/api/invoice/GetInvoiceList', { headers: header });
  }
}
