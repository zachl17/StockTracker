using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServiceStack;
using StockTracker.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StockTracker.Controllers
{
    public class StockController : Controller
    {
        const string testApiKey = "Tpk_4059c0cbd9b94e0ab33019b5daf7d8ba";
        public IActionResult Index()
        {
            return View();
        }
        public PartialViewResult ChartView()
        {
            return PartialView("_ChartPartial");
        }
    }
}
