//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class SpecialInvent
    {
        public int Id { get; set; }
        public int IdVisiter { get; set; }
        public string KindRequest { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<int> CountOfPeople { get; set; }
    
        public virtual Visiters Visiters { get; set; }
    }
}