using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace VER_CONNECT.Models
{
    public class Pushseconndcmt
    {
        public int commentID { get; set; }
        public string Contentcmt { get; set; }
        public string ImagePath { get; set; }
        public HttpPostedFileBase ImageFilecmt { get; set; }
    }
}