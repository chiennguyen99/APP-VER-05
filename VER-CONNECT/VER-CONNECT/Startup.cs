using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(VER_CONNECT.Startup))]
namespace VER_CONNECT
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            // test signalr
            app.MapSignalR();
        }
    }
}
