---
title: "ABENITAB_KEY_PRIMARY"
description: |
  ABENITAB_KEY_PRIMARY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENITAB_KEY_PRIMARY.htm"
abapFile: "ABENITAB_KEY_PRIMARY.html"
keywords: ["select", "do", "if", "case", "data", "types", "internal-table", "ABENITAB", "KEY", "PRIMARY"]
---

Each internal table has a primary table key that allows access to individual lines of the table by specifying a key.

Declaration of a hashed table with a unique primary key. The table is filled with data from a database table and accessed using a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html) with values specified for the primary key.

-   The components of the primary table key are declared using the [`UNIQUE|NON-UNIQUE KEY`](ABAPTYPES_PRIMARY_KEY.html) additions of the statements [`TYPES`](ABAPTYPES_PRIMARY_KEY.html), [`DATA`](ABAPDATA_PRIMARY_KEY.html), and so on.
-   The [standard key](ABENITAB_STANDARD_KEY.html), which can be declared both explicitly and implicitly, has a special role.
-   The primary table key of a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) can also be [empty](ABENITAB_EMPTY_KEY.html), that is, it does not contain any key fields.
-   In the case of key accesses for internal tables, the primary key is always used implicitly in [processing statements](ABENTABLE_PROCESSING_STATEMENTS.html) as long as no secondary key is specified. In [table expressions](ABENTABLE_EXPRESSIONS.html), the primary key must also be specified explicitly.
-   The primary key has the predefined name `primary_key`, with which it can also be addressed explicitly in processing statements. In table expressions, `primary_key` or an alias name must be specified if the primary key is to be used explicitly.
-   Access to an internal table using the primary table key is determined by the [table category](ABENTABLE_CATEGORY_GLOSRY.html) and not the table key. For sorted tables and hashed tables, key access is always optimized using the primary table key. Primary key access to standard tables, however, performs a linear search.
-   The key fields of the primary table key of sorted tables and hashed tables are always read-only.
-   In the case of sorted tables and hashed tables, separate key administration exists for the primary table key, which enables optimized access but also affects the [memory requirement](ABENITAB_KEY_MEMORY.html) of the internal table. There is no separate administration for the primary table key of standard tables.

-   Since sorted tables and hashed tables have real key administration for the primary key, unlike standard tables, these tables are also grouped under the term [key tables](ABENKEY_TABLE_GLOSRY.html).
-   To achieve optimized key access to standard tables, [secondary keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) can be used.

DATA carrid TYPE spfli-carrid VALUE 'LH'. \\ncl\_demo\_input=>add\_field( CHANGING field = carrid ). \\nDATA connid TYPE spfli-connid VALUE '0400'. \\ncl\_demo\_input=>request( CHANGING field = connid ). \\n\\ \\nDATA spfli\_tab \\n TYPE HASHED TABLE OF spfli \\n WITH UNIQUE KEY primary\_key COMPONENTS carrid connid. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @spfli\_tab. \\n\\ \\ncl\_demo\_output=>display( \\n VALUE #( spfli\_tab\[ KEY primary\_key \\n carrid = carrid \\n connid = connid \] OPTIONAL ) ). abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendobj\_itab.html abenitab\_key.html