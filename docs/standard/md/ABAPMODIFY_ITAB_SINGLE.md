---
title: "ABAPMODIFY_ITAB_SINGLE"
description: |
  ABAPMODIFY_ITAB_SINGLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODIFY_ITAB_SINGLE.htm"
abapFile: "ABAPMODIFY_ITAB_SINGLE.html"
keywords: ["select", "insert", "loop", "while", "if", "class", "data", "types", "internal-table", "field-symbol", "ABAPMODIFY", "ITAB", "SINGLE"]
---

[Short Reference](ABAPMODIFY_ITAB_SHORTREF.html)

``... \{\ [`table_key`](ABAPMODIFY_ITAB_TABLE_KEY.html)  |\ [`index`](ABAPMODIFY_ITAB_INDEX.html)\ \} FROM wa``\\ 
                          `[TRANSPORTING comp1 comp2 ...]`\\ 
                          ``[[`result`](ABAPMODIFY_ITAB_RESULT.html)].``

[`... TRANSPORTING comp1 comp2 ...`](#ABAP_ONE_ADD@1@)

In this variant, the statement `MODIFY` assigns the content of work area `wa` to a line specified by a table key in [`table_key`](ABAPMODIFY_ITAB_TABLE_KEY.html) or a line number in [`index`](ABAPMODIFY_ITAB_INDEX.html). `wa` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

`TRANSPORTING` can be used to restrict the components `comp` to be modified. `result` can be used when changing a single line to set a reference to the changed line in the form of a field symbol or a data reference.

For access using table keys, index access to [sorted tables](ABENSORTED_TABLE_GLOSRY.html) and when the addition `TRANSPORTING` is used, the `wa` work area must be [compatible](ABENCOMPATIBLE_GLOSRY.html) with the line type of the internal table. Only when inserting using the primary table index in [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) without the addition `TRANSPORTING` can `wa` be incompatible with the line type of the internal table and is converted to the line type in accordance with the [conversion rules](ABENCONVERSION_RULES.html). If a conversion error occurs here, the exception cannot be handled using `CX_SY_CONVERSION_ERROR` and the associated runtime error occurs instead. If an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) is specified for `wa`, the line type of the internal table is used to determine the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html).

The addition `TRANSPORTING` has the effect that only the specified components [`comp1`](ABENITAB_COMPONENTS.html), [`comp2`](ABENITAB_COMPONENTS.html), ... of the work area are assigned to the corresponding components of the lines to be changed. For [sorted tables](ABENSORTED_TABLE_GLOSRY.html) and [hashed tables](ABENHASHED_TABLE_GLOSRY.html), no primary table key components can be specified after `TRANSPORTING`.

The components [`comp1`](ABENITAB_COMPONENTS.html), [`comp2`](ABENITAB_COMPONENTS.html), ... are specified in accordance with the rules in [Specifying Components](ABENITAB_COMPONENTS.html), with the restriction that, after `TRANSPORTING`, no attributes of classes can be addressed using the object component selector.

The position of letters from the first column of an internal table is determined in the system field `sy-abcde` and this value is assigned to the second column. The column is accessed using the table index and the statement `MODIFY` modifies the second column only.

-   When modifying a line in a table, the table keys that are read-only must be respected. While the overwriting of protected key fields in the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is not checked until runtime, this always produces a syntax error for the [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html). If a line whose [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) is read only is changed, `FROM wa` can therefore only be specified together with `TRANSPORTING`, and no key fields of the secondary key can be specified after `TRANSPORTING`.
-   Specifying a [calculation expression](ABENCALCULATION_EXPRESSION_GLOSRY.html) for `wa` is usually only a good idea for elementary line types.
-   The statement `MODIFY itab FROM wa` has the statement [`MODIFY dbtab FROM wa`](ABAPMODIFY_DBTAB.html) with identical syntax. If an internal table has the same name as a database table, a statement like this accesses the internal table.
-   Outside of classes, an [obsolete short form](ABENITAB_SHORT_FORMS.html) is possible where `FROM wa` can be omitted if the internal table has an identically named [header line](ABENHEADER_LINE_GLOSRY.html)\\ `itab`. The statement then uses the header line as the work area implicitly.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF line, \\n key TYPE c LENGTH 1, \\n pos TYPE i, \\n END OF line, \\n itab TYPE TABLE OF line WITH EMPTY KEY. \\n\\ \\nDATA(itab) = VALUE itab( ( key = 'U' ) ( key = 'H' ) ( key = 'K' ) ). \\n\\ \\nFINAL(abcde) = \`abcdefghijklmnopqrstuvwxyz\`. \\nLOOP AT itab INTO DATA(wa). \\n FINAL(idx) = sy-tabix. \\n wa = \\n VALUE #( BASE wa pos = find( val = abcde sub = wa-key ) + 1 ). \\n MODIFY itab \\n FROM wa \\n INDEX idx \\n TRANSPORTING pos. \\nENDLOOP. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapmodify\_itab.html