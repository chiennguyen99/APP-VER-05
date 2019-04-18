using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VER_CONNECT.Models;

namespace APP_FIX.Controllers.News
{
    public class blogpostsController : ApiController
    {
        private manageremployeeEntities db = new manageremployeeEntities();

        public string Get()
        {
            var result = (from bp in db.blogposts
                          join ul in db.userlikes on bp.postId equals ul.postID into ou
                          join em in db.employeedetails on bp.employeeID equals em.employeeID
                          join bl in db.blogs on bp.blogID equals bl.blogID
                          from user in ou.DefaultIfEmpty()
                          select new
                          {
                              idpost = bp.postId,
                              name = em.firstName + em.lastName,
                              avturl = em.avtUrl,

                              contentpost = bp.content,
                              imgpost = bp.ImageURL,
                              postdate = bp.postDate,

                              blogtitle = bl.blogTitle,
                              numlike = ou.Count(),

                          });
            var Optimize = result.DistinctBy(c => c.idpost);
            var final = Optimize.OrderByDescending(c => c.idpost);

            string query3 = Newtonsoft.Json.JsonConvert.SerializeObject(final);
            return query3;
        }
    }
}
