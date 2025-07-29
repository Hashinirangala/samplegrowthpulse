using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace GrowthPulse.Models
{
    public class GoalDetail
    {
        [Key]
        public int GoalDetailId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string GoalOwnerEmail { get; set; } = "";
        [Column(TypeName = "nvarchar(100)")]
        public string GoalName { get; set; } = "";
        [Column(TypeName = "nvarchar(5)")]
        public string GoalSetDate { get; set; } = "";
    }
}
