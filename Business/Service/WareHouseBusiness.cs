using System;
using System.Collections.Generic;
using Core.Interface;
using InventoryManagementSystem.Entity;

namespace Busness.Service
{
    public class WareHouseBusiness : IWarehouse
    {
        public Warehouse warehouseClass { get; set; }
        public List<Warehouse> WarehouseList = new List<Warehouse>();

        public Warehouse Add(Warehouse warehouse)
        {
            using (var context = new DBContext())
            {
                context.Database.EnsureCreated();
                context.Warehouses.Add(warehouse);

                context.SaveChanges();
            }
            return warehouse;
        }

        public Warehouse Delete(Warehouse warehouse)
        {
            using (var context = new DBContext())
            {
                context.Database.EnsureCreated();
                context.Warehouses.Remove(warehouse);
                context.SaveChanges();
            }
            return warehouse;
        }

        public List<Warehouse> GetAll()
        {
            using (var context = new DBContext())
            {
                context.Database.EnsureCreated();

                foreach (var war in context.Warehouses)
                {
                    WarehouseList.Add(war);
                }
            }
            return WarehouseList;
        }

        public Warehouse GetbyId(int id)
        {
            using (var context = new DBContext())
            {
                context.Database.EnsureCreated();
                warehouseClass = context.Warehouses.Find(id);
            }
            return warehouseClass;
        }

        public Warehouse Update(Warehouse warehouse)
        {
            using (var context = new DBContext())
            {
                context.Database.EnsureCreated();
                context.Warehouses.Update(warehouse);
                context.SaveChanges();
            }
            return warehouse;
        }
    }
}
