using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Trakit.Data;
using Trakit.Models;

namespace Trakit.Controllers
{
    public class GoalsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public GoalsController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var goals = await _context.Goals.ToListAsync();
            return View(goals);
        }

        // Add other action methods as needed, such as Create, Edit, Delete, etc.
    }
}
