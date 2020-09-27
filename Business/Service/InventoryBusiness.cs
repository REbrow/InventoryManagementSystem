using System;
using System.Collections.Generic;
using Core.Interface;
using InventoryManagementSystem.Entity;

namespace Busness.Service
{
    public class InventoryBusiness: IInventory 
    {
        public Inventory inventoryClass { get; set; }

        public List<Inventory> InventoryList = new List<Inventory>();

        public Inventory Add(Inventory inventory)
        {
            using (var context = new DBContext())
            {
                context.Database.EnsureCreated();
                context.Inventories.Add(inventory);

                context.SaveChanges();
            }
            return inventory;
        }

        public Inventory Delete(Inventory inventory)
        {
            using (var context = new DBContext())
            {
                context.Database.EnsureCreated();
                context.Inventories.Remove(inventory);
                context.SaveChanges();
            }
            return inventory;
        }

        public List<Inventory> GetAll()
        {
            using (var context = new DBContext())
            {
                context.Database.EnsureCreated();

                foreach (var inv in context.Inventories)
                {
                    InventoryList.Add(inv);
                }
            }
            return InventoryList;
        }

        public Inventory GetbyId(int id)
        {
            using (var context = new DBContext())
            {
                context.Database.EnsureCreated();
                inventoryClass = context.Inventories.Find(id);
            }
            return inventoryClass;
        }

        public Inventory Update(Inventory inventory)
        {
            using (var context = new DBContext())
            {
                context.Database.EnsureCreated();
                context.Inventories.Update(inventory);
                context.SaveChanges();
            }
            return inventory;
        }
    }
}
