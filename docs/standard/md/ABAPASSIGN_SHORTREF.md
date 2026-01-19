---
title: "ABAPASSIGN_SHORTREF"
description: |
  ABAPASSIGN_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPASSIGN_SHORTREF.htm"
abapFile: "ABAPASSIGN_SHORTREF.html"
keywords: ["do", "if", "case", "class", "data", "field-symbol", "ABAPASSIGN", "SHORTREF"]
---

[Reference](ABAPASSIGN.html)

`ASSIGN \{ dobj[+off][(len)]\         |\ [TABLE FIELD] (name)         | dref->*         |\ \{dobj INCREMENT inc\}\         |\ \{COMPONENT comp OF STRUCTURE struc\}\         | oref->(attr_name)         |\ \{class|(class_name)\}=>\{attr|(attr_name)\}\         | writable_exp \}\    TO <fs>    [\ \{ CASTING [\ \{TYPE type|(name)\}\                |\ \{LIKE dobj\}\                |\ \{[TYPE p] DECIMALS dec\}\                |\ \{TYPE HANDLE handle\}\ ]\ \}\    |\ \{\ \{TYPE name\}\      |\ \{[TYPE name] DECIMALS dec\}\ \}\ ]\    [RANGE range]\    [ELSE UNASSIGN].`

Assigns a memory area to a field symbol `<fs>`.

**Specifies the memory area:**

**Specifies the data type:**

**Restricts the memory area:**

**Unassigns the field symbol:**

-   [`dobj[+off][(len)]`](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html) - Data object `dobj` or its subarea `off(len)`.
-   [`(name)`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html) - Data object contained in `name`.
-   [`TABLE FIELD`](ABAPASSIGN_TABLE_FIELD.html) - **Obsolete:** Restricts the search for the data object (contained in `name`) to [interface work areas](ABENINTERFACE_WORK_AREA_GLOSRY.html) declared using the `TABLES` statement.
-   [`dref->*`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html) - dereferenced reference variable.
-   [`dobj INCREMENT inc`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html) - Area that is incremented `inc` times by the length of `dobj`.
-   [`COMPONENT comp OF STRUCTURE struct`](ABAPASSIGN_DYNAMIC_COMPONENTS.html) - Component `comp` of a structure `struc`.
-   [`oref->(attr_name)`](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html) - Attribute of an object referenced by `oref`, specified in `attr_name`.
-   [`class|(class_name)=>attr|(attr_name)`](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html) - [Static attribute](ABENSTATIC_ATTRIBUTE_GLOSRY.html)\\ `attr` of the class `class`, where the attribute and class can also be specified as the content of `attr_name` and `class_name`.
-   [`writable_exp`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) - [Writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html).
    

-   [`CASTING`](ABAPASSIGN_CASTING.html)\\
    Specifies the data type used to handle the memory area:
    \\
    [`TYPE type|(name)`](ABAPASSIGN_CASTING.html) - Data type `type`, which can also be specified as the content of `name`.
    \\
    [`LIKE dobj`](ABAPASSIGN_CASTING.html) - Data type of data object `dobj`.
    \\
    [`[TYPE p] DECIMALS dec`](ABAPASSIGN_CASTING.html) - Data type `p`, with [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) specified in `dec`.
    \\
    [`TYPE HANDLE handle`](ABAPASSIGN_CASTING.html) - Data type described by the [type description object](ABENTYPE_OBJECT_GLOSRY.html) of [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html) that `handle` points to.
-   [`[TYPE name] DECIMALS dec`](ABAPASSIGN_CASTING_OBSOLETE.html)\\
    **Obsolete:**\\ [Casting](ABENCAST_CASTING_GLOSRY.html) to an elementary ABAP type in `name` or to the decimal places in `dec`.
    

-   [`RANGE range`](ABAPASSIGN_RANGE.html)\\
    Restricts the assignable memory area to the data object `range`.
    

-   [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html)\\
    Unassigns the field symbol in case `sy-subrc` is not initial.

abenabap.html abenabap\_reference.html abenabap\_shortref.html