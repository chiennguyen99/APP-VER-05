using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VER_CONNECT.Models;

namespace APP_FIX.Controllers.News
{
    public class secondcommentsController : ApiController
    {
        private manageremployeeEntities db = new manageremployeeEntities();


        public string Get(int id)
        {

            var result = (from scm in db.secondcomments
                          where scm.commentID == id
                          join ed in db.employeedetails on scm.employeeIDcmt equals ed.employeeID
                          select new
                          {
                              avtURL = ed.avtUrl,
                              name = ed.firstName + ed.lastName,

                              idcmt = scm.secondcmt,
                              text = scm.content,
                              img = scm.ImageURL,
                              time = scm.cmtTime,

                          }).ToList();
            string query3 = Newtonsoft.Json.JsonConvert.SerializeObject(result);
            return query3;
        }
    }
}
