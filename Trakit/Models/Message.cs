using System;

namespace Trakit.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Sender { get; set; }
        public string Content { get; set; }
        public DateTime Timestamp { get; set; }
    }
}
