using System;
using System.Collections.Generic;
using Core.Interface;
using InventoryManagementSystem.Entity;

namespace Busness.Service
{
    public class EmployeeBusiness : IEmployee
    {
        public Employee employeeClass { get; set; }

        public List<Employee> EmployeeList = new List<Employee>();

        public Employee Add(Employee employee)
       {
            using (var context = new DBContext())
            {
                context.Database.EnsureCreated();
                context.Employees.Add(employee);

                context.SaveChanges();
            }
            return employee;
       }

        public Employee Delete(Employee employee)
        {
            using(var context = new DBContext())
            {
                context.Database.EnsureCreated();
                context.Employees.Remove(employee);
                context.SaveChanges();
            }
            return employee;
        }

        public Employee Update(Employee employee)
        {
           using(var context = new DBContext())
            {
                context.Database.EnsureCreated();
                context.Employees.Update(employee);
                context.SaveChanges();
            }
            return employee;
        }

        public List<Employee> GetAll()
        {
            using(var context = new DBContext())
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                foreach(var emp in context.Employees)
                {
                    EmployeeList.Add(emp);
                }
            }
           return EmployeeList;
        }

        public Employee GetbyId(int id)
        {
            using(var context = new DBContext())
            {
                context.Database.EnsureCreated();
                employeeClass = context.Employees.Find(id);
            }
            return employeeClass;
        }
    }
}
