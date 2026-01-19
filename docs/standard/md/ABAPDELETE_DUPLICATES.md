---
title: "ABAPDELETE_DUPLICATES"
description: |
  ABAPDELETE_DUPLICATES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDELETE_DUPLICATES.htm"
abapFile: "ABAPDELETE_DUPLICATES.html"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "class", "data", "types", "internal-table", "ABAPDELETE", "DUPLICATES"]
---

[Short Reference](ABAPDELETE_ITAB_SHORTREF.html)

``... ADJACENT DUPLICATES FROM itab [USING KEY [`keyname`](ABENKEYNAME.html)]``\\ 
             ``[COMPARING \{[`comp1`](ABENITAB_COMPONENTS.html)\ [`comp2`](ABENITAB_COMPONENTS.html) ...\}|\{ALL FIELDS\}] ...``

[1. `... USING KEY keyname`](#ABAP_ADDITION_1@3@)

[2. `... COMPARING \{comp1 comp2 ...\}|\{ALL FIELDS\}`](#ABAP_ADDITION_2@3@)

Using these additions, the statement `DELETE` deletes all lines except for the first line of the group in groups of consecutive lines that have the same content in certain components. If the addition `COMPARING` is not specified, the groups are determined by the content of the key fields of the table key used. If no explicit table key is specified, the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is used implicitly.

The order of the table lines that are used to form the groups is determined by the table key used. If no key `keyname` is specified after `USING KEY`, the order is the same as when processing a statement [`LOOP`](ABAPLOOP_AT_ITAB.html) without an explicit key specification.

Lines are considered to be duplicate if the content of neighboring line matches in the components examined. In the case of multiple duplicate lines following one another, all but the first line are deleted.

If the [primary table key](ABENPRIMARY_KEY_GLOSRY.html) is used to access a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) and the key is [empty](ABENITAB_EMPTY_KEY.html), no lines are deleted. If this is known statically, the syntax check produces a warning.

Deletion of all multiple lines with respect to the primary key in the internal table `city_connections`.

The addition `USING KEY` can be used to specify a table key in [`keyname`](ABENKEYNAME.html) with which the processing is executed. The specified table key affects the order in which the table lines are accessed, and the evaluation of the remaining conditions.

If the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is specified, the processing behaves in the same way as if no key were explicitly specified. If a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) is specified, the order in which the lines are accessed is as follows:

Unlike the processing of a hashed table when a primary key is used, a preceding sort using the statement `SORT` does not affect the processing order when a secondary hash key is specified.

The statement `DELETE` deletes all multiple numbers from the internal table `itab`. The table then contains a maximum of ten lines.

If the addition `COMPARING` is specified, the groups are determined either by the content of the specified components `comp1 comp2 ...` or the content of all components `ALL FIELDS`. The specification of individual components `comp` is made as described in the section [Specification of Components](ABENITAB_COMPONENTS.html). Access to class attributes is possible using the object component selector.

Specifying the [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` has the same effect as specifying `ALL FIELDS`.

Reading of specific data from two tables in the `ITF` framework , where `DOKIL` is the index table for `DOKHL`. After the multiple numbers are deleted, it is expected that both tables contain the same number of lines. The table declared inline, `dokhl_tab`, has an empty primary key, which means that the component `object` is specified explicitly using `COMPARING`.

-   The use of `ADJACENT DUPLICATES` usually requires a suitable sorting by the components compared in the statement.
-   When using the primary table key, it should be noted that this key can be the [standard key](ABENSTANDARD_KEY_GLOSRY.html), which can also have unexpected consequences:

-   For structured line types, the standard key covers all character-like and byte-like components.
-   The standard key of a standard table can be [empty](ABENITAB_EMPTY_KEY.html).

-   **Specification of a [sorted key](ABENSORTED_KEY_GLOSRY.html)**
-   The lines are processed by ascending line number in the [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html)
-   **Specification of a [hash key](ABENHASH_KEY_GLOSRY.html)**
-   The lines are processed in the order in which they were inserted into the table.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: BEGIN OF city\_connection, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n distid TYPE spfli-distid, \\n distance TYPE spfli-distance, \\n END OF city\_connection. \\n\\ \\nDATA city\_connections TYPE SORTED TABLE OF city\_connection \\n WITH NON-UNIQUE KEY cityfrom cityto \\n distid distance. \\n\\ \\nSELECT cityfrom, cityto, distid, distance \\n FROM spfli \\n INTO TABLE @city\_connections. \\n\\ \\nDELETE ADJACENT DUPLICATES FROM city\_connections. \\n\\ \\nout->write( city\_connections ). \\n\\ \\nout->display( ). DATA itab TYPE TABLE OF i WITH EMPTY KEY \\n WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line. \\n\\ \\nFINAL(t) = CONV i( cl\_demo\_date\_time=>get\_utc\_time( ) ). \\nFINAL(rnd) = cl\_abap\_random\_int=>create( seed = t \\n min = 1 \\n max = 10 ). \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i > 100 ( rnd->get\_next( ) ) ). \\n\\ \\nDELETE ADJACENT DUPLICATES FROM itab USING KEY skey. SELECT object \\n FROM dokil \\n WHERE id = 'SD' AND \\n object LIKE 'AB%' AND \\n langu = @sy-langu AND \\n typ = 'E' \\n ORDER BY object \\n INTO TABLE @FINAL(dokil\_tab). \\n\\ \\nSELECT object \\n FROM dokhl \\n WHERE id = 'SD' AND \\n object LIKE 'AB%' AND \\n langu = @sy-langu AND \\n typ = 'E' \\n ORDER BY object, dokversion DESCENDING \\n INTO TABLE @DATA(dokhl\_tab). \\n\\ \\nDELETE ADJACENT DUPLICATES FROM dokhl\_tab COMPARING object. \\n\\ \\nASSERT lines( dokhl\_tab ) = lines( dokil\_tab ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapdelete\_itab.html