using System;
using System.Collections.Generic;
using Core.Interface;
using InventoryManagementSystem.Entity;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    [Produces("application/json")]
    [ApiController]
    [Route("stock")]
    public class InventoryController : ControllerBase
    {
        readonly IInventory _inventory;

        public InventoryController(IInventory inventory)
        {
            _inventory = inventory;
        }

        [Route("all")]
        [HttpGet]
        public List<Inventory> GetAll()
        {
            var result = _inventory.GetAll();
            return result;
        }

        [Route("new")]
        [HttpPost]
        public Inventory Create(Inventory inventory)
        {
            Inventory inventory1 = new Inventory();
            inventory1.ItemName = inventory.ItemName;
            inventory1.ItemDescription = inventory.ItemDescription;
            inventory1.WareHouseId = inventory.WareHouseId;
            inventory1.EmployeeId = inventory.EmployeeId;
            inventory1.Created = DateTime.Now;
            inventory1.Updated = DateTime.Now;
            return _inventory.Add(inventory1);
        }

        [Route("update")]
        [HttpPost]
        public Inventory Update(Inventory inventory)
        {
            Inventory inventory1 = new Inventory();
            inventory1.ItemName = inventory.ItemName;
            inventory1.ItemDescription = inventory.ItemDescription;
            inventory1.WareHouseId = inventory.WareHouseId;
            inventory1.EmployeeId = inventory.EmployeeId;
            inventory1.Created = inventory.Created;
            inventory1.Updated = DateTime.Now;
            return _inventory.Update(inventory1);
        }

        [Route("stock")]
        [HttpDelete]
        public Inventory Delete(Inventory inventory)
        {
            return _inventory.Delete(inventory);
        }


    }
}
