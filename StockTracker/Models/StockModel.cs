using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockTracker.Models
{
    public class StockModel
    {
        public string Symbol { get; set; }

        public string Headline { get; set; }
        public string Summary { get; set; }
    }
}
