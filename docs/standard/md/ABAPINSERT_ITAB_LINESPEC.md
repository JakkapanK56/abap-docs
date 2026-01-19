---
title: "ABAPINSERT_ITAB_LINESPEC"
description: |
  ABAPINSERT_ITAB_LINESPEC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINSERT_ITAB_LINESPEC.htm"
abapFile: "ABAPINSERT_ITAB_LINESPEC.html"
keywords: ["insert", "update", "loop", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "field-symbol", "ABAPINSERT", "ITAB", "LINESPEC"]
---

[Short Reference](ABAPINSERT_ITAB_SHORTREF.html)

`... wa`\\ 
  `|\ \{INITIAL LINE\}`\\ 
  ``|\ \{LINES OF jtab [FROM idx1]\ [TO idx2]\ [STEP n]\ [USING KEY [`keyname`](ABENKEYNAME.html)]\} ...``

[1. `... wa`](#ABAP_ALTERNATIVE_1@2@)

[2. `... INITIAL LINE`](#ABAP_ALTERNATIVE_2@2@)

[3. `... LINES OF jtab [FROM idx1]\ [TO idx2]\ [STEP n]\ [USING KEY keyname]`](#ABAP_ALTERNATIVE_3@2@)

Either a work area `wa`, an initial line `INITIAL LINE`, or multiple lines of an internal table `jtab` can be appended.

A new line is created to which the content of the work area `wa` is assigned. `wa` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html). The following applies here:

If a conversion error occurs in the conversion, the exception cannot be handled using `CX_SY_CONVERSION_ERROR` and the associated runtime error occurs instead. If an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) is specified for `wa`, the line type of the internal table is used to determine [calculation type](ABENCALCULATION_TYPE_GLOSRY.html).

When inserting individual lines into an internal table with non-unique [table keys](ABENITAB_KEY.html), the order of the duplicate lines in relation to these keys is determined by the insertion order of the individual lines. In the case of secondary table keys, this occurs during the [lazy update](ABENLAZY_UPDATE_GLOSRY.html).

If there is a conflict with the existing unique primary table key, no line is inserted. If a key access occurs, `sy-subrc` is set to 4. In an index access, however, an uncatchable exception is raised. In the case of a conflict with a unique secondary table key, a catchable exception of the class `CX_SY_ITAB_DUPLICATE_KEY` is raised.

Insertion of a structure constructed using the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) into an internal table.

A new line is created in which every component contains its type-dependent [initial value](ABENBUILT_IN_TYPES_COMPLETE.html).

Insertion of an initial line that is simultaneously linked to a field symbol using the addition [`ASSIGNING`](ABAPINSERT_ITAB_RESULT.html). This means that the initial line can be processed directly.

The lines of an internal table `jtab` are appended as a block. `jtab` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). The line types of `itab` and `jtab` must be compatible when inserting using the table key and convertible when inserting using the index.

The lines to be inserted are taken sequentially from the table `jtab`. The order in which the lines are taken is the same as for the statement [`LOOP`](ABAPLOOP_AT_ITAB.html) and can also be affected by specifying a table key [`keyname`](ABENKEYNAME.html) after `USING KEY`. The additions `FROM idx1` and `TO idx2` have the same syntax and effect as for [`LOOP`](ABAPLOOP_AT_ITAB_COND.html) with respect to `jtab`. `STEP n` has the same syntax and effect as for [`LOOP`](ABAPLOOP_AT_ITAB_COND.html) with the exception that the value of `n` must be positive.

When inserting lines as a block into an internal table with non-unique [primary table keys](ABENPRIMARY_TABLE_KEY_GLOSRY.html), the order of the duplicate lines in relation to this primary key is preserved. This does not apply to [secondary keys](ABENSECONDARY_KEY_GLOSRY.html).

If there is a conflict with an existing unique table key, an uncatchable exception is raised when inserting multiple lines from an internal table. If a conversion error occurs when lines are inserted, the exception cannot be handled using `CX_SY_CONVERSION_ERROR` and the associated runtime error occurs instead.

When an internal table is constructed, the constructor operators [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) and [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) can also insert multiple lines from a table into the target table using [`LINES OF`](ABENNEW_CONSTRUCTOR_PARAMS_LSPC.html).

Insertion of the lines of an internal table `itab` into the same table. The lines are inserted in front of the existing first line and in ascending order due to the specification of the sorted secondary key `skey` being specified.

Insertion of the lines of an internal table `itab` into the same table, defined by `FROM`, `TO`, and `STEP`. The lines are inserted in front of the existing first line and in ascending order due to the specification of the sorted secondary key `skey` being specified.

-   When inserting using the table key, `wa`\\ [must be compatible with](ABENCOMPATIBLE_GLOSRY.html) the line type of the internal table. Exceptions to this rule are any [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) whose result type can be incompatible with the line type and whose result is converted to the line type if possible.
-   When inserting using the table index, `wa` can be incompatible with the line type of the internal table and is, if necessary, converted to the relevant line type, in accordance with the [conversion rules](ABENCONVERSION_RULES.html).

-   When inserting using the table key, incompatible work areas can be converted to the line type using the conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html).
-   Specifying a [calculation expression](ABENCALCULATION_EXPRESSION_GLOSRY.html) for `wa` is usually only useful for elementary line types.
-   Outside of classes, an [obsolete short form](ABENITAB_SHORT_FORMS.html) is possible where `wa INTO` can be omitted if the internal table has an identically named [header line](ABENHEADER_LINE_GLOSRY.html)\\ `itab`. The statement then uses the header line as the work area implicitly.

-   If there is already a duplicate entry in a sorted target table, the duplicates of the source block are inserted in their original order in front of the first duplicate in the target table.
-   When inserting in standard tables, however, `INSERT` always works like the statement [`APPEND`](ABAPAPPEND.html) and the lines are appended in their original order after the last line as in the addition [`LINES OF`](ABAPAPPEND_LINESPEC.html).

DATA itab TYPE HASHED TABLE OF scarr WITH UNIQUE KEY carrid. \\n\\ \\nINSERT VALUE #( carrid = 'XXX' \\n carrname = 'yyyyyyyyy' \\n currcode = 'ZZ' \\n url = '...' ) INTO TABLE itab. DATA itab TYPE TABLE OF spfli. \\n\\ \\nFIELD-SYMBOLS LIKE LINE OF itab. \\n\\ \\nINSERT INITIAL LINE INTO itab INDEX 1 ASSIGNING . \\n \-carrid = '...'. \\n... FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itab TYPE TABLE OF i \\n WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line. \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i > 10 ( 11 - i ) ). \\n\\ \\nINSERT LINES OF itab USING KEY skey INTO itab INDEX 1. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itab TYPE TABLE OF i \\n WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line. \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i > 5 ( 6 - i ) ). \\n\\ \\nINSERT LINES OF itab FROM 1 TO 5 STEP 2 \\n USING KEY skey INTO itab INDEX 1. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapinsert\_itab.html