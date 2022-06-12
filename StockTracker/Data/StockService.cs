using Newtonsoft.Json;
using StockTracker.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace StockTracker.Data
{
    public class StockService
    {
        private readonly IHttpClientFactory _clientFactory;
        public StockService(IHttpClientFactory httpClientFactory) =>
        _clientFactory = httpClientFactory;

        private string baseAddress = "https://sandbox.iexapis.com/stable/";
        private string token = "?token=Tpk_4059c0cbd9b94e0ab33019b5daf7d8ba";

        private List<StockModel> todaysNews = new List<StockModel>();
        private List<StockModel> stockSymbolList = new List<StockModel>();
        private StockModel[] stockChartPlotPoints = new StockModel[] { };
        public async Task<List<StockModel>> GetStockSymbols()
        {
            var request = new HttpRequestMessage(HttpMethod.Get,
            $@"{baseAddress}ref-data/symbols/{token}");
            var client = _clientFactory.CreateClient();

            HttpResponseMessage response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                stockSymbolList = await response.Content.ReadFromJsonAsync<List<StockModel>>();
            }
            return stockSymbolList;
        }

        public async Task<List<StockModel>> GetTodaysNews()
        {
            var request = new HttpRequestMessage(HttpMethod.Get,
            $@"{baseAddress}time-series/news/{token}");
            var client = _clientFactory.CreateClient();

            HttpResponseMessage response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                todaysNews = await response.Content.ReadFromJsonAsync<List<StockModel>>();
            }
            return todaysNews;
        }
        public async Task<StockModel[]> GetSymbolChart(string symbol)
        {
            var request = new HttpRequestMessage(HttpMethod.Get,
            $@"{baseAddress}stock/{symbol}/chart/max/{token}");
            var client = _clientFactory.CreateClient();

            HttpResponseMessage response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var contentStream = await response.Content.ReadAsStreamAsync();

                using var streamReader = new StreamReader(contentStream);
                using var jsonReader = new JsonTextReader(streamReader);

                JsonSerializer serializer = new JsonSerializer();
                stockChartPlotPoints = serializer.Deserialize<StockModel[]>(jsonReader);
            }
            return stockChartPlotPoints;
        }
    }
}
