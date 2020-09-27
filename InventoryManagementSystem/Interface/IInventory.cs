using System;
using System.Collections.Generic;
using InventoryManagementSystem.Entity;

namespace Core.Interface
{
    public interface IInventory
    {
        List<Inventory> GetAll();
        Inventory GetbyId(int id);
        Inventory Add(Inventory inventory);
        Inventory Update(Inventory inventory);
        Inventory Delete(Inventory inventory);
    }
}
