using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lupi.WebApi.Models
{
    public class Pet
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Size { get; set; }
        public DateTime BirthDate { get; set; }
        public float Weight { get; set; }
        public string BreedName { get; set; }
        public float Rating { get; set; }

        public string ImageUrl { get; set; }

        public Pet()
        {

        }

        public Pet(int id, string name, int age, string size, DateTime birthday, float weight, string breedName, float rating, string imageUrl)
        {
            Id = id;
            Name = name;
            Age = age;
            Size = size;
            BirthDate = birthday;
            Weight = weight;
            BreedName = breedName;
            ImageUrl = imageUrl;
            Rating = rating;
        }

    }
}