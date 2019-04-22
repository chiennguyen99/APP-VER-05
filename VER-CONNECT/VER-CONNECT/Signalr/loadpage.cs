using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
/// <summary>
/// Summary description for RefreshHub
/// </summary>
namespace mytestSignalR
{
    public class EventHub : Hub
    {
        public void broadcastEvent(string avtUrl, string userName, string album, string datetime, string content, string image, int postID)
        {
            var context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
            context.Clients.All.broadcastEvent(avtUrl, userName, album, datetime, content, image, postID);
        }
    }

    public class CommentHub : Hub
    {
        public void broadcastEvent(string idcmt, string postID, string avtURL, string userName, string textContent, string Image, string datetime)
        {
            var context2 = GlobalHost.ConnectionManager.GetHubContext<CommentHub>();
            context2.Clients.All.broadcastEvent(idcmt, postID, avtURL, userName, textContent, Image, datetime);
        }
    }

    public class SecondCommentHub : Hub
    {
        public void broadcastEvent(string idsecondcomment, string commentID, string avtURL, string userName, string textContent, string Image, string datetime)
        {
            var context3 = GlobalHost.ConnectionManager.GetHubContext<SecondCommentHub>();
            context3.Clients.All.broadcastEvent(idsecondcomment, commentID, avtURL, userName, textContent, Image, datetime);
        }
    }
}
