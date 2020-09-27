using System;
using System.Collections.Generic;
using Core.Interface;
using InventoryManagementSystem.Entity;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    [Produces("application/json")]
    [ApiController]
    [Route("warehouse")]
    public class WarehouseController: ControllerBase
    {
        readonly IWarehouse _warehouse;

        public WarehouseController(IWarehouse warehouse)
        {
            _warehouse = warehouse;
        }

        [Route("all")]
        [HttpGet]
        public List<Warehouse> GetAll()
        {
            return _warehouse.GetAll();
        }

        [Route("new")]
        [HttpPost]
        public Warehouse Create(Warehouse warehouse)
        {
            Warehouse warehouse1 = new Warehouse();
            warehouse1.Name = warehouse.Name;
            warehouse1.Address = warehouse.Address;
            warehouse1.EmployeeId = warehouse.EmployeeId;
            warehouse1.Created = DateTime.Now;
            warehouse1.Updated = DateTime.Now;
            return _warehouse.Add(warehouse1);
        }

        [Route("update")]
        [HttpPost]
        public Warehouse Update(Warehouse warehouse)
        {
            Warehouse warehouse1 = new Warehouse();
            warehouse1.Name = warehouse.Name;
            warehouse1.Address = warehouse.Address;
            warehouse1.EmployeeId = warehouse.EmployeeId;
            warehouse1.Created = warehouse.Created;
            warehouse1.Updated = DateTime.Now;
            warehouse1.Id = warehouse.Id;
            return _warehouse.Update(warehouse1);
        }

        [Route("delete")]
        [HttpPost]
        public Warehouse Delete (Warehouse warehouse)
        {
            return _warehouse.Delete(warehouse);
        }

        [Route("warehouse")]
        [HttpDelete]
        public Warehouse GetId(Warehouse warehouse)
        {
            return _warehouse.GetbyId(warehouse.Id);
        }

    }
}
