---
title: "ABAPUPDATE_SET_INDICATOR"
description: |
  ABAPUPDATE_SET_INDICATOR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPUPDATE_SET_INDICATOR.htm"
abapFile: "ABAPUPDATE_SET_INDICATOR.html"
keywords: ["select", "update", "do", "if", "case", "class", "data", "types", "internal-table", "ABAPUPDATE", "SET", "INDICATOR"]
---

[Short Reference](ABAPUPDATE_SHORTREF.html)

`... INDICATORS \{[NOT] SET STRUCTURE set_ind\}\               | (indicator_syntax) ...`

[1. `... INDICATORS [NOT] SET STRUCTURE set_ind`](#ABAP_ALTERNATIVE_1@2@)

[2. `... INDICATORS (indicator_syntax)`](#ABAP_ALTERNATIVE_2@2@)

The addition `INDICATORS` of the `UPDATE FROM` clause can be used to specify [set indicators](ABENSET_INDICATOR_GLOSRY.html) for a [work area](ABENWORK_AREA_GLOSRY.html) or an [internal table](ABENINTERNAL_TABLE_GLOSRY.html). The purpose of set indicators is to indicate columns to be changed. `UPDATE FROM` without indicators overwrites all fields of a row but when set indicators are used, only the indicated fields are updated. The addition can be specified only after `UPDATE FROM` for structured work areas `wa` or internal tables `itab` with a structured row type. The source work area or source internal table must have a structure `set_ind` as the last field with the same number of components as the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) to be updated, where each component serves as a set indicator for one row. There is a static variant and a dynamic variant.

[Set indicators](ABENSET_INDICATOR_GLOSRY.html) enforce [strict mode from ABAP release 7.81](ABENABAP_SQL_STRICTMODE_781.html).

The [set indicator](ABENSET_INDICATOR_GLOSRY.html)\\ `set_ind` indicates which fields of a database are to be updated by the `UPDATE FROM` clause. `set_ind` must be included in the source work area or source internal table as the last field and it must contain one component for each column of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) to be changed. All individual components of `set_ind` must have either the data type `c` and length 1, or the data type `x` and length 1. The `UPDATE FROM` clause checks the content of `set_ind` and updates only fields that are marked with *X* (data type `c`) or hexadecimal *1* (data type `x`). Fields that contain any other character or hexadecimal value are not updated.

When using the addition `INDICATORS NOT SET`, the reverse logic is applied: all fields are updated, except the ones marked with *X* (data type `c`) or hexadecimal *1* (data type `x`).

Key fields must always be included in the indicator structure. However, the set indicators do not have any effect on key fields.

An internal table `ind_tab` is defined as the source structure. When using the addition [`INDICATORS`](ABAPTYPES_INDICATORS.html) of the [`TYPES`](ABAPTYPES.html) statement, it consists of the structure of the table entity `DEMO_CDS_UPDATE_TE` as well as the [indicator structures](ABENINDICATOR_STRUCTURE_GLOSRY.html)\\ `col_ind` as the last component, which mirrors the structure of the CDS table entity. Three rows are chosen to be updated. From these rows, however, only the field `COL4` is marked for update. When the `UPDATE FROM` statement is carried out, only the three indicated fields are updated. Without the set indicators, the three rows would have been overwritten entirely and all fields for which no value was specified would have been initialized (see image below).

**Note** The following code is an extract from the executable example [*UPDATE, SET INDICATORS*](ABENUPDATE_SET_INDICATORS_ABEXA.html). The results shown in the image can be replicated with the executable example.

`result1` shows the result with set indicators, `result2` without set indicators.

[`UPDATE, SET INDICATORS`](ABENUPDATE_SET_INDICATORS_ABEXA.html)

Instead of the static specification, a parenthesized data object `indicator_syntax` can be specified after `INDICATORS`. This data object must contain the syntax shown for the static specification when the statement is executed. The syntax in `indicator_syntax` is not case-sensitive. If the data object `indicator_syntax` has no content, then the addition has no effect.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

This example is similar to the example for specifying information statically. The CDS table entity `DEMO_CDS_UPDATE_TE` is updated from the work area `col_ind` and only the column `COL4` is marked for update. In contrast to the first example, the set indicator is specified dynamically. The class `CL_DEMO_UPDATE_SET_IND_DYN` fills the CDS table entity with values, carries out the `UPDATE FROM` statement, and displays the result.

-   Set indicators work for regular structures, as well as for [LOB handle structures](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html). If the source work area or source internal table contains [LOB handle components](ABENLOB_HANDLE_COMPONENT_GLOSRY.html) that are not marked for update, the [LOBs](ABENLOB_GLOSRY.html) they refer to are not updated either. As without set indicators, [LOB handles](ABENLOB_HANDLE_GLOSRY.html) should always be closed, regardless of whether they were marked for update or not.
-   Work areas with set indicators can be defined with the addition [`INDICATORS`](ABAPTYPES_INDICATORS.html) of the [`TYPES`](ABAPTYPES.html) statement.
-   The addition [`BITFIELD`](ABAPSELECT_INDICATORS.html) that is possible for `SELECT` cannot be used for `UPDATE`.

TYPES ind\_wa TYPE demo\_cds\_update\_te WITH INDICATORS col\_ind \\n TYPE abap\_boolean. \\nDATA ind\_tab TYPE TABLE OF ind\_wa. \\n\\ \\nind\_tab = VALUE #( \\n ( id = 'D' col4 = 4000 col\_ind-col4 = abap\_true ) \\n ( id = 'E' col4 = 5000 col\_ind-col4 = abap\_true ) \\n ( id = 'F' col4 = 6000 col\_ind-col4 = abap\_true ) ). \\n\\ \\nUPDATE demo\_cds\_update\_te FROM TABLE @ind\_tab \\n INDICATORS SET STRUCTURE col\_ind. TYPES ind\_wa TYPE demo\_cds\_update\_te WITH INDICATORS col\_ind. \\nDATA ind\_wa TYPE ind\_wa. \\n\\ \\nFINAL(indicator\_syntax) = \`SET STRUCTURE col\_ind\`. \\n\\ \\nind\_wa = VALUE #( id = 'I' col4 = 4000 col\_ind-col4 = '01' ). \\n\\ \\nUPDATE demo\_cds\_update\_te FROM @ind\_wa INDICATORS (indicator\_syntax). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapupdate.html abapupdate\_source.html