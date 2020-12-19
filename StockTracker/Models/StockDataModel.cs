using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockTracker.Models
{
    public class StockDataModel
    {
        //[JsonProperty("symbol")]
        //public string Symbol { get; set; }
        //[JsonProperty("exchange")]
        //public string Exchange { get; set; }

        [JsonProperty("open")]
        public string Open { get; set; }

        [JsonProperty("minute")]
        public string Minute { get; set; }
        //[JsonProperty("name")]
        //public string Name { get; set; }
        //public DateTime Timestamp { get; set; }
        //public decimal Open { get; set; }
        //[JsonProperty("close")]
        //public decimal Close { get; set; }
        //public decimal High { get; set; }
        //public decimal Low { get; set; }
        //public decimal Volume { get; set; }
    }
}
