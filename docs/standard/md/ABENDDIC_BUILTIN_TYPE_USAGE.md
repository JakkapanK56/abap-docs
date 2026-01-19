---
title: "ABENDDIC_BUILTIN_TYPE_USAGE"
description: |
  ABENDDIC_BUILTIN_TYPE_USAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_BUILTIN_TYPE_USAGE.htm"
abapFile: "ABENDDIC_BUILTIN_TYPE_USAGE.html"
keywords: ["do", "if", "case", "data", "types", "ABENDDIC", "BUILTIN", "TYPE", "USAGE"]
---

The [built-in types](ABENDDIC_BUILTIN_TYPES.html) in ABAP Dictionary are used for the definition of the elementary parts of all data types, including reference types in ABAP Dictionary, and for specifying some types in ABAP SQL and ABAP CDS. The built-in types in ABAP Dictionary can be specified in the places specified below. No other places are possible.

The data type of all elementary components in a [CDS entity](ABENCDS_ENTITY_GLOSRY.html), such as view fields, literals, parameters, and other operands is based indirectly on the built-in data types in ABAP Dictionary.

In ABAP programs, `TYPE` references to the built-in data types in ABAP Dictionary are possible only by using the DDIC data types above. No other `TYPE` reference to a built-in DDIC type is supported from an ABAP program. Alongside their role in defining data types, these built-in types in ABAP Dictionary must also be considered in [ABAP SQL statements](ABENABAP_SQL_GLOSRY.html) and when working with [dynpros](ABENDYNPRO_GLOSRY.html):

The following type reference in an ABAP program does not use the built-in type `INT2` directly. Instead, it used the identically named data element `INT2` whose type is itself defined using the identically named domain `INT2`. The domain finally uses the built-in type `INT2`:

-   [Data elements](ABENDDIC_DATA_ELEMENTS.html)
-   A data element for an elementary data type has either a directly specified built-in type or a type specified using a [domain](ABENDDIC_DOMAINS.html). If a data element is used for typing in an ABAP program, the data element's dictionary type is mapped to a [built-in ABAP type](ABENDDIC_BUILTIN_TYPES.html) in accordance with the last column of the [tables of built-in types](ABENDDIC_BUILTIN_TYPES.html).
-   [DDIC structures](ABENDDIC_STRUCTURES.html), [DDIC database tables](ABENDDIC_DATABASE_TABLES.html), and [DDIC views](ABENDDIC_VIEWS.html)
-   The elementary components of a DDIC structure have either a directly specified built-in type or a type specified using a [data element](ABENDDIC_DATA_ELEMENTS.html). In references to structures in an ABAP program, the structures are mapped to a [structured type](ABENSTRUCTURED_TYPE_GLOSRY.html), where the elementary components are mapped to [built-in ABAP types](ABENBUILTIN_ABAP_TYPE_GLOSRY.html) in accordance with the last column of the [tables of built-in types](ABENDDIC_BUILTIN_TYPES.html). The same applies to the table fields of DDIC database tables and view fields of DDIC views.
-   [DDIC table types](ABENDDIC_TABLE_TYPES.html)
-   The line types of a table type are defined using existing data types from ABAP Dictionary, whose elementary components have a built-in type as explained above. When a reference is made to a table type in an ABAP program, the type is mapped to a matching ABAP type. Here, the elementary components are mapped to [built-in ABAP types](ABENBUILTIN_ABAP_TYPE_GLOSRY.html) in accordance with the [tables of built-in types](ABENDDIC_BUILTIN_TYPES.html).
-   Reference types
-   Data elements, components of structures, or line types of table types can all be reference types. Reference types for data reference variables with an elementary static data type are defined by specifying a built-in type directly or by using a data element.
-   Types specified in SQL

-   [Typing](ABENCDS_TYPING.html) of elements and input parameters of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) in ABAP CDS.
-   Cast expression [`cast`](ABENCDS_CAST_EXPRESSION_V2.html) in the CDS DDL in ABAP CDS.
-   [Typed literals](ABENCDS_TYPED_LITERAL_V2.html) in ABAP CDS.
-   SQL expression [`CAST`](ABENSQL_CAST.html) in ABAP SQL.
-   [Typed literals](ABENABAP_SQL_TYPED_LITERALS.html) in ABAP SQL.

-   ABAP SQL statements work with DDIC database tables whose columns have DDIC data types to which the actual platform-dependent types of the databases are mapped.
-   In [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html), [dynpro fields](ABENDYNPRO_FIELD_GLOSRY.html) are also declared with reference to DDIC data types. In a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html), the special semantic properties of its data type are usually significant and are evaluated for input masks and for checking input.

-   In ABAP CDS, a built-in dictionary type `type` is specified by `ABAP.type`, which is in fact a bit misleading.
-   In ABAP development, only mappings from the built-in dictionary types to the built-in ABAP types are relevant. In database accesses using ABAP SQL, the actual database type, such as `NVARCHAR`, is hidden by the dictionary type (in this case `CHAR`).
-   When referring to built-in dictionary types in ABAP programs, the [initial value](ABENINITIAL_VALUE_GLOSRY.html) of elementary data types is not the initial value assigned to the [built-in dictionary types](ABENDDIC_BUILTIN_TYPES.html) but the initial value of the mapped [built-in ABAP types](ABENBUILT_IN_TYPES_COMPLETE.html).
-   For some built-in dictionary types, there are [predefined data elements](ABENDDIC_PREDEF_TYPES.html) of the same name for common usage.

DATA num TYPE int2. abenabap.html abenabap\_dictionary.html abenddic\_builtin\_types\_intro.html