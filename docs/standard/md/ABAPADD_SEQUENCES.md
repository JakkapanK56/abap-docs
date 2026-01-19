---
title: "ABAPADD_SEQUENCES"
description: |
  ABAPADD_SEQUENCES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPADD_SEQUENCES.htm"
abapFile: "ABAPADD_SEQUENCES.html"
keywords: ["select", "do", "if", "catch", "class", "data", "ABAPADD", "SEQUENCES"]
---

[Short Reference](ABAPADD_THEN_FROM_SHORTREF.html)

`ADD \{\ \{ dobj1 THEN dobj2 UNTIL dobj`\\ 
      `\{\ \{TO result\}\ |\ \{GIVING result [ACCORDING TO sel]\}\ \}\ \}`\\ 
    `|\ \{ dobj FROM pos1 TO pos GIVING result \}\ \}`\\ 
    `[RANGE range].`

These variants of the statement [`ADD`](ABAPADD.html), which are forbidden in classes, adds strings of data objects that are stored in equal distances from one another in the memory.

In both variants, an uncatchable exception is raised if addresses are accessed that do not contain suitable data objects.

All data objects of the string must be within a structure. If this is not known statically in the syntax check, a structure `range` with the addition `RANGE` must be specified. If the data objects of the string are not part of the specified structure when the statement is executed, an uncatchable exception is raised.

The [calculation type](ABENARITH_TYPE.html) of the addition is, as usual, determined from the operands involved.

The function of these variants of the `ADD` statement depends on the structure of the working memory. Memory-based operations of this type should be avoided. They are not allowed in classes and can be replaced as required by the statement [`ASSIGN`](ABAPASSIGN.html) with the addition [`INCREMENT`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html).

The components of the structure `numbers` specified on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) are added and the total is assigned to variable `sum`.

`CX_SY_ARITHMETIC_OVERFLOW`

`CX_SY_CONVERSION_OVERFLOW`

-   In the variant with `THEN` and `UNTIL`, the string is defined by the distance between the data objects `dobj1` and `dobj2`. At all memory positions whose distances to `dobj1` are multiple values of this distance (up to and including the position `dobj`), [numeric data objects](ABENNUMERIC_DATA_OBJECT_GLOSRY.html) with the same [technical type properties](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html) must be stored. The content of all these data objects is added. In the variant with `TO`, the total is added to the content of the data object `result` and the result is assigned to it. In the variant with `GIVING`, the total is directly assigned to the data object `result`. The data object `result` must be a numeric variable. If the addition `ACCORDING` is used, a data object of the string is added to the total only if its position in the string meets the condition in the [ranges table](ABENRANGES_TABLE_GLOSRY.html)\\ `sel`. The components `low` and `high` in the ranges table expect the data type `i`.
-   In the variant with `TO` and `FROM`, the string is formed by data objects directly adjacent in the memory, whose first data object is `dobj` and which must all have the same numeric data type. `pos1` and `pos` expect data objects of the type `i`, whose values define a subset of the string. The content of the data objects of the substring is added and assigned to the data object `result`. The data object `result` must be a numeric variable. If `pos1` or `pos` contain negative values or if `pos1` is greater than `pos`, the statement is not executed, and `result` remains unchanged.

-   *Cause:* Overflow in addition, type I in the additions `UNTIL` or `FROM` ... `TO`\\
    *Runtime error:*\\ `ADDF_INT_OVERFLOW`
-   *Cause:* Overflow in arithmetic operation (type `p`)
    *Runtime error:*\\ `BCD_OVERFLOW`
-   *Cause:* Integer overflow in addition
    *Runtime error:*\\ `COMPUTE_INT_PLUS_OVERFLOW`

-   *Cause:* Overflow in arithmetic operation (type `p`, with specified length)
    *Runtime error:*\\ `BCD_FIELD_OVERFLOW`

-   *Cause:* Access to data outside of the range specified in the `RANGE` addition
    *Runtime error:*\\ `ADD_FIELDS_NOT_IN_RANGE`
-   *Cause:* Invalid access to tables, strings, field references, or object references within the range specified by the addition `RANGE`.
    *Runtime error:*\\ `ADD_FIELDS_ILLEGAL_ACCESS`
-   *Cause:*\\ `p` field does not contain the correct BCD format
    *Runtime error:*\\ `BCD_BADDATA`

DATA: BEGIN OF numbers, \\n one TYPE p LENGTH 8 DECIMALS 0 VALUE 10, \\n two TYPE p LENGTH 8 DECIMALS 0 VALUE 20, \\n three TYPE p LENGTH 8 DECIMALS 0 VALUE 30, \\n four TYPE p LENGTH 8 DECIMALS 0 VALUE 40, \\n five TYPE p LENGTH 8 DECIMALS 0 VALUE 50, \\n END OF numbers, \\n sum TYPE i. \\n\\ \\nSELECT-OPTIONS position FOR sum. \\n\\ \\nADD numbers-one THEN numbers-two \\n UNTIL numbers-five \\n ACCORDING TO position \\n GIVING sum. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencomputing\_obsolete.html