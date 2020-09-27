using System;
using System.Collections.Generic;
using InventoryManagementSystem.Entity;

namespace Core.Interface
{
    public interface IWarehouse
    {
        Warehouse Add(Warehouse warehouse);
        List<Warehouse> GetAll();
        Warehouse GetbyId(int id);
        Warehouse Update(Warehouse warehouse);
        Warehouse Delete(Warehouse warehouse);
    }
}
