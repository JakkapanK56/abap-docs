---
title: "ABAPSELECT_CREATING"
description: |
  ABAPSELECT_CREATING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_CREATING.htm"
abapFile: "ABAPSELECT_CREATING.html"
keywords: ["select", "if", "case", "class", "data", "types", "ABAPSELECT", "CREATING"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

`... CREATING \{  READER|LOCATOR FOR \{ COLUMNS blob1 blob2 ... clob1 clob2 ... \}\                                   |\ \{ ALL [OTHER]\ [BLOB|CLOB] COLUMNS \}\                 [READER|LOCATOR FOR ...]\ \}`\\ 
           `|\ \{  (crea_syntax) \}  ...`

[1. `... READER|LOCATOR`](#ABAP_ADDITION_1@3@)

[2. `... [ALL [OTHER]\ [BLOB|CLOB]] COLUMNS [blob1 blob2 ... clob1 clob2 ...]`](#ABAP_ADDITION_2@3@)

[3. `... (crea_syntax)`](#ABAP_ADDITION_3@3@)

The addition `CREATING` must be specified after [`INTO`](ABAPINTO_CLAUSE.html) or [`APPENDING`](ABAPINTO_CLAUSE.html) when a reference variable for a [LOB handle](ABENLOB_HANDLE_GLOSRY.html) is assigned to a [LOB](ABENLOB_GLOSRY.html) of the result set as a target field and the [static type](ABENSTATIC_TYPE_GLOSRY.html) of this reference variable is one of the following three [LOB interfaces](ABENLOB_INTERFACES.html):

The specifications after `CREATING` determine the class from which the associated LOB handles are created. For all other possible static types, the class can be determined from the static type and the LOB type. `CREATING` cannot be specified in this case.

The `CREATING` addition can be specified either statically or dynamically. In the static variant, the class and columns are determined using additions. In the dynamic variant, the syntax of the static variants is specified in `crea_syntax`.

The syntax and the rules for the additions after `CREATING` correspond to the type and columns specified for the derivation of LOB handle structures with [`TYPES`](ABAPTYPES_LOB_HANDLE.html). Unlike the statement [`TYPES`](ABAPTYPES_LOB_HANDLE.html), the [type specified](ABAPTYPES_LOB_HANDLE_TYPE.html) is limited here to `READER` and `LOCATOR`, and only components that are typed with a LOB interface are respected. The types specified for the first two specifications after `CREATING` must be different.

The addition `CREATING` cannot be used in combination with SQL expressions that return [LOBs](ABENLOB_GLOSRY.html). It can only be used with LOB fields directly.

These additions determine the LOB handle class for each of the columns specified after it.

The assignment to the classes is the same as the [type specified](ABAPTYPES_LOB_HANDLE_TYPE.html) in the derivation of a LOB handle structure using [`TYPES`](ABAPTYPES_LOB_HANDLE.html), except that here it is the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) that is determined and not the static type.

After a row is read, the dynamic type of `reader` is `CL_ABAP_DB_X_READER`.

These additions assign the previous type specifications to the columns of the result set. The meaning of the additions is the same as the [columns specified](ABAPTYPES_LOB_HANDLE_COLUMNS.html) in the derivation of an LOB handle structure using [`TYPES`](ABAPTYPES_LOB_HANDLE.html). The difference is that the set of columns used consists exactly of those columns from the result set that were assigned to a reference variable whose static type is an [LOB interface](ABENLOB_INTERFACES.html):

The combination options for columns specified with one another and with types specified are the same as for [`TYPES`](ABAPTYPES_LOB_HANDLE.html). Specifically, the column specified as `ALL OTHER ...` must be the last column specified.

Like the previous example, but the column `PICTURE` is selected automatically here.

As an alternative to static variants, a data object `crea_syntax` can be specified in parentheses which contains the syntax of the static additions or is initial when executing the statement. The same applies to `crea_syntax` as to `column_syntax` when specifying columns dynamically in the [`SELECT` list](ABAPSELECT_LIST.html). If the content of `crea_syntax` is initial, the addition `CREATING` is ignored.

Like the previous example, but the items after `CREATING` are specified dynamically here.

-   `IF_ABAP_DB_LOB_HANDLE`
-   `IF_ABAP_DB_CLOB_HANDLE`
-   `IF_ABAP_DB_BLOB_HANDLE`

-   `READER` creates [reader streams](ABENREADER_STREAM_GLOSRY.html) for all of the columns specified.
-   `LOCATOR` creates [locators](ABENLOCATOR_GLOSRY.html) for all of the columns specified after it.

-   Individual columns for which this is not the case must not be specified.
-   The specification of `ALL ... COLUMNS` only respects such columns.

-   The specification of `ALL ... COLUMNS` also respects columns which are added by later enhancements to the data sources.
-   The actual names must be used for the columns specified as `blob1`, `blob2`, `clob1`, `clob2`, .... The alias names defined using [`AS`](ABAPSELECT_LIST.html) are ignored.
-   Columns of the type [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html) are not supported as [BLOBs](ABENBLOB_GLOSRY.html).
-   The columns cannot be specified using [path expressions](ABENABAP_SQL_PATH.html).

DATA reader TYPE REF TO if\_abap\_db\_lob\_handle. \\n\\ \\nSELECT SINGLE picture \\n FROM demo\_blob\_table \\n WHERE name = '...' \\n INTO @reader CREATING READER FOR COLUMNS picture. DATA reader TYPE REF TO if\_abap\_db\_blob\_handle. \\n\\ \\nSELECT SINGLE picture \\n FROM demo\_blob\_table \\n WHERE name = '...' \\n INTO @reader CREATING READER FOR ALL BLOB COLUMNS. DATA reader TYPE REF TO if\_abap\_db\_blob\_handle. \\n\\ \\nFINAL(crea\_syntax) = \`READER FOR ALL BLOB COLUMNS\`. \\n\\ \\nSELECT SINGLE picture \\n FROM demo\_blob\_table \\n WHERE name = '...' \\n INTO @reader CREATING (crea\_syntax). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapinto\_clause.html abenselect\_into\_lob\_handles.html