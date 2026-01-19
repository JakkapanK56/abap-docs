---
title: "Header lines of internal tables are created"
description: |
  The statement `CREATE DATA`(ABAPCREATE_DATA.html) cannot be used to create internal tables with a header line. A header line is a work area whose If a header line exists, therefore, an ABAP program has two identically named data objects, namely the actual internal table and the header line. The in
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_HEADER_LINE.htm"
abapFile: "ABENITAB_HEADER_LINE.html"
keywords: ["select", "loop", "do", "if", "case", "class", "data", "types", "internal-table", "field-symbol", "ABENITAB", "HEADER", "LINE"]
---

Outside classes, and if it is not a component of a structure or line of another internal table, it is still possible to create an internal table with a header line.

Header lines of internal tables are created

The statement [`CREATE DATA`](ABAPCREATE_DATA.html) cannot be used to create internal tables with a header line.

A header line is a work area whose

If a header line exists, therefore, an ABAP program has two identically named data objects, namely the actual internal table and the header line. The internal table and header line are accessed as follows:

To force access to the table body in any operand position when a header line exists, square brackets can be specified directly after the name of an internal table in all operand positions (for example, `itab[]`). This does not apply, however, when specifying the internal table in a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html).

The use of header lines is highly error-prone, due to the repeated use of a single name for two data objects. The creation and use of header lines must be avoided as much as possible, even outside of classes.

The following example shows a typical pitfall when handling internal tables with header lines: An internal table with a header line, in this case, the table parameter of a function module, is initialized using [`CLEAR`](ABAPCLEAR.html), but the `[]` is not appended to the name. In this case, only the header line is cleared, which is usually noticed only at runtime.

-   by using the addition [`WITH HEADER LINE`](ABAPDATA_HEADER_LINE.html) of the statement `DATA` when declaring internal tables,
-   when using the obsolete statement string [`DATA` - `BEGIN OF OCCURS`](ABAPDATA_BEGIN_OF_OCCURS.html) to declare structured standard tables,
-   when using the obsolete statement [`RANGES`](ABAPRANGES.html) to declare [ranges tables](ABENRANGES_TABLE_GLOSRY.html),
-   when declaring [selection tables](ABENSELECTION_TABLE_GLOSRY.html) with the statement [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html),
-   when using [table parameters](ABENTABLE_PARAMETER_GLOSRY.html) for [function modules](ABAPTABLES_PARAMETERS_OBSOLETE.html) and [subroutines](ABAPFORM_TABLES.html).

-   data type is the same as the line type of the internal table
-   name is the same as the name of the internal table.

-   Many processing statements for internal tables have [obsolete](ABENITAB_SHORT_FORMS.html) short forms in which the header lines is used as an implicit work area if no explicit work area is specified.
-   In all other cases, the statement and [operand position](ABENOPERANDS_DATA_OBJECTS.html) decide whether the [table body](ABENTABLE_BODY_GLOSRY.html) or the header line is used when the table name is specified. The header line is the usual choice. The simple name of an internal table with header line is interpreted as the table body only in the following cases:

-   Operand positions in the [processing statements for internal tables](ABENTABLE_PROCESSING_STATEMENTS.html) in which the internal table to be processed is specified.
-   Operand positions in expressions in which an internal table is expected, such as after [`FOR ... IN`](ABENFOR_ITAB.html) in a [table iteration](ABENTABLE_ITERATION_GLOSRY.html).
-   Operand positions in other statements whose operand type is an internal table, such as after [`SPLIT ... INTO TABLE`](ABAPSPLIT.html), [`CONCATENATE LINES OF`](ABAPCONCATENATE.html), [`SELECT ... INTO TABLE`](ABAPINTO_CLAUSE.html), and [`READ REPORT ... INTO`](ABAPREAD_REPORT.html).
-   Internal table specified in a [table expression](ABENTABLE_EXPRESSIONS.html)
-   When saving and reading [data clusters](ABENDATA_CLUSTER_GLOSRY.html) using [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html) and [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html).
-   In the statement [`FREE`](ABAPFREE_DATAOBJECT.html).
-   In the obsolete statement [`SEARCH`](ABAPSEARCH_ITAB.html).
-   When a token is specified dynamically in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) (except when database tables are specified).

-   When a `LIKE` reference is made to an internal table with header line, either the header line itself can be referenced or `[]` can be specified to reference the table body. It is not possible, however, to reference the internal table including the header line.
-   A field symbol, a formal parameter (except [table parameters](ABENTABLE_PARAMETER_GLOSRY.html)), or a data reference can only address either the table body or the header line. This means that a field symbol, a formal parameter (except [table parameters](ABENTABLE_PARAMETER_GLOSRY.html)), or a data reference is therefore never ambiguous.
-   Both the table body and the header line are passed when a table with header line is passed to [table parameters](ABENTABLE_PARAMETER_GLOSRY.html).
-   `[]` can be specified for internal tables without a header line, but this is not necessary, since the simple name (without `[]`) of an internal table without a header line is interpreted as the table body in all operand positions regardless.
-   In many operand positions that expect internal tables, the syntax check forces `[]` to be specified after the name of an internal table with a header line.
-   [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html) does not support internal tables with header lines. A type description object can describe either only the header line or the table body.
-   In very old programs, the use of the obsolete pseudo component [`*sys*`](ABENSYS_TABLE_BODY.html) is used to address the header line can also be found instead of `[]`.

-   The addition [`WITH HEADER LINE`](ABAPDATA_HEADER_LINE.html) and the statement string [`DATA` - `BEGIN OF OCCURS`](ABAPDATA_BEGIN_OF_OCCURS.html) should no longer be used and ranges tables should no longer be declared using [`RANGES`](ABAPRANGES.html).
-   The use of table parameters should be avoided as much as possible.
-   In cases where the creation of a header line is unavoidable, such as in selection tables or in procedures that still require table parameters (generally only [remote-enabled function modules](ABENREMOTE_ENABLED_FM_GLOSRY.html)), the header line should never be used, and always the additional explicitly work areas declared explicitly instead.

-   A work area for replacing a header line can be declared very easily by using the addition `LINE OF` of the statements `TYPES`, `DATA`, and so on.
-   The use of an additional work area should not be confused with the explicit completion of the implicit [short forms](ABENITAB_SHORT_FORMS.html), such as `LOOP AT itab INTO itab`. The latter case is also one of the undesired uses of a header line.
-   Tables with header lines do not offer any performance advantages.

FUNCTION work\_with\_tables. \\n\*"--------------------------------- \\n\*"\*"Local Interface \\n\*" TABLES \\n\*" table STRUCTURE structure \\n\*"---------------------------------- \\n\\ \\n CLEAR table. \\n\\ \\n ... \\n\\ \\nENDFUNCTION. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abenitab\_declare\_obsolete.html