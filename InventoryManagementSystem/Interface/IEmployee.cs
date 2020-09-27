using System;
using System.Collections.Generic;
using InventoryManagementSystem.Entity;

namespace Core.Interface
{
    public interface IEmployee
    {
        List<Employee> GetAll();
        Employee GetbyId(int id);
        Employee Add(Employee employee);
        Employee Update(Employee employee);
        Employee Delete(Employee employee);
    }
}
