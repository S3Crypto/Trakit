using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Trakit.Migrations
{
    /// <inheritdoc />
    public partial class AddHabitCompletion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Date",
                table: "HabitCompletion",
                newName: "CompletionDate");

            migrationBuilder.AddColumn<int>(
                name: "CompletedDays",
                table: "Habits",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TargetCompletionDays",
                table: "Habits",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompletedDays",
                table: "Habits");

            migrationBuilder.DropColumn(
                name: "TargetCompletionDays",
                table: "Habits");

            migrationBuilder.RenameColumn(
                name: "CompletionDate",
                table: "HabitCompletion",
                newName: "Date");
        }
    }
}
