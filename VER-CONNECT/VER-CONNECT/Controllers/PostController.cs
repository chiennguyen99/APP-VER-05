using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http.Description;
using System.Web.Mvc;
using VER_CONNECT.Models;
using Microsoft.AspNet.Identity;

namespace VER_CONNECT.Controllers
{
    public class PostController : Controller
    {
        private manageremployeeEntities db = new manageremployeeEntities();
       
        [HttpPost]
        public ActionResult Postdata(Pushblog imageModel)
        {
            string title = imageModel.Title;
            string textContent = imageModel.textContent;

            if (title != null && textContent != null)
            {
                DateTime myDateTime = DateTime.Now;

                String userID = User.Identity.GetUserId();

                String userName = User.Identity.GetUserName();

                string path = "";


                // handling Image
                if (imageModel.ImageFile != null)
                {
                    string fileName = Path.GetFileNameWithoutExtension(imageModel.ImageFile.FileName);
                    string extension = Path.GetExtension(imageModel.ImageFile.FileName);

                    fileName = userID + DateTime.Now.ToString("HH_mm_ss") + extension;
                    path = "/Image/blogs/" + fileName;
                    imageModel.ImagePath = "~/Image/blogs/" + fileName;
                    fileName = Path.Combine(Server.MapPath("~/Image/blogs/"), fileName);
                    imageModel.ImageFile.SaveAs(fileName);
                }
                // save to database

                //bool exists = db.blogs.Any(x => x.blogTitle == title);
                blog checkblog = db.blogs.FirstOrDefault(x => x.blogTitle == title && x.employeeID == userID);
                int blogID;
                // save to blogs when don't exists. 
                if (checkblog == null)
                {
                    blog bloga = new blog();
                    bloga.blogTitle = title;
                    bloga.employeeID = userID;
                    bloga.createDate = myDateTime;
                    bloga.ImageURL = "";
                    db.blogs.Add(bloga);
                    db.SaveChanges();
                    blogID = bloga.blogID;
                }
                else
                {
                    blogID = checkblog.blogID;
                }

                blogpost posta = new blogpost();
                posta.blogID = blogID;
                posta.employeeID = userID;
                posta.content = textContent;
                posta.postDate = myDateTime;
                posta.ImageURL = path;
                db.blogposts.Add(posta);
                db.SaveChanges();

                ModelState.Clear();
                var result = new
                {
                    avtUrl = "/Image/anime.jpg",
                    userName = userName,
                    album = title,
                    datetime = myDateTime.ToString(),
                    content = textContent,
                    image = path,
                    postID = posta.postId
                };

                return Json(result);
            }
            return null;    
        }
    }
}