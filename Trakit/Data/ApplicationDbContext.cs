using Microsoft.EntityFrameworkCore;
using Trakit.Models;

namespace Trakit.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Habit> Habit { get; set; } = default!;
        public DbSet<Goal> Goal { get; set; } = default!;

        // DbSet properties representing your entities
        // public DbSet<YourEntity> YourEntities { get; set; }

        // Example entity:
        // public DbSet<User> Users { get; set; }
    }
}
