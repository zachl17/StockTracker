using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockTracker.Models
{
    public class StockDataModel
    {
        [JsonProperty("symbol")]
        public string Symbol { get; set; }
        [JsonProperty("exchange")]
        public string Exchange { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        //public DateTime Timestamp { get; set; }
        //public decimal Open { get; set; }
        //public decimal Close { get; set; }
        //public decimal High { get; set; }
        //public decimal Low { get; set; }
        //public decimal Volume { get; set; }
    }
}
