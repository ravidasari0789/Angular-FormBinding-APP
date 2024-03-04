import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Customer } from './customer';
import { CustomerserviceService } from './customerservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formsubmition';


  customer:Customer=new Customer("","","");
  customers:Customer[]=[];
  constructor(private customerservice:CustomerserviceService){}
  saveCustomer(){
        console.log(this.customer)
        this.customerservice.printmeg();
        this.customers.push(this.customer);
        this.customer=new Customer("","","");

  }
  delete(){
    this.customers.pop();
  }

}
