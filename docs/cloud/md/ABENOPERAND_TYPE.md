---
title: "ABENOPERAND_TYPE"
description: |
  ABENOPERAND_TYPE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENOPERAND_TYPE.htm"
abapFile: "ABENOPERAND_TYPE.html"
keywords: ["do", "if", "data", "types", "internal-table", "field-symbol", "ABENOPERAND", "TYPE"]
---

An operand position (read or write position) is typed by an operand type, which can be complete or generic and can also be dependent on other operand positions, for example in assignments. When a statement is executed, an operand with a suitable data type is expected. If an operand specified at an operand position has a different data type than the operand type, an attempt is usually made to convert the content of the operand to the operand type according to the [conversion rules](ABENCONVERSION_RULES.html) at [read positions](ABENREAD_POSITION_GLOSRY.html), and in the other direction at [write positions](ABENWRITE_POSITION_GLOSRY.html). Here, it should be noted that every conversion incurs increased runtime costs. If no corresponding conversion rule is defined, or the content cannot be converted, a syntax error occurs or an exception is raised. Any deviations from this rule, for example that the operand must exactly match the operand type or the operand is [cast](ABENCAST_CASTING_GLOSRY.html) to the operand type regardless of its actual type, are described in the documentation of the individual statements.

At operand positions for [elementary data objects](ABENELEMENTARY_DATA_OBJECT_GLOSRY.html), the following must be specified when the statement is executed, depending on the operand type:

Generically [typed](ABENTYPING_GLOSRY.html) formal parameters or field symbols can also be specified statically if they are typed more generally than the expected type.

[Flat structures](ABENFLAT_STRUCTURE_GLOSRY.html) with only character-like components of the types `c`, `n`, `d`, or `t` can also be used in all operand positions where elementary fields are expected. Such structures are handled in the same way as a single data object of type `c` (implicit casting).

An operand position with an elementary data type must not be confused with an [elementary operand](ABENELEMENTARY_OPERAND_GLOSRY.html).

Structures must be specified at operand positions for [structures](ABENSTRUCTURE_GLOSRY.html) when the statement is executed. Formal parameters or field symbols of the generic types `data` or `any` can also be specified statically.

[Internal tables](ABENINTERNAL_TABLE_GLOSRY.html) must be specified at operand positions for internal tables both when the statement is executed. There are also operand positions, where internal tables must be known statically. At these positions, generic formal parameters and field symbols can only be specified if they are typed with at least the generic type [`any table`](ABENBUILT_IN_TYPES_GENERIC.html). Only index tables can be specified at operand positions where index access occurs, and generic formal parameters and field symbols must be typed with at least the generic type [`index table`](ABENBUILT_IN_TYPES_GENERIC.html).

Depending on the operand type, either data or object reference variables must be specified at operand positions for [reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html) when the statement is executed. Formal parameters or field symbols of the generic types `data` or `any` can also be specified statically.

-   [Character-like data objects](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html)
-   [Numeric data objects](ABENNUMERIC_DATA_OBJECT_GLOSRY.html)
-   [Byte-like data objects](ABENBYTE_LIKE_DATA_OBJECT_GLOSRY.html)

abenabap.html abenabap\_reference.html abenabap\_syntax.html abenabap\_statements.html abenoperand\_positions.html