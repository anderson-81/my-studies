﻿// <auto-generated />
using System;
using FluentAPIApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace FluentAPIApp.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("FluentAPIApp.Models.Car", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Model");

                    b.Property<int>("PersonId");

                    b.Property<int>("Year");

                    b.HasKey("Id");

                    b.HasIndex("PersonId");

                    b.ToTable("Car");
                });

            modelBuilder.Entity("FluentAPIApp.Models.Person", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Birthday");

                    b.Property<char>("Gender");

                    b.Property<string>("Name");

                    b.Property<decimal>("Salary");

                    b.HasKey("Id");

                    b.ToTable("Person");
                });

            modelBuilder.Entity("FluentAPIApp.Models.Car", b =>
                {
                    b.HasOne("FluentAPIApp.Models.Person", "Person")
                        .WithMany("Cars")
                        .HasForeignKey("PersonId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
