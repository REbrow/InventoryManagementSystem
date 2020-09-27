using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InventoryManagementSystem.Entity
{
    public class Warehouse
    {
        [Key]
       public int Id { get; set; }
       public string Name { get; set; }
       public string Address { get; set; }

        [ForeignKey("EmployeeId")]
        public string EmployeeId { get; set; }

        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
    }
}
