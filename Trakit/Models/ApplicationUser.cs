using Microsoft.AspNetCore.Identity;
namespace Trakit.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ICollection<Habit> Habits { get; set; }
        public ICollection<Goal> Goals { get; set; }
    }
}