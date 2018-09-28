using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using blogAPI.DataContexts;
using blogAPI.Models;
using System.Web.Http.Cors;

namespace blogAPI.Controllers
{
    //Linha extra sobre Cors:
    //Cors => Cross-origin resource sharing (CORS)(ou compartilhamento de recursos de origem cruzada) 
    //é uma especificação de uma tecnologia de navegadores que define meios para um servidor permitir 
    //que seus recursos sejam acessados por uma página web de um domínio diferente.
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    [RoutePrefix("api/v1/public")] //Versionamento da API pelas rotas.
    public class PostController : ApiController
    {
        private BlogDataContext db = new BlogDataContext();

        /*
        // GET: api/Post
        public IQueryable<Post> GetPosts()
        {
            //Carregando o author sob demanda (não automaticamente).
            return db.Posts.Include("Author");
        }

        // GET: api/Post/5
        [ResponseType(typeof(Post))]
        public IHttpActionResult GetPost(int id)
        {
            Post post = db.Posts.Find(id);
            if (post == null)
            {
                return NotFound();
            }

            return Ok(post);
        }

        // PUT: api/Post/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPost(int id, Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != post.Id)
            {
                return BadRequest();
            }

            db.Entry(post).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Post
        [ResponseType(typeof(Post))]
        public IHttpActionResult PostPost(Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Posts.Add(post);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = post.Id }, post);
        }

        // DELETE: api/Post/5
        [ResponseType(typeof(Post))]
        public IHttpActionResult DeletePost(int id)
        {
            Post post = db.Posts.Find(id);
            if (post == null)
            {
                return NotFound();
            }

            db.Posts.Remove(post);
            db.SaveChanges();

            return Ok(post);
        }

        private bool PostExists(int id)
        {
            return db.Posts.Count(e => e.Id == id) > 0;
        }
        */

        /**************************************/
        /*Alterando o Código do PostController*/
        /**************************************/

        //Padronizando respostas.
        //Padronizando as rotas do projeto (ou modificando).


        //Listando as postagens
        [Route("posts")]
        public HttpResponseMessage GetPosts()
        {
            var result = db.Posts.Include("Author").ToList();
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        //Listando de Authors.
        [Route("authors")]
        public HttpResponseMessage GetAuthors()
        {
            var result = db.Authors.ToList();
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }


        //Listando as postagem de um Author.
        [Route("authors/{authorId}/posts")]
        public HttpResponseMessage GetPostsByAuthor(int authorId)
        {
            var result = db.Posts.Include("Author").Where(p => p.Author.Id == authorId).ToList();
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        //Criar postagem.
        [HttpPost]
        [Route("posts")]
        public HttpResponseMessage CreatePost(Post post)
        {
            if (post == null)
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            try
            {
                db.Posts.Add(post);
                db.SaveChanges();
                var result = post;
                return Request.CreateResponse(HttpStatusCode.OK, result);
            }
            catch (Exception)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        //Criar postagem.
        [HttpPut]
        [Route("posts")]
        public HttpResponseMessage EditPost(Post post)
        {
            if (post == null)
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            try
            {
                db.Posts.Add(post);
                db.SaveChanges();
                var result = post;
                return Request.CreateResponse(HttpStatusCode.OK, result);
            }
            catch (Exception)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, "Error to create post.");
            }
        }

        //Criar postagem.
        [HttpDelete]
        [Route("posts")]
        public HttpResponseMessage DeletePost(Post post)
        {
            if (post == null)
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            try
            {
                db.Posts.Add(post);
                db.Database.Delete();
                var result = post;
                return Request.CreateResponse(HttpStatusCode.OK, result);
            }
            catch (Exception)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, "Error to edit post.");
            }
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

    }
}