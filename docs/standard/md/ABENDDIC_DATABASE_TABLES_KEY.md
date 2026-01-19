---
title: "ABENDDIC_DATABASE_TABLES_KEY"
description: |
  ABENDDIC_DATABASE_TABLES_KEY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DATABASE_TABLES_KEY.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_KEY.html"
keywords: ["insert", "do", "if", "class", "data", "types", "ABENDDIC", "DATABASE", "TABLES", "KEY"]
---

At least one table field must be flagged as a [key field](ABENKEY_FIELD_GLOSRY.html) in the structure of a DDIC database table. The table fields flagged as key fields become the [primary key](ABENPRIMARY_KEY_GLOSRY.html) of the table. The key fields of a table must be located together at the beginning of the table, which means that no non-key fields are allowed between two key fields. The primary key formed by the key fields is a unique identification for a table row. If other combinations of table rows identify a table row uniquely, they are called key candidates. The [primary index](ABENPRIMARY_INDEX_GLOSRY.html) is created for the primary key of the table. This index provides optimized key access to the table rows when values are specified for the key fields.

There can be a maximum of 16 key fields in each table. The total number of bytes in all key fields on the database cannot exceed 900. If the number is greater than 120, however, the following restrictions apply:

The following [built-in data types](ABENDDIC_BUILTIN_TYPES.html) are not allowed for key fields: `DF16_SCL` and `DF34_SCL` (both obsolete) plus `FLTP`, `STRING`, `RAWSTRING`, `LCHR`, `LRAW`, and `GEOM_EWKB`. A key field with the type `RAW` must not be longer than 69 bytes.

-   Table content cannot be transported by specifying the complete key values. Instead, the generic key values must be specified with a maximum total of 120 bytes or characters.
-   The table cannot be used as the base table of a [lock object](ABENLOCK_OBJECT_GLOSRY.html).

-   The [flag for initial values](ABENDDIC_DATABASE_TABLES_INIT.html) is always set automatically for key fields.
-   No [null values](ABENNULL_VALUE_GLOSRY.html) can be inserted in key fields. Any attempts to do this raise an exception on the database.
-   The limit in the number of key fields is defined in such a way that the requirements of all supported database platforms are met. Internally at SAP, tables can be flagged to allow these restrictions to be exceeded in extensions. When tables flagged in this way are accessed using ABAP SQL, a syntax warning from the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) occurs. The warning indicates that a platform-independent replacement implementation may be necessary. The class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html) can be used to identify which limits are supported by the current database system.

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_sema.html abenddic\_database\_tables\_semasspec.html