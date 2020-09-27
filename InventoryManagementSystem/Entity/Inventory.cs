using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InventoryManagementSystem.Entity
{
    public class Inventory
    {
        [Key]
        public int Id { get; set;}
        public string ItemName { get; set; }
        public string ItemDescription { get; set; }

        [ForeignKey("WareHouseId")]
        public int WareHouseId { get; set; }

        [ForeignKey("EmployeeId")]
        public int EmployeeId { get; set; }

        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
    }
}
