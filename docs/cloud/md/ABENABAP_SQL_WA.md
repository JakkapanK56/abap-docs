---
title: "ABENABAP_SQL_WA"
description: |
  ABENABAP_SQL_WA - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_WA.htm"
abapFile: "ABENABAP_SQL_WA.html"
keywords: ["select", "insert", "update", "delete", "if", "data", "types", "internal-table", "ABENABAP", "SQL"]
---

If any of the ABAP SQL statements listed below specify work areas `wa` or internal tables `itab` as the target or source areas, the following prerequisites apply to the work area or row type of the internal table.

If these prerequisites are ignored, a syntax error occurs or an exception is raised.

The following rules apply to work areas :

The work area or row structure of the internal table should always be structured in the same way as the database structure. If a single data source is used in the ABAP SQL statement, a data object built in the same way can be declared with reference to the relevant DDIC structure. If multiple data sources are used (in the statement `SELECT`), a data object built in the same way can be constructed as a nested structure, which contains the structures of the single data sources in the order specified in the statement as substructures. No structure should be used in which all components are on one level, because this ignores potential [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html) between the individual data sources.

-   `SELECT` or `FETCH` without the addition `CORRESPONDING FIELDS`,
-   `INSERT`, `UPDATE`, `MODIFY`, or `DELETE`

-   The data type of the work area or row type of the internal table must not be [deep](ABENDEEP_GLOSRY.html) or contain deep components. This excludes strings and special work areas for [streaming](ABENABAP_SQL_STREAMING.html) and [locators](ABENLOCATORS.html).
-   The data type of the work area and the row type of the internal table must not contain any [enumerated types](ABENENUM_TYPE_GLOSRY.html).
-   The work area or row type of the internal table must be at least as long as the database structure and the [alignment](ABENALIGNMENT_GLOSRY.html) must match. In the statement `DELETE`, this prerequisite must only be met in the length of the [primary key](ABENPRIMARY_KEY_GLOSRY.html).
-   If the work area or rows of the internal table are structured, the [fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html) of the database structure must match that of the work area or the internal table.
-   If the work area or rows of the internal table are elementary, they must be character-like and [flat](ABENFLAT_GLOSRY.html). The columns of the database structure must also be character-like and flat.
-   If the work area contains strings as components or is itself a string, or if columns of type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html), [`STRING`](ABENDDIC_BUILTIN_TYPES.html), [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html), or `GEOM_EWKB` appear in the database structure, the work area must be compatible with the database structure.
-   If the column specification `*` is used in the statement `SELECT` to access a [CDS entity](ABENCDS_ENTITY_GLOSRY.html), the work area is always checked as if it contained a string as a component.
-   For the modifying operations `INSERT`, `UPDATE`, and `MODIFY`, the passed values must match the value range of the columns of the DDIC database tables. Otherwise, corresponding exceptions are raised. This applies in particular to the following:

-   Columns with numeric data types.
-   Columns of the types `SSTRING`, `STRING`, `RAWSTRING`, or `GEOM_EWKB`. The strings of the work area must not be longer than the maximum length of the columns in the database structure. This length can be determined using the built-in function [`dbmaxlen`](ABENLENGTH_FUNCTIONS.html).
-   Columns of the types `DATN`, `TIMN`, and `UTCLONG`. Only valid dates, times, and UTC time stamps according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html) can be passed.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html