//import { Component } from '@angular/core';
import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task_20.2';

  menuList:any = [
    {
      name:'Burger',
      price:30,
      img:"./assets/b.webp"
    },
    {
      name:'Dhokla',
      price:20,
      img:"./assets/dhokla.webp"
    },
    {
      name:'Dosa',
      price:30,
      img:"./assets/dosa-1.jpg"
    },
    {
      name:'Kulfi',
      price:70,
      img:"./assets/kulfi.webp"
    },
    {
      name:' Pizza',
      price:99,
      img:"./assets/p.webp"
    },
    {
      name:'Pastry',
      price:50,
      img:"./assets/cake.webp"
    },
    

  ];

  cartList:any =[];
  kitchenList:any =[];
  kitchenTotal:any=[];
  totalCount: any=0;
  total: Number = 0;
  sum: Number = 0;
  name = '';
  price = 0;
  img = "./assets/momos.webp";

 

  billList:any=[];

  ngOnInit(): void {}

  

  selectItem(index:any){
    this.cartList.push(this.menuList[index]);
    this.totalCount =0 
    this.cartList.forEach((element:any) => {
      this.totalCount=this.totalCount+element.price;
    });
    console.log(this.totalCount)
  }

  selectItem_2(){
    this.kitchenList=this.cartList;
    this.sum = this.totalCount;
    this.cartList = []
    this.totalCount = 0 
  }
  
  delete(index:any): void{ 
    this.totalCount = this.totalCount - this.cartList[index].price;
    this.cartList.splice(index, 1)
  
}

submit(){
  let obj1 = {
    img : this.img,
    name : this.name ,
    price : this.price
  }
  this.menuList.push(obj1);
  this.clear();
  console.log(this.menuList);
}

clear(){
  this.name="";
  this.price=0;
}


  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}

