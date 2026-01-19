---
title: "ABENITAB_STANDARD_KEY"
description: |
  ABENITAB_STANDARD_KEY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENITAB_STANDARD_KEY.htm"
abapFile: "ABENITAB_STANDARD_KEY.html"
keywords: ["do", "while", "if", "data", "types", "internal-table", "ABENITAB", "STANDARD", "KEY"]
---

The standard key is a special [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) of an internal table.

The key fields of the standard key are defined as follows:

Empty standard keys are not possible for sorted tables and hashed tables, and an error occurs if an attempt is made to create a key like this.

The standard key can be declared as follows:

Using standard keys is critical for the following reasons:

For this reason, the primary key should be declared by listing the components explicitly, if possible. In particular, the primary key must not be set as the standard key by mistake, the key must not be forgotten in declarations of standard tables using `DATA`, and the generic table type must not be used unknowingly.

Internal table with standard key. In the structure `SCARR`, all five components meet the requirements for the standard key and are used as key fields. In a key access using a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html), the syntax check requires that each key field of the primary table key is specified.

-   In tables with a structured line type, the standard key is formed from all components with [character-like](ABENCHARLIKE_DATA_TYPE_GLOSRY.html) and [byte-like data types](ABENBYTE_LIKE_DATA_TYP_GLOSRY.html), while resolving any substructures into elementary components. If the line type does not contain any components like these, the standard key is [empty](ABENITAB_EMPTY_KEY.html) for standard tables, meaning it does not contain any key fields.
-   The standard key for tables with non-structured line types is the entire table line, if the line type itself is not table-like. If the line type is table-like, the standard key is [empty](ABENITAB_EMPTY_KEY.html) for standard tables.

-   In tables with non-structured line types, the standard key can also have a numeric type or reference type. This does not apply to the key fields if the line types are structured.
-   The [static boxes](ABENSTATIC_BOX_GLOSRY.html) of a structured line type are handled like regular components with respect to the standard key.

-   Explicitly, using the additions [`UNIQUE|NON-UNIQUE KEY`](ABAPTYPES_PRIMARY_KEY.html) of the statements [`TYPES`](ABAPTYPES_PRIMARY_KEY.html), [`DATA`](ABAPDATA_PRIMARY_KEY.html) and so on, where the addition `DEFAULT KEY` is specified instead of the list of components.
-   Implicitly, if no explicit primary key specification is made in the declaration of a standard table with the statement [`DATA`](ABAPDATA_PRIMARY_KEY.html).
-   Implicitly, if a standard table type with a [generic primary table key](ABAPTYPES_KEYDEF.html) is specified behind `TYPE` in the statement [`DATA`](ABAPDATA_REFERRING.html).

-   It is not usually enough to identify the key fields using their data type and not their semantic properties. This often leads to unexpected behavior in sorts and other accesses.
-   The fact that standard keys in standard tables can be [empty](ABENITAB_EMPTY_KEY.html) often causes unexpected behavior as well. For example, using keys like this for [sorting](ABAPSORT_ITAB.html) has no effect, whereas a corresponding [read](ABAPREAD_TABLE.html) finds the first line.
-   The standard key often contains too many key fields, which can produce performance problems in key accesses.
-   If using the standard key and a structured line type, all character-like and byte-like fields of sorted tables and hashed tables are read-only, which can cause unexpected runtime errors.

DATA scarr\_tab \\n TYPE HASHED TABLE OF scarr \\n WITH UNIQUE DEFAULT KEY. \\n\\ \\n... \\n\\ \\nFINAL(scarr\_line) = \\n VALUE #( scarr\_tab\[ KEY primary\_key \\n mandt = sy-mandt \\n carrid = '...' \\n carrname = '...' \\n currcode = '...' \\n url = '...' \] OPTIONAL ). abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendobj\_itab.html abenitab\_key.html abenitab\_key\_primary.html