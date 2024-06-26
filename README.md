Trakit
Welcome to Trakit! This application helps users track their goals and habits while providing a messaging system for communication.

Table of Contents
Features
Installation
Usage
User Messaging
Goal Tracking
Project Structure
Contributing
License
Features

User Messaging: Allows users to send and receive messages.
Goal Tracking: Users can create, update, and delete goals.
Real-time Notifications: Get notified of new messages and updates.
Smooth UI/UX: Modern and intuitive user interface with smooth animations.
Installation
To get started with Trakit, follow these steps:

Prerequisites
.NET SDK (version 6.0 or later)
Node.js (for front-end dependencies if required)
SQL Server or another compatible database.

Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/trakit.git
cd trakit
Set up the database:

Update the appsettings.json file with your database connection string.

Apply migrations to create the database schema:

dotnet ef database update
Install dependencies:

dotnet restore
Run the application:

dotnet run
Open the application:

Visit http://localhost:5000 in your browser.

Usage
User Messaging
Open the Chat Panel:

Click the chat icon at the bottom-right corner to open the chat panel.
The panel slides in with a smooth animation.
Compose a Message:

Click the compose button (pencil icon) to open the message modal.
Select a recipient from the dropdown list and type your message.
Click "Send" to dispatch the message.
View Messages:

Messages are listed in the chat panel. Clicking a message opens it in a modal with full details.
Goal Tracking
View Goals:

Navigate to the "Goals" page to see all your goals.
Goals are displayed with their status and other details.
Add a New Goal:

Click the "Add Goal" button.
Fill in the goal details and save.
Update or Delete Goals:

Click on a goal to edit or delete it.
