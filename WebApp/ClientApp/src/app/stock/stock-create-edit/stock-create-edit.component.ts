import { Component, OnInit } from '@angular/core';
import { RestApi } from '../../Core/Service/RestApi.service';
import { Inventory } from '../../Core/Interface/Inventory';


@Component({
  selector: 'app-stock-create-edit',
  templateUrl: './stock-create-edit.component.html',
  styleUrls: ['./stock-create-edit.component.css']
})
export class StockCreateEditComponent implements OnInit {

  stock: Inventory;
  type: string;

  constructor(private route: ActivatedRoute, private restApi: RestApi) {
    this.type = this.route.snapshot.paramMap.get('id');
    if (this.type !== 'new') {
      this.getId(this.type);
    }
  }

  ngOnInit() {
  }

  getId(id) {
    this.stock.Id = id;
    this.restApi.getStock(this.stock).subscribe(res => {
      this.stock = res;
    })
  }

  create = () => {
    this.restApi.createStock(this.stock).subscribe(res => {
      if (res.errors) {
        alert(res.title);
      }
      console.log(res.title);
    })
  }

  update = () => {
    this.restApi.updateStock(this.stock).subscribe(res => {
      console.log(res);
    })
  }
}
