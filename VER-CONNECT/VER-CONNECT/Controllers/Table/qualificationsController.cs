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
    public class qualificationsController : ApiController
    {
        private manageremployeeEntities db = new manageremployeeEntities();

        // GET: api/qualifications
        public IQueryable<qualification> Getqualifications()
        {
            return db.qualifications;
        }

        // GET: api/qualifications/5
        [ResponseType(typeof(qualification))]
        public async Task<IHttpActionResult> Getqualification(int id)
        {
            qualification qualification = await db.qualifications.FindAsync(id);
            if (qualification == null)
            {
                return NotFound();
            }

            return Ok(qualification);
        }

        // PUT: api/qualifications/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putqualification(int id, qualification qualification)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != qualification.idQualification)
            {
                return BadRequest();
            }

            db.Entry(qualification).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!qualificationExists(id))
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

        // POST: api/qualifications
        [ResponseType(typeof(qualification))]
        public async Task<IHttpActionResult> Postqualification(qualification qualification)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.qualifications.Add(qualification);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = qualification.idQualification }, qualification);
        }

        // DELETE: api/qualifications/5
        [ResponseType(typeof(qualification))]
        public async Task<IHttpActionResult> Deletequalification(int id)
        {
            qualification qualification = await db.qualifications.FindAsync(id);
            if (qualification == null)
            {
                return NotFound();
            }

            db.qualifications.Remove(qualification);
            await db.SaveChangesAsync();

            return Ok(qualification);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool qualificationExists(int id)
        {
            return db.qualifications.Count(e => e.idQualification == id) > 0;
        }
    }
}