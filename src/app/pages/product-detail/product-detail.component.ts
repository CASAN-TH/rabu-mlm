import { Router } from '@angular/router';
import { LoginModalsComponent } from './../../modals/login-modals/login-modals.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  loadData: any;
  user: any;
  productDetail: any;

  selectedType: any = {
    name: ""
  };

  selection: any = {
    _id: ""
  };

  qty: any = 1;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('@user'));
    console.log('loguser' + this.user);
    this.getDataProduct();
  }

  async getDataProduct(){
    this.productDetail = await this.http.get('../../../assets/jsons/product-detail.json').toPromise();
    // console.log(this.productDetail);
  }

  openDialog(): void {
    if (!this.user) {
      const dialogRef = this.dialog.open(LoginModalsComponent, {
        width: '260px',
        height: '150px',
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.loadData = result;
        if(this.loadData){
          this.ngOnInit();
        }
      });
    } else {
      this.router.navigate(['/cart']);
    }

  }

  selectType(item) {
    this.selectedType = item;
  };

  removeQty(){
    this.qty = Number(this.qty) - 1;
  }

  addQty(){
    this.qty = Number(this.qty) + 1;
  }

  checkSymbol(e) {
    let regEx = new RegExp(/^[0-9]+$/);
    if (!(regEx.test(e.key) || e.key === 'Backspace')) {
      this.qty = this.qty.substring(0, this.qty.length - 1);
    }
  }

}

