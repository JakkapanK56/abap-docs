---
title: "ABENNATIVE_SQL_TYPE_MAPPING"
description: |
  ABENNATIVE_SQL_TYPE_MAPPING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNATIVE_SQL_TYPE_MAPPING.htm"
abapFile: "ABENNATIVE_SQL_TYPE_MAPPING.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "catch", "data", "types", "ABENNATIVE", "SQL", "TYPE", "MAPPING"]
---

In Native SQL, data can be transferred from the database to ABAP data objects in reads and vice versa in writes.

In assignments between ABAP data objects and fields in database tables, the ABAP data objects are bound to the database fields using the [Native SQL interface](ABENNATIVE_SQL_INTERFACE_GLOSRY.html). ABAP data objects should usually only be bound to suitable database fields. The following tables show which elementary ABAP types match which HANA types, using the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) as an example. There are similar assignments for other database systems.

**Numeric Types**

**Character-Like Types**

**Byte-Like Types**

**Date Types, Time Types, and Time Stamp Types**

If the data types match, the content can be passed unchanged without being checked. In all other cases, conversions are necessary. These conversions and the necessary checks are performed by the Native SQL interface. The conversions take place in the platform-dependent part (Client Library) of the Native SQL interface, and the following problems can occur:

For this reason, conversions in the Native SQL interface should be avoided if possible. This is particularly relevant for the ABAP types `n`, `d`, and `t` and decimal floating point numbers.

The example shows that if the data of a column with type `NUMC` is assigned in Native SQL to a host variable with the ABAP type `n` that is too short, it is truncated on the right. The [rule](ABENSELECT_INTO_CONVERSION.html) that is applied in ABAP SQL, however, passes the data right-aligned and truncated on the left.

The result in an SAP HANA database is:

The example shows that if a host variable with ABAP type `n` that is too long is assigned to a column with type `NUMC` in Native SQL, an exception is raised. The [conversion rule](ABENCONVERSION_TYPE_N.html) that is applied in ABAP SQL, however, passes the data right-aligned and truncated on the left.

The result in an SAP HANA database is:

[Native SQL - Trailing Blanks](ABENNATIVE_SQL_TRAILBLANKS_ABEXA.html)

-   In [ADBC](ABENADBC.html), ABAP data objects are bound using data references.
-   ABAP data objects are specified as [host variables](ABAPEXEC_HOST.html) after [`EXEC SQL`](ABAPEXEC.html).

-   Unexpected conversion results

-   Cutting off or padding of values for character-like and byte-like types
-   Conversion rules different to those in ABAP

-   SQL errors that raise exceptions

-   Unlike Native SQL, [ABAP SQL](ABENABAP_SQL_GLOSRY.html) respects the column types of database tables and views defined in the ABAP Dictionary. These are based on the [built-in data types of the ABAP Dictionary](ABENDDIC_BUILTIN_TYPES.html), which can all be mapped to a [built-in ABAP type](ABENBUILTIN_ABAP_TYPE_GLOSRY.html). Therefore, the ABAP SQL interface can also execute platform-independent conversions between incompatible data types if they correspond to the conversion rules in ABAP. For example, see the [assignment rules](ABENSELECT_INTO_CONVERSION.html) for reads.
-   In particular when writing text fields of type `c` into columns of DDIC type `STRING`, there is a significant difference in the handling of trailing blanks:

-   In ABAP SQL, the trailing blanks of the text field are truncated according to the ABAP rules.
-   In Native SQL, the trailing blanks of the text field are handled according to the rules of the HANA type `NCLOB` and are not truncated.

-   Also when writing text literals into columns of DDIC type `CHAR`, a difference can occur:

-   In ABAP SQL, the trailing blanks of a text field literal are not stored in the database. An ABAP SQL `WHERE` condition comparing with the same text does find the data.
-   In Native SQL, the trailing blanks of a text field literal are stored in the database. An ABAP SQL `WHERE` condition comparing with the same text does not find the data. It can be found with a [`LIKE`](ABENWHERE_LOGEXP_LIKE.html) condition or using the [`LEFT`](ABENSQL_STRING_FUNC.html) function.

-   See the [executable example](ABENNATIVE_SQL_TRAILBLANKS_ABEXA.html).

DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( id = 'X' numc1 = '123' ) ). \\n\\ \\nDATA host TYPE n LENGTH 5. \\n\\ \\nSELECT SINGLE numc1 FROM demo\_expressions INTO (@host). \\n\\ \\ncl\_demo\_output=>write( |ABAP SQL: \\{ host \\}| ). \\n\\ \\nEXEC SQL. \\n SELECT numc1 FROM demo\_expressions INTO :host \\nENDEXEC. \\n\\ \\ncl\_demo\_output=>display( |Native SQL: \\{ host \\}| ). ABAP SQL: 00123 \\n\\ \\nNative SQL 00000 DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ). \\n\\ \\nDATA host TYPE n LENGTH 15 VALUE '111112222233333'. \\n\\ \\nUPDATE demo\_expressions SET numc1 = @host WHERE id = 'X'. \\n\\ \\nSELECT SINGLE numc1 FROM demo\_expressions INTO @FINAL(result). \\ncl\_demo\_output=>write( |ABAP SQL: \\\\n\\{ result \\}| ). \\n\\ \\nTRY. \\n EXEC SQL. \\n UPDATE demo\_expressions SET numc1 = :host WHERE id = 'X' \\n ENDEXEC. \\n CATCH cx\_sy\_native\_sql\_error INTO FINAL(exc). \\n cl\_demo\_output=>write( |Native SQL: \\\\n\\{ exc->get\_text( ) \\}| ). \\nENDTRY. \\n\\ \\ncl\_demo\_output=>display( ). ABAP SQL: \\n2222233333 \\n\\ \\nNative SQL \\nAn SQL error has occurred: inserted value too large for column **ABAP Type** **HANA Type**\\ `b` `SMALLINT`\\ `s` `SMALLINT`\\ `i` `INTEGER`\\ `int8` `BIGINT`\\ `p`, length `leng` with `dec` decimal places \\ `DECIMAL`, length `2len-1` with `dec` decimal places `decfloat16` `SMALLDECIMAL`, length 16 `decfloat34` `DECIMAL`, length 34 `f` `DOUBLE` **ABAP Type** **HANA Type**\\ `c`, length `len` `NVARCHAR`, length `len`\\ `string` `NCLOB`\\ `n`, length `len` `NVARCHAR`, length `len` **ABAP Type** **HANA Type**\\ `x`, length `len` `VARBINARY`, length `len`\\ `xstring` BLOB **ABAP Type** **HANA Type**\\ `d` `DATE`; \\
`NVARCHAR`, length 8 `t` `TIME`; \\
`NVARCHAR`, length 6 `utclong` `TIMESTAMP` abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html