using Microsoft.EntityFrameworkCore;
namespace GrowthPulse.Models
{
    public class GoalDetailContext : DbContext
    {
        public GoalDetailContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<GoalDetail> GoalDetails { get; set; }
    }
}
