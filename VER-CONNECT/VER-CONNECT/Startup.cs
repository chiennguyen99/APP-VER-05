using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(VER_CONNECT.Startup))]
namespace VER_CONNECT
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
