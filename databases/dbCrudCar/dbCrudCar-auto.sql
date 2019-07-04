--
-- File generated with SQLiteStudio v3.1.1 on sex abr 7 01:35:00 2017
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: CAR
DROP TABLE IF EXISTS CAR;

CREATE TABLE CAR (
    ID          INTEGER         NOT NULL,
    CUSTOMER_ID INTEGER         NOT NULL,
    MODEL       VARCHAR (100)   NOT NULL,
    PLATE       VARCHAR (7)     NOT NULL,
    YEAR        INTEGER         NOT NULL,
    MARKETVAL   DECIMAL (12, 2) NOT NULL,
    CONSTRAINT PK_CAR PRIMARY KEY (
        ID
    ),
    CONSTRAINT FK_CAR_CUSTOMER FOREIGN KEY (
        CUSTOMER_ID
    )
    REFERENCES CUSTOMER (ID),
    CONSTRAINT UNQ_PLATE_CAR UNIQUE (
        PLATE
    ),
    CONSTRAINT CHK_YEAR_CAR CHECK (YEAR >= 1769 AND 
                                   YEAR <= strftime('%Y', date('now', '+1 year') ) ),
    CONSTRAINT CHK_MARKETVAL_CUSTOMER CHECK (MARKETVAL >= 0) 
);


-- Table: CUSTOMER
DROP TABLE IF EXISTS CUSTOMER;

CREATE TABLE CUSTOMER (
    ID       INTEGER         NOT NULL,
    NAME     VARCHAR (100)   NOT NULL,
    EMAIL    VARCHAR (100)   NOT NULL,
    BIRTHDAY DATE            NOT NULL,
    SALARY   DECIMAL (12, 2) NOT NULL,
    GENDER   CHAR (1)        NOT NULL,
    CONSTRAINT PK_CUSTOMER PRIMARY KEY (
        ID
    ),
    CONSTRAINT UNQ_EMAIL_CUSTOMER UNIQUE (
        EMAIL
    ),
    CONSTRAINT CHK_BIRTHDAY_CUSTOMER CHECK (BIRTHDAY <= date('now', '-18 year') ),
    CONSTRAINT CHK_SALARY_CUSTOMER CHECK (SALARY >= 0),
    CONSTRAINT CHK_GENDER_CUSTOMER CHECK (GENDER = 'M' OR 
                                          GENDER = 'F') 
);


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
