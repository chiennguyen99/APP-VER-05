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
    public class PostCommentController : Controller
    {
        private manageremployeeEntities db = new manageremployeeEntities();

        [HttpPost]
        public ActionResult Post(Pushcmt data)
        {

            if (data.Contentcmt == null && data.ImageFilecmt == null)
            {
                return null;
            }
            else
            {
                String userID = User.Identity.GetUserId();
                String userName = User.Identity.GetUserName();
                string path = "";
                string textcontent = "";
                DateTime cmtTime = DateTime.Now;

                HttpPostedFileBase check = data.ImageFilecmt; 

                if (data.ImageFilecmt != null)
                {
                    string fileName = "";
                    string extension = Path.GetExtension(data.ImageFilecmt.FileName);

                    fileName = userID + DateTime.Now.ToString("HH_mm_ss") + extension;
                    path = "/Image/comments/" + fileName;
                    data.ImagePath = "~/Image/comments/" + fileName;
                    fileName = Path.Combine(Server.MapPath("~/Image/comments/"), fileName);
                    data.ImageFilecmt.SaveAs(fileName);
                }

                if (textcontent != null)
                {
                    textcontent = data.Contentcmt;
                }

                comment cmt = new comment();
                employeedetail ed = db.employeedetails.FirstOrDefault(x => x.employeeID == userID);

                cmt.employeeID = userID;
                cmt.postId = data.postID;
                cmt.content = textcontent;
                cmt.ImageURL = path;
                cmt.cmtTime = cmtTime;

                db.comments.Add(cmt);
                db.SaveChanges();

                ModelState.Clear();
                var result = new
                {
                    idcmt = cmt.commentID, 
                    postID = data.postID,
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