using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace blogAPI.Models
{
    public class Post
    {
        public int Id
        {
            get;
            set;
        }

        public string Title
        {
            get;
            set;
        }

        public string Text
        {
            get;
            set;
        }

        public DateTime dateCreate
        {
            get;
            set;
        }

        public int AuthorId
        {
            get;
            set;
        }

        public virtual Author Author
        {
            get;
            set;
        }
    }
}
