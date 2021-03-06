﻿// <auto-generated />
using System;
using DataAnotApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace DataAnotApp.Migrations
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

            modelBuilder.Entity("DataAnotApp.Models.Pessoa", b =>
                {
                    b.Property<int>("Codigo")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("Id");

                    b.Property<DateTime>("DataNasc")
                        .HasColumnName("Birthday")
                        .HasColumnType("DATE");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("VARCHAR(45)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnName("Name")
                        .HasColumnType("VARCHAR(45)");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken();

                    b.Property<decimal>("Salario")
                        .HasColumnName("Salary")
                        .HasColumnType("DECIMAL(12,2)");

                    b.Property<char>("Sexo")
                        .HasColumnName("Gender")
                        .HasColumnType("CHAR(1)");

                    b.HasKey("Codigo");

                    b.ToTable("Person");
                });
#pragma warning restore 612, 618
        }
    }
}
