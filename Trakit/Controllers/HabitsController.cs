using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Trakit.Data; // Ensure you are using the correct namespace for your ApplicationDbContext
using Trakit.Models;

namespace Trakit.Controllers
{
    public class HabitsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public HabitsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Example action method
        public async Task<IActionResult> Index()
        {
            var habits = await _context.Habits.ToListAsync();
            return View(habits);
        }

        // Add other action methods as needed
    }
}
