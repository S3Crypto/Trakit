using System;

namespace Trakit.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string SenderId { get; set; }
        public string MessageContent { get; set; }
        public DateTime Timestamp { get; set; }
    }
}
