using Lupi.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Lupi.WebApi.Controllers
{
    public class PetController : ApiController
    {
        private static List<Pet> pets = new List<Pet>()
        {
            new Pet(1,"Bobby",4,"Grande", DateTime.Now,20,"Golden Retriever", 3f, "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Golden_Retriever_with_tennis_ball.jpg/1200px-Golden_Retriever_with_tennis_ball.jpg"),
            new Pet(2,"Diana",4,"Mediana", DateTime.Now.AddDays(100),10,"Perro", 4f, "https://www.mundoperro.net/wp-content/uploads/Perro-de-la-raza-Dachshund.jpg"),
            new Pet(3,"Lupita",4,"Chica", DateTime.Today.AddDays(299), 2.5f,"Perro", 5f, "https://www.mundoperro.net/wp-content/uploads/bichon-frise.jpg"),
        };

        public IHttpActionResult Get()
        {
            return Ok(pets);
        }

        public IHttpActionResult Post(Pet pet)
        {
            pets.Add(pet);
            return Ok();
        }
    }
}
