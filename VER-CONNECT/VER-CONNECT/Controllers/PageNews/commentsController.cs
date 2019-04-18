using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VER_CONNECT.Models;

namespace APP_FIX.Controllers.News
{
    public class commentsController : ApiController
    {
        private manageremployeeEntities db = new manageremployeeEntities();


        public string Get(int id)
        {

            var result = (from cm in db.comments
                          where cm.postId == id
                          join ed in db.employeedetails on cm.employeeID equals ed.employeeID
                          select new
                          {
                              avtURL = ed.avtUrl,
                              name = ed.firstName + ed.lastName,

                              idcmt = cm.commentID,
                              text = cm.content,
                              img = cm.ImageURL,
                              time = cm.cmtTime,

                          }).ToList();
            string query3 = Newtonsoft.Json.JsonConvert.SerializeObject(result);
            return query3;
        }
    }
}
