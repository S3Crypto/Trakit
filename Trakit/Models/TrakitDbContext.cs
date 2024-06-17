using System;
using Microsoft.EntityFrameworkCore;

namespace Trakit.Models
{
    public class TrakitDbContext //: IdentityDbContext<ApplicationUser>
    {
        public DbSet<Habit> Habits { get; set; }
        public DbSet<Goal> Goals { get; set; }
        public DbSet<HabitCompletion> HabitCompletions { get; set; }

        public TrakitDbContext()//DbContextOptions<TrakitDbContext> options)
            //: base(options)
        {
        }
    }
}

