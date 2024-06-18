namespace Trakit.Models
{
    public class HabitCompletion
    {
        public int Id { get; set; }
        public int HabitId { get; set; }
        public Habit Habit { get; set; }
        public DateTime CompletionDate { get; set; } // The date the habit was completed
    }
}

