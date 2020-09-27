using System;
using System.ComponentModel.DataAnnotations;

namespace InventoryManagementSystem.Entity
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        public string FullName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
    }
}
