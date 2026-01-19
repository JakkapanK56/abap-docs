---
title: "ABENKEYNAME"
description: |
  ABENKEYNAME - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENKEYNAME.htm"
abapFile: "ABENKEYNAME.html"
keywords: ["loop", "do", "if", "case", "catch", "data", "types", "internal-table", "ABENKEYNAME"]
---

The name of the [table key](ABENTABLE_KEY_GLOSRY.html) can be specified in a range of statements and in table expressions for the processing of internal tables. The table key name can used to access a table line or to control processing. The following syntax applies to `keyname`:

`... key_name | (name)  ...`

The name of a table key can either be specified directly, as `key_name`, or dynamically, as the content of a parenthesized character-like data object `name`. This is not case-sensitive. If the name is specified directly, it must be known statically that the internal table has this key. With generic data types, the name can only be specified dynamically. If the name is specified dynamically and is incorrect, this raises an uncatchable exception.

The following can be specified:

Dynamic specification of the key according to which the `LOOP` loop is executed. The loop can be executed with the entries `skey` and `primary_key`. This is not case sensitive. Any other entries produce a runtime error.

-   a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) using its name
-   the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) using its predefined name `primary_key`
-   the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) using an alias
-   the table key used in a [`LOOP`](ABAPLOOP_AT_ITAB_COND.html)\-loop using its predefined name `loop_key`. In this case, the statement must be executed within the loop.

-   Normally secondary table keys are specified. Only if [searches](ABENTABLE_EXP_ITAB_LINE.html) are to be performed explicitly in a [table expression](ABENTABLE_EXPRESSIONS.html) using the primary table key does the key need be specified using its predefined name `primary_key` or an alias name.
-   When specifying the primary table key using `primary_key`, it is important to note that it can also be [empty](ABENITAB_EMPTY_KEY.html) for standard tables. This can produce unexpected behavior in statements where the key is used to specify the lines to be processed.

DATA(key) = \`skey\`. \\ncl\_demo\_input=>request( CHANGING field = key ). \\n\\ \\nDATA itab TYPE TABLE OF i \\n WITH NON-UNIQUE KEY primary\_key COMPONENTS table\_line \\n WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line. \\n\\ \\nitab = VALUE #( ( 3 ) ( 2 ) ( 1 ) ). \\n\\ \\nLOOP AT itab INTO FINAL(wa) USING KEY (key). \\n cl\_demo\_output=>write( wa ). \\nENDLOOP. \\ncl\_demo\_output=>display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html