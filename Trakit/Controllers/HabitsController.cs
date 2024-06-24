using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using Trakit.Data;
using Trakit.Models;

namespace Trakit.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HabitsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public HabitsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Habits/Complete/5
        [HttpGet("Complete/{id}")]
        public IActionResult Complete(int id)
        {
            var habit = _context.Habits.Find(id);
            if (habit == null)
            {
                return NotFound();
            }

            return View(habit);
        }

        // POST: Habits/Complete/5
        [HttpPost("Complete/{id}")]
        [ValidateAntiForgeryToken]
        public IActionResult CompleteConfirmed(int id)
        {
            var habit = _context.Habits.Find(id);
            if (habit == null)
            {
                return NotFound();
            }

            // Save completion logic here, e.g., add to completions list
            // For illustration purpose, assuming Habit has a Completions property
            habit.Completions.Add(new HabitCompletion { CompletionDate = DateTime.Today });
            _context.Update(habit);
            _context.SaveChanges();

            return RedirectToAction(nameof(Index));
        }

        // GET: Habits/Progress/5
        [HttpGet("Progress/{id}")]
        public IActionResult Progress(int id)
        {
            var habit = _context.Habits.Find(id);
            if (habit == null)
            {
                return NotFound();
            }

            return View(habit);
        }

        // POST: Habits/Progress/5
        [HttpPost("Progress/{id}")]
        [ValidateAntiForgeryToken]
        public IActionResult UpdateProgress(int id, [Bind("Id,Name,Description")] Habit habit)
        {
            if (id != habit.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(habit);
                    _context.SaveChanges();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!HabitExists(habit.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(habit);
        }

        private bool HabitExists(int id)
        {
            return _context.Habits.Any(e => e.Id == id);
        }
    }
}
