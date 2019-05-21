using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VER_CONNECT.Models;

namespace VER_CONNECT.Controllers
{
    public class PostSecCommentController : Controller
    {
        private manageremployeeEntities db = new manageremployeeEntities();

        [HttpPost]
        public ActionResult Post(Pushseconndcmt data)
        {
            if (data.Contentcmt == null && data.ImageFilecmt == null)
            {
                return null;
            }
            else
            {
                String userID = User.Identity.GetUserId();
                String userName = User.Identity.GetUserName();
                employeedetail ed = db.employeedetails.FirstOrDefault(x => x.employeeID == userID);
                string path = "";
                string textcontent = "";
                DateTime cmtTime = DateTime.Now;

                if (data.ImageFilecmt != null)
                {
                    string fileName = "";
                    string extension = Path.GetExtension(data.ImageFilecmt.FileName);

                    fileName = userID + DateTime.Now.ToString("HH_mm_ss") + extension;
                    path = "/Image/secondcomments/" + fileName;
                    data.ImagePath = "~/Image/secondcomments/" + fileName;
                    fileName = Path.Combine(Server.MapPath("~/Image/secondcomments/"), fileName);
                    data.ImageFilecmt.SaveAs(fileName);
                }

                if (textcontent != null)
                {
                    textcontent = data.Contentcmt;
                }

                secondcomment scomment = new secondcomment();
                scomment.commentID = data.commentID;
                scomment.content = textcontent;
                scomment.employeeIDcmt = userID;
                scomment.cmtTime = cmtTime;
                scomment.ImageURL = path;

                db.secondcomments.Add(scomment);
                db.SaveChanges(); 
                ModelState.Clear();

                var result = new
                {
                    idsecondcomment = scomment.secondcmt,
                    commentID = data.commentID,
                    avtURL = ed.avtUrl,
                    userName = userName,
                    textContent = textcontent,
                    Image = path,
                    datetime = cmtTime.ToString()
                };
                return Json(result);
            }
        }
    }
}