﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace VER_CONNECT.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class manageremployeeEntities : DbContext
    {
        public manageremployeeEntities()
            : base("name=manageremployeeEntities")
        {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AspNetRole> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        public virtual DbSet<blogpost> blogposts { get; set; }
        public virtual DbSet<blog> blogs { get; set; }
        public virtual DbSet<comment> comments { get; set; }
        public virtual DbSet<contactemployeeinfo> contactemployeeinfoes { get; set; }
        public virtual DbSet<employeedetail> employeedetails { get; set; }
        public virtual DbSet<qualification> qualifications { get; set; }
        public virtual DbSet<salaryinfo> salaryinfoes { get; set; }
        public virtual DbSet<secondcomment> secondcomments { get; set; }
        public virtual DbSet<timeinfo> timeinfoes { get; set; }
        public virtual DbSet<userlike> userlikes { get; set; }
        public virtual DbSet<workhistory> workhistories { get; set; }
    }
}
