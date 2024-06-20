using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using Trakit.Data;
using Trakit.Hubs;
using Trakit.Models;

namespace Trakit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IHubContext<ChatHub> _hubContext;

        public MessagesController(ApplicationDbContext context, IHubContext<ChatHub> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetMessages(string userId)
        {
            var messages = await _context.Messages.Where(m => m.UserId == userId).ToListAsync();
            return Ok(messages);
        }

        [HttpPost]
        public async Task<IActionResult> SendMessage([FromBody] Message message)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            message.Timestamp = DateTime.UtcNow;
            _context.Messages.Add(message);
            await _context.SaveChangesAsync();

            // Notify connected clients about the new message
            await _hubContext.Clients.User(message.UserId).SendAsync("ReceiveMessage", message);

            return Ok(message);
        }
    }
}
