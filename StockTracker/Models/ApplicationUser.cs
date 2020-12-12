using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockTracker.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser() : base() { }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime AccountRegisterDate { get; set; }
        public IEnumerable<string> FavoriteStocks { get; set; }
    }
}
