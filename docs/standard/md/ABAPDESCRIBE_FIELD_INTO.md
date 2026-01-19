---
title: "Component name"
description: |
  `idx_user_type` Name of a user-defined type, that is, a type defined by a `TYPES`(ABAPTYPES.html) statement. Derived types (... TYPE a-b) and structures from the ABAP Dictionary are not considered to be user-defined types. `context` For user-defined types only: The context in which the type is def
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDESCRIBE_FIELD_INTO.htm"
abapFile: "ABAPDESCRIBE_FIELD_INTO.html"
keywords: ["select", "do", "if", "try", "method", "data", "types", "internal-table", "ABAPDESCRIBE", "FIELD", "INTO"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

`DESCRIBE FIELD dobj INTO td.`

All properties of the field `f`, its components, subcomponents, and so on, are in the output of the field `td` (type description). `td` must have the type `sydes_desc`, which is defined in the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `SYDES`.

The structure `sydes_desc` has two table-like components `types` and `names`:

The type description table (`types`) not only stores information about the tree structure but also further information about the type of `f` or its components. In particular, this includes all information that can be determined using the usual additions of `DESCRIBE FIELD`. In detail, `types` contains the following columns:

`idx_name`

Component name

`idx_user_type`

Name of a user-defined type, that is, a type defined by a [`TYPES`](ABAPTYPES.html) statement. Derived types (... TYPE a-b) and structures from the ABAP Dictionary are not considered to be user-defined types.

`context`

For user-defined types only: The context in which the type is defined. Possible values are defined in the constant sydes\_context of the type pool `SYDES`. These constants should only be used to carry out a comparison. The following type contexts are distinguished: 
\\ 
sydes\_context-progran: Program-global type 
sydes\_context-form: form-local type 
sydes\_context-function: function-local type 
sydes\_context-method: method-local type

`idx_context_name`

For user-defined types only: 
In a local context: The name of the FORM or FUNCTION in which the type was defined. The name of the associated program is then the first entry in the name table. 
In a global context: The name of the program in which the type was defined.

`idx_edit_mask`

[Conversion exit](ABENCONVERSION_EXIT_GLOSRY.html), like the addition EDIT MASK in a simple DESCRIBE.

`idx_help_id`

Help ID in references to fields from the ABAP Dictionary

`length`

Internal length, like the addition LENGTH in a simple DESCRIBE

`output_length`

Output length, like the addition OUTPUT-LENGTH in a simple DESCRIBE

`decimals`

Number of [decimal digits](ABENFRACT_DIGIT_GLOSRY.html), like the addition DECIMALS in a simple DESCRIBE

`type`

ABAP type, like the addition TYPE in a simple DESCRIBE. If DESCRIBE INTO is applied to a nested structure that contains a [boxed component](ABENBOXED_COMPONENT_GLOSRY.html), the type is returned with the internal ID j ([static box](ABENSTATIC_BOX_GLOSRY.html)).

`table_kind`

The [table category](ABAPTYPES_TABCAT.html) is stored here for the components that represent an internal table. The same values are returned as for the variant [`DESCRIBE TABLE itab KIND k`](ABAPDESCRIBE_TABLE.html). For components that do not represent a table, the return value is set to sydes\_kind-undefined (see type pool `SYDES`).

The following definition of the complex data type `employee_struc` is to be assumed

The structure of the type can be determined by collecting the type pool `SYDES` as follows:

The following table shows some selected columns of the type description table `td-types`. For a better overview, the names of the columns `idx_name`, `idx_user_type`, and `idx_edit_mask` have been abbreviated:

It should be noted that the entries in lines 6 and 7 represent internal tables (ABAP type h). An internal table always has an entry for the associated line type (lines 13 and 17).
\\
The indexes in the lines 5 to 7 refer to entries in the name table `td-names`. Taking, for example, line 3, the associated component name in `td-names` is found from line 7 (`name`) onward and the associated user type from line 5 (`name_struc`) onward.
\\
The name table `td-names` contains the following entries. It should be noted that the names `SALARY_PER_MONTH` and `ABSENCE_TIME_STRUC` are stored in two parts:

   |CONTINUE|NAME                   |CONTINUE|NAME\\ 
\---|--------|--------------     ----|--------|--------------\\ 
 01 |        |DESCTEST            12 |        |PHONE\\ 
 02 |        |EMPLOYEE\_STRUC      13 |        |FIRST\\ 
 03 |        |SBOOK-CUSTOMID      14 |        |LAST\\ 
 04 |        |==ALPHA             15 |        |STREET\\ 
 05 |        |NAME\_STRUC          16 |        |ZIPCODE\\ 
 06 |        |ID                  17 |        |PLACE\\ 
 07 |        |NAME                18 |   \*    |ABSENCE\_TIME\_ST\\ 
 08 |        |ADDRESS             19 |        |RUC\\ 
 09 |   \*    |SALARY\_PER\_MONT     20 |        |DAY\\ 
 10 |        |H                   21 |        |FROM\\ 
 11 |        |ABSENT              22 |        |TO

-   The tree structure of the type belonging to `f` is mapped in `types`. The components of a node are stored closely in the table `types`. The beginning and end of the line area that represents the components are stored in `types-from` and `types-tp`. The reference to the superior node can be found in `types-back`. If no superior or subordinate node exists, then this is marked by the value 0 (for the relevance of further components, see the following sections).
-   The names of components, types, and so on. are not stored directly in `types`. Instead, the components `types-idx_...` hold an index in the name table `names`. The value 0 indicates that there is no reference to the name table.
-   `names` contains the names in the component `names-name`, possibly split into multiple parts. If a name continues in the following line, this is indicated by an asterisk ('\*') in the component `names-continue`.

TYPES: \\n\\ \\n BEGIN OF name\_struc, \\n first TYPE c LENGTH 20, \\n last TYPE c LENGTH 20, \\n END OF name\_struc, \\n\\ \\n BEGIN OF absence\_time\_struc, \\n day TYPE d, \\n from TYPE t, \\n to TYPE t, \\n END OF absence\_time\_struc, \\n\\ \\n phone\_number TYPE n LENGTH 20, \\n\\ \\n BEGIN OF employee\_struc, \\n id LIKE sbook-customid, \\n name TYPE name\_struc, \\n BEGIN OF address, \\n street TYPE c LENGTH 30, \\n zipcode TYPE n LENGTH 4, \\n place TYPE c LENGTH 30, \\n END OF address, \\n salary\_per\_month TYPE p LENGTH 10 DECIMALS 3, \\n absent TYPE STANDARD TABLE OF absence\_time\_struc \\n WITH NON-UNIQUE DEFAULT KEY, \\n phone TYPE STANDARD TABLE OF phone\_number \\n WITH NON-UNIQUE DEFAULT KEY, \\n END OF employee\_struc. DATA: employee TYPE employee\_struc, \\n td TYPE sydes\_desc. \\n\\ \\nDESCRIBE FIELD employee INTO td. |FROM| TO |BACK|NAME|UTYP|EMSK|TYPE \\n---|----|----|----|----|----|----|---- \\n 01 | 2 | 7 | 0 | 0 | 2 | 0 | v \\n 02 | 0 | 0 | 1 | 6 | 0 | 4 | N \\n 03 | 8 | 9 | 1 | 7 | 5 | 0 | u \\n 04 | 10 | 12 | 1 | 8 | 0 | 0 | u \\n 05 | 0 | 0 | 1 | 9 | 0 | 0 | P \\n 06 | 13 | 13 | 1 | 11 | 0 | 0 | h \\n 07 | 17 | 17 | 1 | 12 | 0 | 0 | h \\n 08 | 0 | 0 | 3 | 13 | 0 | 0 | C \\n 09 | 0 | 0 | 3 | 14 | 0 | 0 | C \\n 10 | 0 | 0 | 4 | 15 | 0 | 0 | C \\n 11 | 0 | 0 | 4 | 16 | 0 | 0 | N \\n 12 | 0 | 0 | 4 | 17 | 0 | 0 | C \\n 13 | 14 | 16 | 6 | 0 | 18 | 0 | u \\n 14 | 0 | 0 | 13 | 20 | 0 | 0 | D \\n 15 | 0 | 0 | 13 | 21 | 0 | 0 | T \\n 16 | 0 | 0 | 13 | 22 | 0 | 0 | T \\n 17 | 0 | 0 | 7 | 0 | 0 | 0 | N abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendescribe\_field.html abapdescribe.html abendescribe\_internal.html