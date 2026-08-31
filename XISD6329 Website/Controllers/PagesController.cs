using Microsoft.AspNetCore.Mvc;

namespace XISD6329_Website.Controllers
{
    public class PagesController : Controller
    {
        public IActionResult AboutUs()
        {
            return View();
        }

        public IActionResult Accomodation()
        {
            return View();
        }

        public IActionResult BookingProcess()
        {
            return View();
        }


    }
}
