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
    public class workhistoriesController : ApiController
    {
        private manageremployeeEntities db = new manageremployeeEntities();

        // GET: api/workhistories
        public IQueryable<workhistory> Getworkhistories()
        {
            return db.workhistories;
        }

        // GET: api/workhistories/5
        [ResponseType(typeof(workhistory))]
        public async Task<IHttpActionResult> Getworkhistory(int id)
        {
            workhistory workhistory = await db.workhistories.FindAsync(id);
            if (workhistory == null)
            {
                return NotFound();
            }

            return Ok(workhistory);
        }

        // PUT: api/workhistories/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putworkhistory(int id, workhistory workhistory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != workhistory.idWorkHistory)
            {
                return BadRequest();
            }

            db.Entry(workhistory).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!workhistoryExists(id))
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

        // POST: api/workhistories
        [ResponseType(typeof(workhistory))]
        public async Task<IHttpActionResult> Postworkhistory(workhistory workhistory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.workhistories.Add(workhistory);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = workhistory.idWorkHistory }, workhistory);
        }

        // DELETE: api/workhistories/5
        [ResponseType(typeof(workhistory))]
        public async Task<IHttpActionResult> Deleteworkhistory(int id)
        {
            workhistory workhistory = await db.workhistories.FindAsync(id);
            if (workhistory == null)
            {
                return NotFound();
            }

            db.workhistories.Remove(workhistory);
            await db.SaveChangesAsync();

            return Ok(workhistory);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool workhistoryExists(int id)
        {
            return db.workhistories.Count(e => e.idWorkHistory == id) > 0;
        }
    }
}