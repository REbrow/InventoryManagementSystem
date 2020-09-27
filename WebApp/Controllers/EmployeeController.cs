using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Busness.Service;
using Core.Interface;
using InventoryManagementSystem.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebApp.Controllers
{
    [Produces("application/json")]
    [ApiController]
    [Route("employee")]
    public class EmployeeController : ControllerBase
    {
        readonly IEmployee _employeeBusiness;

        public EmployeeController(IEmployee employeeBusiness)
        {
            _employeeBusiness = employeeBusiness;
        }

        [Route("all")]
        [HttpGet]
        public List<Employee> Get()
        {
            return (_employeeBusiness.GetAll());
        }

        [Route("new")]
        [HttpPost]
        public Employee Create(Employee employee)
        {
            Employee employee1 = new Employee();
            employee1.FullName = employee.FullName;
            employee1.Email = employee.Email;
            employee1.Created = DateTime.Now;
            employee1.Updated = DateTime.Now;
            employee1.UserName = employee.UserName;
            var result = _employeeBusiness.Add(employee1);
            return result;
        }

        [Route("update")]
        [HttpPost]
        public Employee Update(Employee employee)
        {
            Employee employee1 = new Employee();
            employee1.FullName = employee.FullName;
            employee1.Email = employee.Email;
            employee1.Id = employee.Id;
            employee1.Created = employee.Created;
            employee1.Updated = DateTime.Now;
            employee1.UserName = employee.UserName;
            return _employeeBusiness.Update(employee);
        }

        [HttpDelete]
        public Employee Delete(Employee employee)
        {
            return _employeeBusiness.Delete(employee);
        }

        [Route("employee")]
        [HttpGet]
        public Employee GetID(int employee)
        {
            return _employeeBusiness.GetbyId(employee);
        }
    }
}
