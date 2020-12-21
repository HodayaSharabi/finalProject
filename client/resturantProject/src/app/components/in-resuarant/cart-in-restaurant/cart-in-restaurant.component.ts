import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InRestaurantService } from 'src/app/shared/services/in-restaurant.service';
import { DialogForInventComponent } from '../dialog-for-invent/dialog-for-invent.component';

@Component({
  selector: 'app-cart-in-restaurant',
  templateUrl: './cart-in-restaurant.component.html',
  styleUrls: ['./cart-in-restaurant.component.css']
})
export class CartInRestaurantComponent implements OnInit {
  itemsInCart: any=[];
  numInvent: string;
  Totalprice: number=0;
  doneInvent: any;
  isAcceptance: boolean;

  constructor(public inRestaurant: InRestaurantService, public dialog: MatDialog,public router:Router) { }

  ngOnInit(): void {
    this.itemsInCart = this.inRestaurant.fullCart;
    this.Totalprice =this.inRestaurant.Totalprice;
    console.log(this.itemsInCart);
    this.numInvent = localStorage.getItem("numTable")
  }
  addInventInRes() {
    const dialogRef = this.dialog.open(DialogForInventComponent, {
      data: { price: this.Totalprice }
    });
    dialogRef.afterClosed().subscribe(res=>{
      this.saveInvent();
    })
  }
  saveInvent(){
    this.doneInvent=this.itemsInCart;
    console.log(this.doneInvent);
    this.itemsInCart=[];    
    this.isAcceptance=true;
  }
  openDialogRemoveInRes(i, index) {

  }
  addProductInRes(item) {
    item.amount++;
    console.log(this.itemsInCart);
    this.Totalprice+=item.price;
    
  }
  lessProductInRes(item) {
    if (item.amount > 1) {
      item.amount--;
      this.Totalprice-=item.price;
      
    }
  }
  setPayment(){
    this.router.navigate(['/paymentInRes']);
  }
  isOpen(){
    if(this.itemsInCart==[])
    return false
    else return true;
  }
 
}
