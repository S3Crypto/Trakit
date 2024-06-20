using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Trakit.Data;
using Trakit.Models;

namespace Trakit.Controllers;

public class HomeController : Controller
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ApplicationDbContext context, ILogger<HomeController> logger)
    {
        _context = context;
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    [HttpGet]
    public JsonResult GetUsers()
    {
        var users = _context.Users.Select(u => new { u.Id, u.UserName }).ToList();
        return Json(users);
    }

}

