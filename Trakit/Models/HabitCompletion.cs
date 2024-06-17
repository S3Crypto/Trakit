namespace Trakit.Models
{
    public class HabitCompletion
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int HabitId { get; set; }
        public Habit Habit { get; set; }
    }
}