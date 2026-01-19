---
title: "ABAPASSIGN_CASTING"
description: |
  ABAPASSIGN_CASTING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPASSIGN_CASTING.htm"
abapFile: "ABAPASSIGN_CASTING.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "field-symbol", "ABAPASSIGN", "CASTING"]
---

`... \{ \}`\\ 
  `|\ \{ CASTING \{\ \{\ \}`\\ 
              `|\ \{TYPE type|(name)\}`\\ 
              `|\ \{LIKE dobj\}`\\ 
              `|\ \{[TYPE p] DECIMALS dec\}`

[1. `... \{\ \}`](#ABAP_ALTERNATIVE_1@2@)

[2. `... CASTING ...`](#ABAP_ALTERNATIVE_2@2@)

The specification `casting_spec` defines the data type used to handle the memory area [`mem_area`](ABAPASSIGN_MEM_AREA.html) assigned to the field symbol when a statement contains the field symbol in an operand position. Either the addition `CASTING` can be specified or nothing at all.

The following restrictions apply:

If nothing is specified for `casting_spec`, the field symbol inherits the data type of the data object used in [`mem_area`](ABAPASSIGN_MEM_AREA.html) and the assigned memory area is handled accordingly. This data type must [match](ABENTYPING_CHECK_GENERAL.html) the [typing](ABENTYPING_GLOSRY.html) of the field symbol.

After the first assignment the field symbol has type `c` of length 3 and after the second assignment the field symbol has type `string`. The method `describe_by_data` returns the corresponding values `C 3` and `g`.

[1. `... \{\ \}`](#ABAP_ADDITION_1@3@)

[2. `... TYPE type|(name)`](#ABAP_ADDITION_2@3@)

[3. `... LIKE dobj`](#ABAP_ADDITION_3@3@)

[4. `... [TYPE p] DECIMALS dec`](#ABAP_ADDITION_4@3@)

If the addition `CASTING` is used in `casting_spec`, the memory area is handled as if it had the type specified by `CASTING`.

Casting can either take place implicitly using the typing of the field symbol or explicitly using one of the additions `TYPE`, `LIKE`, or `DECIMALS`. In explicit castings, the field symbol can only be typed generically, not completely.

If the addition `CASTING` is specified without further additions, the assigned memory area is cast to the type of the field symbol. The field symbol must be either completely typed or with one of the generic built-in ABAP types `c`, `n`, `p`, or `x`.

Casting of the integer 333 as a byte field. Depending on the [byte order](ABENBYTE_ORDER_GLOSRY.html), the output is either `4D01` or `014D`.

Explicit specification of a data type after `TYPE`. The name of the type can be specified as follows:

The assigned memory area is cast to the specified type. The data type specified after `TYPE` cannot be generic, apart from the built-in ABAP types `c`, `n`, `p`, and `x`. Furthermore, [table categories](ABAPTYPES_TABCAT.html) and `REF TO` cannot be specified.

The field symbol `<fs>` can only be typed generically and not completely. The specified data type must [match](ABENTYPING_CHECK.html) the generic [typing](ABENTYPING_GLOSRY.html) of the field symbol, meaning that [castings](ABENCAST_CASTING_GLOSRY.html) are allowed to specialize the generic typing but not to make it more general.

If a generic character-like type `c` or `n` is specified after `TYPE`, the length of the assigned memory area must be a multiple of the length of a character in the memory when the statement is executed.

Casting of a time field to a structured type with three components.

In the following example, one of the two `ASSIGN` statements produces a runtime error because the alignment requirement for the type `c` is not met. Which of the statements produces the runtime error is not generally defined and depends on the preceding declarations.

The following can be specified after `LIKE`:

The field symbol `<fs>` can only be typed generically and not completely. The specified data type must [match](ABENTYPING_CHECK.html) the generic [typing](ABENTYPING_GLOSRY.html) of the field symbol, meaning that [castings](ABENCAST_CASTING_GLOSRY.html) are allowed to specialize the generic typing but not to make it more general.

Casting of a structure with three components to a time field.

A numeric data object `dec` must be specified after `DECIMALS`. The assigned memory area is cast to the data type `p`, where the number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) is determined by the content of `dec`. The number of decimal places must not exceed the total number of [places](ABENPLACE_GLOSRY.html). `TYPE` does not need to be specified for `DECIMALS`. If `TYPE` is used, only the data type `p`, which is used anyway, can be specified.

The field symbol `<fs>` can only be typed generically and not completely. The specified data type must [match](ABENTYPING_CHECK.html) the generic [typing](ABENTYPING_GLOSRY.html) of the field symbol, meaning that [castings](ABENCAST_CASTING_GLOSRY.html) are allowed to specialize the generic typing but not to make it more general.

The calculation of the quotient from the packed number `pack` and the field symbol `<pack>` demonstrates the effect of casting with the addition `DECIMALS`. Factors between 10 and 100,000,000 are determined. When using `<pack>` in operand positions, a different value is used than when using `pack`.

-   In assignments of [table expressions](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html), only the first alternative can be used without further additions.
-   The `CASTING` addition cannot be used for [enumerated types](ABENENUM_TYPE_GLOSRY.html). This means that the assigned memory area must not be an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) and the specified data type must not be an enumerated type.

-   If the data type determined by `CASTING` is [deep](ABENDEEP_GLOSRY.html) or if deep data objects are stored in the assigned memory area, the deep components must appear with exactly the same type and position in the assigned memory area. In particular, this means that individual [reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html) can be assigned to only one field symbol that is typed as a reference variable by the same [static type](ABENSTATIC_TYPE_GLOSRY.html).
-   If the addition `CASTING` is used, the result of the statement `ASSIGN` may be platform-dependent. The internal [byte order](ABENBYTEORDER.html) of characters can, for example, be platform-dependent, which becomes apparent in a cast to a byte-like data type.
-   The memory area [`mem_area`](ABAPASSIGN_MEM_AREA.html) must meet the [alignment requirements](ABENALIGNMENT.html) of the data type specified by the casting. When flat elementary data types are specified, for example, the memory address `mem_area` must be divisible as follows:

-   By 2 for the character-like data types `c` and `n` and the date/time types `d` and `t`.
-   By 4 for the numeric data type `i`.
-   By 8 for the numeric data types `int8`, `f`, and `decfloat16`.
-   By 8 for the time stamp type `utclong`.
-   By 16 for the numeric data type `decfloat34`.

-   The static check of the statement `ASSIGN` using the addition `CASTING` is performed so that all errors are identified, regardless of the system or platform on which the check is run. A runtime check only checks the current system or the current platform.

-   `type`
-   Direct static specification as `type`.
-   `(name)`
-   Specification as the content of a character-like data object `name` that contains the name of a data type in uppercase letters when the statement is executed. The following can be specified for `name`:

-   Literal or constants
-   If the data object `name` is specified as a character literal or as a constant, it can be evaluated statically, and the specified type is recognized as the used object.
-   Variable
-   If the data object `name` is specified as a variable, it is specified only dynamically, and the content is not evaluated statically.

-   When the statement is executed, `name` is not evaluated until runtime in both cases.

-   A data object `dobj` according to the rules for [`TYPES ... LIKE`](ABAPTYPES_REFERRING.html). The assigned memory area is cast to the data type of the data object.
-   A generically typed field symbol.

-   If a memory area is assigned to the field symbol, the data type used to handle the memory area is the object of the cast.
-   If no memory area is assigned to the field symbol, a standard type resulting from the following rules is used:
-   `any`, `c`, `clike`, `csequence`, `data`, and `simple` produce `c` with length 1.
-   `decfloat` produces `decfloat34`.
-   `n` produces `n` with length 1.
-   `numeric` and `p` produce `p` with length 8 and no decimal places.
-   `x` and `xsequence` produce `x` of the length 1.
-   Generic table types raise an exception of the class `CX_SY_ASSIGN_CAST_ILLEGAL_CAST`.

-   A generically typed formal parameter.

-   If an actual parameter is assigned to the formal parameter, the data type of this parameter is the object of the cast.
-   If no actual parameter is assigned to an optional formal parameter, its [associated](ABENTYPING_GENERIC.html)\\ [standard type](ABENSTANDARD_TYPE_GLOSRY.html) is used.

-   `LIKE` can be used to refer to the data objects in its own program, and also to the public attributes of global classes.
-   The standard type for generically typed field symbols specified after `CASTING LIKE` differs slightly from the [standard type](ABENTYPING_GENERIC.html) for generic field symbols and formal parameters (length 1 not 4 if `any` and `data` are used and no standard type for generic table types).
-   If a generically typed field symbol is specified after `CASTING LIKE`, a memory area should be assigned to it when the statement is executed.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFIELD-SYMBOLS TYPE csequence. \\n\\ \\nASSIGN 'xxx' TO . \\nDATA(type) = cl\_abap\_typedescr=>describe\_by\_data( )->type\_kind. \\nout->write( type ). \\n\\ \\nASSIGN \`xxx\` TO . \\ntype = cl\_abap\_typedescr=>describe\_by\_data( )->type\_kind. \\nout->write( type ). \\n\\ \\nout->display( ). final(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES hex4 TYPE x LENGTH 2. \\nFIELD-SYMBOLS TYPE hex4. \\n\\ \\nASSIGN 333 TO CASTING. \\nout->write( ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF time, \\n hours TYPE c LENGTH 2, \\n minute TYPE c LENGTH 2, \\n seconds TYPE c LENGTH 2, \\n END OF time. \\n\\ \\nFIELD-SYMBOLS TYPE any. \\nFINAL(t) = cl\_demo\_date\_time=>get\_user\_time( ). \\nASSIGN t TO CASTING TYPE time. \\nout->write( ). \\n\\ \\nout->display( ). DATA hex TYPE x LENGTH 10. \\n\\ \\nFIELD-SYMBOLS TYPE any. \\n\\ \\nASSIGN hex+0(4) TO CASTING type c. \\nASSIGN hex+1(4) TO CASTING type c. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n BEGIN OF time, \\n hours TYPE c LENGTH 2 VALUE '11', \\n minute TYPE c LENGTH 2 VALUE '55', \\n seconds TYPE c LENGTH 2 VALUE '00', \\n END OF time. \\n\\ \\nFIELD-SYMBOLS TYPE any. \\nFINAL(t) = cl\_demo\_date\_time=>get\_user\_time( ). \\nASSIGN time TO CASTING LIKE t. \\nout->write( ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA output TYPE TABLE OF string WITH EMPTY KEY. \\nDATA pack TYPE p LENGTH 8 DECIMALS 0 VALUE '12345678'. \\nFIELD-SYMBOLS TYPE p. \\n\\ \\nDO 8 TIMES. \\n ASSIGN pack TO CASTING DECIMALS sy-index. \\n APPEND CONV string( pack / ) TO output. \\nENDDO. \\nout->write( output ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_field\_symbols.html abapassign.html