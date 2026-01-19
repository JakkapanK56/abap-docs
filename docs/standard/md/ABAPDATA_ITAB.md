---
title: "ABAPDATA_ITAB"
description: |
  ABAPDATA_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDATA_ITAB.htm"
abapFile: "ABAPDATA_ITAB.html"
keywords: ["select", "insert", "do", "try", "data", "types", "internal-table", "ABAPDATA", "ITAB"]
---

[Short Reference](ABAPDATA_SHORTREF.html)

`DATA itab \{\ \{TYPE [STANDARD]|SORTED|HASHED TABLE OF [REF TO] type\}`\\ 
          `|\ \{LIKE [STANDARD]|SORTED|HASHED TABLE OF dobj\}\ \}`\\ 
          ``[[`tabkeys`](ABAPDATA_KEYDEF.html)]``\\ 
          `[INITIAL SIZE n]`\\ 
          ``[`[VALUE IS INITIAL]`](ABAPDATA_OPTIONS.html)``\\ 
          ``[`[READ-ONLY]`](ABAPDATA_OPTIONS.html).``

This statement defines an internal table. The definition of the line type, the table category ([`STANDARD TABLE`](ABAPTYPES_TABCAT.html), [`SORTED TABLE`](ABAPTYPES_TABCAT.html), or [`HASHED TABLE`](ABAPTYPES_TABCAT.html)), and the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html)\\ [`INITIAL SIZE`](ABAPTYPES_ITAB.html) matches the definition of table categories in the section [`TYPES` - `TABLE OF`](ABAPTYPES_ITAB.html) exactly. Using `DATA`, these additions create a bound table type. The generic types `ANY TABLE` and `INDEX TABLE` cannot be used with `DATA`.

[`tabkeys`](ABAPDATA_KEYDEF.html) is used to define the [table keys](ABENTABLE_KEY_GLOSRY.html) of the internal table, which, unlike data types, cannot be generic.

Declaration of an internal hashed table. The line type corresponds to the structure of the database table `SPFLI`. Two key fields are defined for the primary table key. The other statements demonstrate the filling of the table with lines from the DDIC database table `SPFLI` and how a line is read.

-   When an internal table is created as a data object, only the administrative entry of an internal table is generated. The actual table lines are only inserted at runtime.
-   When an internal table is defined, the start value after the addition [`VALUE`](ABAPDATA_OPTIONS.html) must be `IS INITIAL`.
-   There are several obsolete variants for declaring standard tables that are described under [Obsolete Declarations](ABENITAB_DECLARE_OBSOLETE.html). In particular, the use of the additions [`WITH HEADER LINE`](ABAPDATA_HEADER_LINE.html) and [`OCCURS`](ABAPDATA_OCCURS.html) is obsolete.

DATA: spfli\_tab TYPE HASHED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid, \\n spfli\_wa LIKE LINE OF spfli\_tab. \\n\\ \\nSELECT \* \\n FROM spfli \\n WHERE carrid = 'LH' \\n INTO TABLE @spfli\_tab. \\n\\ \\nspfli\_wa = spfli\_tab\[ KEY primary\_key \\n carrid = 'LH' connid = '0400' \]. \\n\\ \\n... abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html