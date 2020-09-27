using System;
using InventoryManagementSystem.Entity;
using Microsoft.EntityFrameworkCore;

namespace Busness
{
    public class DBContext: DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Inventory> Inventories { get; set; }
        public DbSet<Warehouse> Warehouses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=inventory_management.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().ToTable("Employees");
            modelBuilder.Entity<Inventory>().ToTable("Inventories");
            modelBuilder.Entity<Warehouse>().ToTable("Warehouses");

            modelBuilder.Entity<Employee>()
                                .Property(e => e.Id)
                                .ValueGeneratedOnAdd();
            modelBuilder.Entity<Inventory>()
                                .Property(e => e.Id)
                                .ValueGeneratedOnAdd();
            modelBuilder.Entity<Warehouse>()
                                .Property(e => e.Id)
                                .ValueGeneratedOnAdd();
        }

    }
}
