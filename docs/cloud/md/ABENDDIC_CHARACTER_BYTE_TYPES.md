---
title: "ABENDDIC_CHARACTER_BYTE_TYPES"
description: |
  ABENDDIC_CHARACTER_BYTE_TYPES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_CHARACTER_BYTE_TYPES.htm"
abapFile: "ABENDDIC_CHARACTER_BYTE_TYPES.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "internal-table", "ABENDDIC", "CHARACTER", "BYTE", "TYPES"]
---

The following built-in dictionary data types are available for general character strings:

The following built-in data types in ABAP Dictionary are available for general byte chains:

The following points must be remembered when using built-in dictionary data types for text strings or byte strings:

The following restrictions apply in [CDS DDL](ABENCDS_DDL_GLOSRY.html) with respect to character-like types and byte-like types:

The obsolete data type `VARC` cannot be used in ABAP CDS.

The following restrictions apply when accessing database fields with character-like and byte-like types in ABAP SQL:

-   [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) for text fields
-   The built-in type `CHAR`, mapped to the ABAP type `c`, is used to describe general text fields with a maximum length of 30000 characters. For table fields, view fields, and fields of CDS entities, the maximum length is 1333 characters.
-   [`LCHR`](ABENDDIC_BUILTIN_TYPES.html) for long text fields
-   The built-in type `LCHR`, also mapped to the ABAP type `c`, is used to describe general text fields with lengths between 256 and 32000 characters. In DDIC database tables, the maximum length must be specified as the value of a preceding `INT2` or `INT4` field. There can only be one table field of type `LCHR` or `LRAW`. It must not be a key field and it must be the last table field. It cannot be used in all positions of ABAP SQL statements.
-   [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) for short text strings
-   The built-in type `SSTRING` is mapped to the ABAP type `string`. It is handled like the type `CHAR` or `VARCHAR` in ABAP Dictionary and by DDIC database tables. The length is restricted to a maximum of 1333. Table fields of this type can be used as [key fields](ABENDDIC_DATABASE_TABLES_KEY.html) by DDIC database tables and used by ABAP SQL statements in almost all positions where text fields are possible.
-   [`STRING`](ABENDDIC_BUILTIN_TYPES.html) for text strings
-   The built-in dictionary type `STRING` is mapped to the ABAP type `string`. It is handled like a text string ([CLOB](ABENCLOB_GLOSRY.html)) in ABAP Dictionary and by DDIC database tables. Table fields of this type cannot be used as [key fields](ABENDDIC_DATABASE_TABLES_KEY.html) or [index fields](ABENDDIC_DATABASE_TABLES_INDEX.html) in DDIC database tables. They cannot be used in all positions in ABAP SQL statements. The possible length of a text string is unrestricted, but a maximum length of at least 256 can be specified to restrict its length when used for a table field of a DDIC database table, which is relevant for ABAP SQL access (see below).

-   In general [DDIC structures](ABENDDIC_STRUCTURES.html), the length of a component of type `CHAR` is not restricted to 1333.
-   In DDIC database tables, there can be only one table field of the type `LCHR` and it must be the last table field. This means that the type `LRAW` cannot be used simultaneously in the same database table. If the statement [`SELECT`](ABAPSELECT.html) is used to read an `LCHR` field, the preceding length field must also be read. In [writes](ABENABAP_SQL_WRITING.html) using ABAP SQL, the length field must be given the correct value or data may be lost.
-   `LCHR` is no longer recommended for new developments. The type `STRING` is recommended instead, however it is also not suitable for [key fields](ABENDDIC_DATABASE_TABLES_KEY.html) of DDIC database tables or for unrestricted use in ABAP SQL. Where possible, `SSTRING` can be used here instead.
-   Switching existing dictionary objects from `LCHR` to `STRING` or `SSTRING` can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](ABENDEEP_GLOSRY.html) data type. A switch from a [flat](ABENFLAT_GLOSRY.html) data type to a [deep](ABENDEEP_GLOSRY.html) data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

-   [`RAW`](ABENDDIC_BUILTIN_TYPES.html) for byte fields
-   The built-in type `RAW`, mapped to the ABAP type `x`, is used to describe byte fields with a maximum length of 32000 characters. For table fields, the maximum length is 255 characters.
-   [`LRAW`](ABENDDIC_BUILTIN_TYPES.html) for long byte fields
-   The built-in type `LRAW`, also mapped to the ABAP type `x`, is used to describe byte fields with lengths between 256 and 32000 characters. In DDIC database tables, the maximum length must be specified as the value of a preceding `INT2` or `INT4` field. There can only be one table field of type `LRAW` or `LCHR`. It must not be a key field and it must be the last table field. It cannot be used in all positions of ABAP SQL statements.
-   [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html) for byte strings
-   The built-in type `RAWSTRING` is mapped to the ABAP type `xstring` and it is handled like a byte string ([BLOB](ABENBLOB_GLOSRY.html)) in ABAP Dictionary and by DDIC database tables. Table fields of this type cannot be used as [key fields](ABENDDIC_DATABASE_TABLES_KEY.html) or [index fields](ABENDDIC_DATABASE_TABLES_INDEX.html) in DDIC database tables. They cannot be used in all positions in ABAP SQL statements. The possible length of a byte string is unrestricted, but a maximum length of at least 256 can be specified to restrict its length when used for a table field of a DDIC database table. This is relevant for ABAP SQL access (see below).

-   In general [DDIC structures](ABENDDIC_STRUCTURES.html), the length of a component of type `RAW` is not restricted to 255.
-   In DDIC database tables, there can be only one table field of the type `LRAW` and it must be the last table field. This means that the type `LCHR` cannot be used simultaneously in the same database table. If the statement [`SELECT`](ABAPSELECT.html) is used to read an `LRAW` field, the preceding length field must also be read. In [writes](ABENABAP_SQL_WRITING.html) using ABAP SQL, the length field must be given the correct value or data may be lost.
-   `LRAW` is no longer recommended for new developments. The type `RAWSTRING` is recommended instead. However, `RAWSTRING` is also not suitable for [key fields](ABENDDIC_DATABASE_TABLES_KEY.html) of DDIC database tables or for unrestricted use in ABAP SQL.
-   Switching existing dictionary objects from `LRAW` to `RAWSTRING` can be critical, since all ABAP types and ABAP objects that reference dictionary objects like this are then given a [deep](ABENDEEP_GLOSRY.html) data type. A switch from a [flat](ABENFLAT_GLOSRY.html) data type to a [deep](ABENDEEP_GLOSRY.html) data type usually constitutes an incompatible change and can produce syntax errors in ABAP programs.

-   The types `STRING` and `RAWSTRING` for [LOBs](ABENLOB_GLOSRY.html) have a variable length. A maximum length can be specified, but there is no upper limit. If a maximum length is specified, this represents the actual restriction if used for a table field of a DDIC database table.
-   The type `SSTRING` also has a variable length, but this is restricted upwards by the maximum length that can be specified. The greatest maximum length is 1333. The benefit of using `SSTRING`, and not `CHAR`, is that it is assigned to the ABAP type `string`. Its advantage over `STRING` is that it can also be used for key fields in databases and in any places in ABAP SQL in which the type `CHAR` is also possible.
-   The maximum possible length for the types `STRING` and `RAWSTRING` and the mandatory maximum length for `SSTRING` must not be exceeded in [writes](ABENABAP_SQL_WRITING.html) performed on database fields of these types using ABAP SQL. If it is exceeded, an exception of the class `CX_SY_OPEN_SQL_DB` is raised. If a string is truncated when read to a target field, no exception is raised.
-   In ABAP programs, maximum lengths defined in ABAP Dictionary for the types `STRING`, `RAWSTRING`, and `SSTRING` are ignored by the assigned ABAP types `string` and `xstring`. As a result, writing a string that is too long to a database can raise an exception. If required, the ABAP program itself must handle the length restrictions on strings.
-   The maximum length of data types based on `STRING`, `RAWSTRING`, and `SSTRING` can be identified in an ABAP program using the built-in function [`dbmaxlen`](ABENLENGTH_FUNCTIONS.html).
-   Trailing blanks are saved in table fields of the type `STRING` but not in table fields of the type `SSTRING`. This is particularly significant when short strings are used as key fields of database fields, since trailing blanks cannot be used as distinguishing characteristics here.
-   [LOBs](ABENLOB_GLOSRY.html) of the types `STRING` and `RAWSTRING` are usually handled as [deep](ABENDEEP_GLOSRY.html) data objects in which only one LOB locator is saved within the data record. This locator references the actual string data. Database fields of the type `SSTRING` are usually saved as [flat](ABENFLAT_GLOSRY.html) fields. An empty long string can also be saved using the [null value](ABENNULL_VALUE_GLOSRY.html). The actual handling, however, depends on the individual database system and is not important for ABAP programs.
-   If a [work area](ABENABAP_SQL_WA.html) or an internal table is used to access table fields of the types `SSTRING`, `STRING`, or `RAWSTRING` in ABAP SQL, the work area or the line type of the internal table must be compatible with the database structure.
-   If DDIC structures, DDIC database tables, or DDIC views that have strings as components are used for typings in ABAP, it must be remembered that these objects are [deep structures](ABENDEEP_STRUCTURE_GLOSRY.html). This means, for example, that they cannot be used in the `TABLES` statement (obsolete for database accesses) or for typing the obsolete [table parameters](ABENTABLE_PARAMETER_GLOSRY.html) of procedures.
-   Access may be slower for long strings (LOBs) in DDIC database tables than for other data types. If not all data is needed at once, and to bypass any memory limits on the AS instance, [streaming](ABENABAP_SQL_STREAMING.html) and [locators](ABENLOCATORS.html) can be used to access long strings.

-   The data types `STRING` and `RAWSTRING` plus `LCHR` and `LRAW` cannot be used in the following cases:

-   In the `SELECT` list if the addition `DISTINCT` is specified ([CDS view entity](ABENCDS_SELECT_STATEMENT_V2.html), [CDS DDIC-based view (obsolete)](ABENCDS_SELECT_STATEMENT_V1.html))
-   In `CAST` expressions ([CDS view entity](ABENCDS_CAST_EXPRESSION_V2.html), [CDS DDIC-based view (obsolete)](ABENCDS_CAST_EXPRESSION_V1.html))
-   In comparison expressions `cds_cond` ([CDS view entity](ABENCDS_CONDITIONAL_EXPRESSION_V2.html), [CDS DDIC-based view (obsolete)](ABENCDS_CONDITIONAL_EXPRESSION_V1.html))
-   In string functions ([CDS view entity](ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html), [CDS DDIC-based view (obsolete)](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html))
-   In `CASE` expressions ([CDS view entity](ABENCDS_CASE_EXPRESSION_V2.html), [CDS DDIC-based view (obsolete)](ABENCDS_CASE_EXPRESSION_V1.html))
-   In aggregate expressions ([CDS view entity](ABENCDS_AGGREGATE_FUNCTIONS_V2.html), [CDS DDIC-based view (obsolete)](ABENCDS_AGGREGATE_FUNCTIONS_V1.html))
-   For columns merged using `UNION`:
-   In [CDS DDIC-based views (obsolete)](ABENCDS_UNION_V1.html), these data types are generally not supported.
-   In [CDS view entities](ABENCDS_UNION_V2.html), these data types are not supported if `UNION` is specified without the addition `ALL`. `UNION ALL`, by contrast, supports all data types without any restriction.
-   After `GROUP BY` ([CDS view entity](ABENCDS_GROUP_BY_V2.html), [CDS DDIC-based view (obsolete)](ABENCDS_GROUP_BY_V1.html))
-   After `SIBLINGS ORDER BY` in the statement [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html)

-   The data types `LCHR` and `LRAW` cannot be used in the following case:

-   For [typings](ABENCDS_TYPING.html)

-   The data type `RAW` can only be used in a small number of operand positions, where this is documented.

-   There are no access restrictions to database fields with the data types `CHAR` and `RAW` in ABAP SQL.
-   Database fields with the data types `STRING` and `RAWSTRING` plus `LCHR` and `LRAW` cannot be used in the following operand positions:

-   As arguments of [aggregate functions](ABAPSELECT_AGGREGATE.html) and [SQL expressions](ABAPSQL_EXPR.html).
-   In the [`SELECT` list](ABAPSELECT_LIST.html) when the addition [`DISTINCT`](ABAPSELECT_CLAUSE.html) is used.
-   In the [`SELECT` list](ABAPSELECT_LIST.html) when the addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) is used.
-   In [SQL conditions](ABENASQL_COND.html) except [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html).
-   In the [`GROUP BY` clause](ABAPGROUPBY_CLAUSE.html).
-   In the [`ORDER BY` clause](ABAPORDERBY_CLAUSE.html).
-   After [`SIBLINGS ORDER BY`](ABENSELECT_HIERARCHY_GENERATOR.html) in the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html).

-   The data type `SSTRING` can be used without restrictions, except in the [`coalesce`](ABENSQL_COALESCE.html) function and in [`CASE`](ABENSQL_CASE.html) expressions.

abenabap.html abenabap\_dictionary.html abenddic\_builtin\_types\_intro.html abenddic\_builtin\_types\_prop.html abenddic\_builtin\_types\_general.html