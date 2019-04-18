using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using VER_CONNECT.Models;

namespace VER_CONNECT.Controllers.Table
{
    public class timeinfoesController : ApiController
    {
        private manageremployeeEntities db = new manageremployeeEntities();

        // GET: api/timeinfoes
        public IQueryable<timeinfo> Gettimeinfoes()
        {
            return db.timeinfoes;
        }

        // GET: api/timeinfoes/5
        [ResponseType(typeof(timeinfo))]
        public async Task<IHttpActionResult> Gettimeinfo(int id)
        {
            timeinfo timeinfo = await db.timeinfoes.FindAsync(id);
            if (timeinfo == null)
            {
                return NotFound();
            }

            return Ok(timeinfo);
        }

        // PUT: api/timeinfoes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Puttimeinfo(int id, timeinfo timeinfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != timeinfo.idTime)
            {
                return BadRequest();
            }

            db.Entry(timeinfo).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!timeinfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/timeinfoes
        [ResponseType(typeof(timeinfo))]
        public async Task<IHttpActionResult> Posttimeinfo(timeinfo timeinfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.timeinfoes.Add(timeinfo);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = timeinfo.idTime }, timeinfo);
        }

        // DELETE: api/timeinfoes/5
        [ResponseType(typeof(timeinfo))]
        public async Task<IHttpActionResult> Deletetimeinfo(int id)
        {
            timeinfo timeinfo = await db.timeinfoes.FindAsync(id);
            if (timeinfo == null)
            {
                return NotFound();
            }

            db.timeinfoes.Remove(timeinfo);
            await db.SaveChangesAsync();

            return Ok(timeinfo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool timeinfoExists(int id)
        {
            return db.timeinfoes.Count(e => e.idTime == id) > 0;
        }
    }
}