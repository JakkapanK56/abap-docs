---
title: "ABAPEXEC_HOST"
description: |
  ABAPEXEC_HOST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC_HOST.htm"
abapFile: "ABAPEXEC_HOST.html"
keywords: ["select", "do", "if", "data", "types", "field-symbol", "ABAPEXEC", "HOST"]
---

`... :dobj ...`

[Host variables](ABENHOST_VARIABLE_GLOSRY.html) are global or local data objects (usually variables) declared in the ABAP program that are used in operand positions of embedded [Native SQL](ABENNATIVE_SQL_GLOSRY.html) statements. [Named](ABENNAMED_DATA_OBJECT_GLOSRY.html) data objects can be identified by an escape character (a colon `:`) placed in front of the names of the data objects. Instead of the data object itself, a field symbol to which the data object is assigned can also be specified. Dereferenced data reference variables cannot be specified. Depending on the operand position, the data objects can be [variables](ABENVARIABLE_GLOSRY.html) or [constants](ABENVARIABLE_GLOSRY.html). Constant host variables are [host constants](ABENHOST_VARIABLE_GLOSRY.html).

Usually, only flat elementary fields and flat structures with elementary components can be used as host variables. If a structure is specified after the [`INTO` clause](ABAPEXEC_INTO.html) by Native SQL, it is transformed by the Native SQL interface as if its components were specified as individual fields separated by commas.

In assignments between host variables and fields in database tables, a [mapping](ABENNATIVE_SQL_TYPE_MAPPING.html) takes place between the ABAP types and the database types. The ABAP types must match the database types. If they do not match, conversions must be made in the Native SQL interface. These conversions are platform-dependent and can raise exceptions.

Like the example for [literals](ABAPEXEC_LITERAL.html). Here, the row to be read is specified using host variables.

-   When passed to a host variable, a [null value](ABENNULL_VALUE_GLOSRY.html) is transformed to its type-dependent initial value.
-   The indicator variables provided in the SQL standard, which can be specified after an operand to identify null values, can be specified in static Native SQL using a host variable that has to be of the ABAP Dictionary data type `INT2`.
-   As it is common in ABAP, [trailing blanks](ABENSTRING_PROCESSING_TRAIL_BLANKS.html) are truncated in text field host variables.
-   Host variables cannot be [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: carrid TYPE spfli-carrid VALUE 'LH', \\n connid TYPE spfli-connid VALUE '400'. \\n\\ \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = carrid \\n )->add\_field( CHANGING field = connid )->request( ). \\n\\ \\nDATA: BEGIN OF wa, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n END OF wa. \\n\\ \\nEXEC SQL. \\n SELECT cityfrom, cityto \\n INTO :wa \\n FROM spfli \\n WHERE mandt = :sy-mandt AND \\n carrid = :carrid AND connid = :connid \\nENDEXEC. \\n\\ \\nout->write( wa ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abennativesql.html abapexec.html