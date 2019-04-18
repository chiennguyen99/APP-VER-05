using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http.Description;
using System.Web.Mvc;
using VER_CONNECT.Models;
using WorkWithImage.Models;
using Microsoft.AspNet.Identity;

namespace VER_CONNECT.Controllers
{
    public class PostController : Controller
    {
        private manageremployeeEntities db = new manageremployeeEntities();
        // GET: Post
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Postdata(Pushblog imageModel)
        {
            string title = imageModel.Title;

            DateTime myDateTime = DateTime.Now;

            string textContent = imageModel.textContent;

            String userID = User.Identity.GetUserId();

            string fileName = Path.GetFileNameWithoutExtension(imageModel.ImageFile.FileName);

            string extension = Path.GetExtension(imageModel.ImageFile.FileName);

            fileName = userID + DateTime.Now.ToString("HH_mm_ss") + extension;

            string path = "/Image/blogs/" + fileName; 

            imageModel.ImagePath = "~/Image/blogs/" + fileName;

            fileName = Path.Combine(Server.MapPath("~/Image/blogs/"), fileName);

            imageModel.ImageFile.SaveAs(fileName);

            // save to database
     
            //bool exists = db.blogs.Any(x => x.blogTitle == title);
            blog checkblog = db.blogs.FirstOrDefault(x => x.blogTitle == title);
            int blogID = checkblog.blogID; 
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

            blogpost posta = new blogpost();
            posta.blogID = blogID;
            posta.employeeID = userID; 
            posta.content = textContent;
            posta.postDate = myDateTime;
            posta.ImageURL = path;
            db.blogposts.Add(posta);
            db.SaveChanges();
          
            ModelState.Clear();
            var result = "Successfully Added";
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}