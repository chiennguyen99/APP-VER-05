using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VER_CONNECT.Models;

namespace VER_CONNECT.Controllers.PageNews
{
    public class userpostController : ApiController
    {
        private manageremployeeEntities db = new manageremployeeEntities();
        // load title by employeeID; 
        public string Get(string id)
        {
            var result = (from bg in db.blogs
                          where bg.employeeID == id
                          select new
                          {
                              title = bg.blogTitle
                          });

            var final = result.OrderByDescending(c => c.title);
            string query3 = Newtonsoft.Json.JsonConvert.SerializeObject(final);
            return query3;
        }
    }
}
