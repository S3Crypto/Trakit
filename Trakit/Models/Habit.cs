﻿namespace Trakit.Models
{
    public class Habit
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public int Frequency { get; set; }
        public int UserId { get; set; }
        public ApplicationUser User { get; set; }
        public ICollection<HabitCompletion> Completions { get; set; }
        public int TargetCompletionDays { get; set; }
        public int CompletedDays { get; set; }
    }
}
