import { Router } from '@angular/router';
import { LoginModalsComponent } from './../../modals/login-modals/login-modals.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  user: any;
  productDetail: any = {
    data: {
      name: "ทดสอบลิปติกแดง",
      price: "120",
      shipingfee: [{
        _id: "001",
        name: "ไปรษณีไทย",
        price: "50"
      }, {
        _id: "002",
        name: "Kerry",
        price: "60"
      }],
      images: [{
        "url": "https://cf.shopee.co.th/file/a1089bef5b9230f470fb9493ace9dbde"
      }, {
        "url": "https://cf.shopee.co.th/file/5587aeb773e8633236061880e481279a"
      }, {
        "url": "https://cf.shopee.co.th/file/d93b05570158112438f4544fd0cea81a"
      }],
      type: [{
        name: "สีชมพู"
      }, {
        name: "สีน้ำเงิน"
      }, {
        name: "สีแดง"
      }, {
        name: "สีเขียว"
      }]

    }
  };

  selectedType: any = {
    name: ""
  };

  selection: any = {
    _id: ""
  };

  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('@user'));
    console.log('loguser' + this.user);
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
        // this.animal = result;
      });
    } else {
      this.router.navigate(['/cart']);
    }

  }

  selectType(item) {
    this.selectedType = item;
    console.log(this.selection)
    console.log(this.selectedType);
  };

}

