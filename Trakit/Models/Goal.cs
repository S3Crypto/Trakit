using System;
namespace Trakit.Models
{
    public class Goal
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime TargetDate { get; set; }
        public int UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}

