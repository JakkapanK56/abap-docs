---
title: "ABENITAB_ACCESS"
description: |
  ABENITAB_ACCESS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_ACCESS.htm"
abapFile: "ABENITAB_ACCESS.html"
keywords: ["select", "loop", "do", "if", "try", "catch", "data", "types", "internal-table", "field-symbol", "ABENITAB", "ACCESS"]
---

When internal tables are accessed, either the entire table or [table body](ABENTABLE_BODY_GLOSRY.html), or individual lines can be addressed.

The table category and the table keys are significant when internal tables are processed:

In the following example, data is written to an internal table with ABAP SQL, sorting takes place, and reads are demonstrated with the statement [`READ TABLE`](ABAPREAD_TABLE_ITAB_SHORTREF.html) and a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html).

-   The entire table is accessed using special statements such as [`SORT`](ABAPSORT_ITAB.html), but also using general statements where internal tables can be specified at operand positions. Examples are [assignments](ABAPMOVE.html), parameter passing, target or source areas in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and many other statements that return or expect tabular data.
-   Individual lines are accessed using the following:

-   [Special statements](ABENITAB.html) such as [`READ TABLE`](ABAPREAD_TABLE.html), [`LOOP AT`](ABAPLOOP_AT_ITAB.html), or [`MODIFY`](ABAPMODIFY_ITAB.html)
-   Table expressions [`itab[ ... ]`](ABENTABLE_EXPRESSIONS.html).
-   Mesh path expressions [`mesh_path`](ABENMESH_PATH_EXPRESSION.html)

-   When individual lines are accessed, either a [work area](ABENWORK_AREA_GLOSRY.html) is used into which the line content can be read or from which it can be modified, or a line is linked to a [field symbol](ABENFIELD_SYMBOL_GLOSRY.html) or a [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html) and these are used to access the line directly.

-   The [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html) can be used to access [index tables](ABENINDEX_TABLE_GLOSRY.html), that is, [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) and [sorted tables](ABENSORTED_TABLE_GLOSRY.html). These tables always have a primary index.
-   [Primary table keys](ABENPRIMARY_TABLE_KEY_GLOSRY.html) can be used for optimized access to [sorted tables](ABENSORTED_TABLE_GLOSRY.html) and [hashed tables](ABENHASHED_TABLE_GLOSRY.html).
-   A [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) can be used to access any tables with a [sorted](ABENSORTED_KEY_GLOSRY.html)\\ [secondary table index](ABENSECONDARY_TABLE_KEY_GLOSRY.html).
-   The [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) can be used for optimized access to any tables with a secondary [sorted key](ABENSORTED_KEY_GLOSRY.html) or [hash key](ABENHASH_KEY_GLOSRY.html).

-   Internal tables must be specified at operand positions for internal tables when the statement is executed. Only index tables can be specified at operand positions that include index access.

-   In [processing statements](ABENTABLE_PROCESSING_STATEMENTS.html) for internal tables, the operands can be generically typed with `TYPE [data](ABENBUILT_IN_TYPES_GENERIC.html)` or `TYPE [any](ABENBUILT_IN_TYPES_GENERIC.html)` as long as no table index is accessed. For index accesses, an operand must be typed at least with `TYPE [index table](ABENBUILT_IN_TYPES_GENERIC.html)`.
-   In expressions as [`FOR expressions`](ABENFOR_ITAB.html) or [table expressions](ABENTABLE_EXPRESSIONS.html), an internal table must be typed at least with `TYPE [any table](ABENBUILT_IN_TYPES_GENERIC.html)`.

-   If the line type of internal tables contains [object reference variables](ABENOBJECT_REFER_VARIABLE_GLOSRY.html) as the components `comp`, the attributes `attr` of the object to which the reference points can be used as key values for reading, sorting, and modifying table lines. This is always possible for statements that address individual [components](ABENITAB_COMPONENTS.html) of the table.
-   The content of the primary table key cannot be changed for any writes to individual lines of [sorted tables](ABENSORTED_TABLE_GLOSRY.html) and [hashed tables](ABENHASHED_TABLE_GLOSRY.html). If writes are performed in write positions across the entire table line in these tables, for example, as a target field of assignments or as actual parameters for output parameters, an exception is always raised. It is not possible to access entire table lines using field symbols, data references or table expressions.

DATA scarr\_tab \\n TYPE STANDARD TABLE OF scarr \\n WITH NON-UNIQUE KEY carrid. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @scarr\_tab. \\n\\ \\nSORT scarr\_tab BY carrid ASCENDING. \\n\\ \\nREAD TABLE scarr\_tab WITH TABLE KEY carrid = 'LH' \\n TRANSPORTING NO FIELDS. \\nIF sy-subrc = 0. \\n FINAL(idx) = sy-tabix. \\n TRY. \\n cl\_demo\_output=>display( scarr\_tab\[ idx + 1 \]-carrid ). \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n ... \\n ENDTRY. \\nENDIF. abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendobj\_itab.html