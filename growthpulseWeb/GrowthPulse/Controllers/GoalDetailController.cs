using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GrowthPulse.Models;

namespace GrowthPulse.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GoalDetailController : ControllerBase
    {
        private readonly GoalDetailContext _context;

        public GoalDetailController(GoalDetailContext context)
        {
            _context = context;
        }

        // GET: api/GoalDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GoalDetail>>> GetGoalDetails()
        {
          if (_context.GoalDetails == null)
          {
              return NotFound();
          }
            return await _context.GoalDetails.ToListAsync();
        }

        // GET: api/GoalDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GoalDetail>> GetGoalDetail(int id)
        {
          if (_context.GoalDetails == null)
          {
              return NotFound();
          }
            var goalDetail = await _context.GoalDetails.FindAsync(id);

            if (goalDetail == null)
            {
                return NotFound();
            }

            return goalDetail;
        }

        // PUT: api/GoalDetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGoalDetail(int id, GoalDetail goalDetail)
        {
            if (id != goalDetail.GoalDetailId)
            {
                return BadRequest();
            }

            _context.Entry(goalDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GoalDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(await _context.GoalDetails.ToListAsync());
        }

        // POST: api/GoalDetail
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<GoalDetail>> PostGoalDetail(GoalDetail goalDetail)
        {
          if (_context.GoalDetails == null)
          {
              return Problem("Entity set 'GoalDetailContext.GoalDetails'  is null.");
          }
            _context.GoalDetails.Add(goalDetail);
            await _context.SaveChangesAsync();

            return Ok(await _context.GoalDetails.ToListAsync());
        }

        // DELETE: api/GoalDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGoalDetail(int id)
        {
            if (_context.GoalDetails == null)
            {
                return NotFound();
            }
            var goalDetail = await _context.GoalDetails.FindAsync(id);
            if (goalDetail == null)
            {
                return NotFound();
            }

            _context.GoalDetails.Remove(goalDetail);
            await _context.SaveChangesAsync();

            return Ok(await _context.GoalDetails.ToListAsync()); ;
        }

        private bool GoalDetailExists(int id)
        {
            return (_context.GoalDetails?.Any(e => e.GoalDetailId == id)).GetValueOrDefault();
        }
    }
}
