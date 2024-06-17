using Microsoft.EntityFrameworkCore;

namespace Trakit.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // DbSet properties representing your entities
        // public DbSet<YourEntity> YourEntities { get; set; }

        // Example entity:
        // public DbSet<User> Users { get; set; }
    }
}
