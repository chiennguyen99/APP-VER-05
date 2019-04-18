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
    public class contactemployeeinfoesController : ApiController
    {
        private manageremployeeEntities db = new manageremployeeEntities();

        // GET: api/contactemployeeinfoes
        public IQueryable<contactemployeeinfo> Getcontactemployeeinfoes()
        {
            return db.contactemployeeinfoes;
        }

        // GET: api/contactemployeeinfoes/5
        [ResponseType(typeof(contactemployeeinfo))]
        public async Task<IHttpActionResult> Getcontactemployeeinfo(int id)
        {
            contactemployeeinfo contactemployeeinfo = await db.contactemployeeinfoes.FindAsync(id);
            if (contactemployeeinfo == null)
            {
                return NotFound();
            }

            return Ok(contactemployeeinfo);
        }

        // PUT: api/contactemployeeinfoes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putcontactemployeeinfo(int id, contactemployeeinfo contactemployeeinfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contactemployeeinfo.idContact)
            {
                return BadRequest();
            }

            db.Entry(contactemployeeinfo).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!contactemployeeinfoExists(id))
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

        // POST: api/contactemployeeinfoes
        [ResponseType(typeof(contactemployeeinfo))]
        public async Task<IHttpActionResult> Postcontactemployeeinfo(contactemployeeinfo contactemployeeinfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.contactemployeeinfoes.Add(contactemployeeinfo);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = contactemployeeinfo.idContact }, contactemployeeinfo);
        }

        // DELETE: api/contactemployeeinfoes/5
        [ResponseType(typeof(contactemployeeinfo))]
        public async Task<IHttpActionResult> Deletecontactemployeeinfo(int id)
        {
            contactemployeeinfo contactemployeeinfo = await db.contactemployeeinfoes.FindAsync(id);
            if (contactemployeeinfo == null)
            {
                return NotFound();
            }

            db.contactemployeeinfoes.Remove(contactemployeeinfo);
            await db.SaveChangesAsync();

            return Ok(contactemployeeinfo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool contactemployeeinfoExists(int id)
        {
            return db.contactemployeeinfoes.Count(e => e.idContact == id) > 0;
        }
    }
}