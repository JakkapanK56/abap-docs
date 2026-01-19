---
title: "ABAPASSIGN_MEM_AREA"
description: |
  ABAPASSIGN_MEM_AREA - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPASSIGN_MEM_AREA.htm"
abapFile: "ABAPASSIGN_MEM_AREA.html"
keywords: ["do", "if", "case", "class", "data", "types", "internal-table", "field-symbol", "ABAPASSIGN", "MEM", "AREA"]
---

``... [`static_dobj`](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html)``\\ 
  ``|\ [`dynamic_dobj`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html)``\\ 
  ``|\ [`dynamic_components`](ABAPASSIGN_DYNAMIC_COMPONENTS.html)``\\ 
  ``|\ [`dynamic_access`](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html)``\\ 
  ``|\ [`writable_exp`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) ...``

**Static Specification**

1\. `... [static_dobj](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html)`\\

**Dynamic Specifications**

2\. `... [dynamic_dobj](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html)`\\

3\. `... [dynamic_components](ABAPASSIGN_DYNAMIC_COMPONENTS.html)`\\

4\. `... [dynamic_access](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html)`\\

**Specifying an Expression**

5\. `... [writable_exp](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html)`

`mem_area` is used to specify the memory area that is assigned to a field symbol with the statement [`ASSIGN`](ABAPASSIGN.html):

For an inline declaration of the field symbol with [`FIELD-SYMBOL(<fs>)`](ABENFIELD-SYMBOL_INLINE.html), its typing is done with the data type of `mem_area` for the static variant and when specifying a writable expression. For the dynamic variants the typing is done with the generic type [`data`](ABENBUILT_IN_TYPES_GENERIC.html).

The variants differ as to how the system behaves after an unsuccessful assignment:

-   The first variant [`static_dobj`](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html) is a static variant in which a statically known data object or part of such an object is assigned.
-   The second, third and fourth variants are dynamic.

-   The variants [`dynamic_dobj`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html) are used for general dynamic access to data objects.
-   The variants [`dynamic_components`](ABAPASSIGN_DYNAMIC_COMPONENTS.html) are used for dynamic access to components of structures.
-   The variants [`dynamic_access`](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html) are used for dynamic access to the attributes of classes.

-   The fifth variant assigns the result of a [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html).

-   For the static variant, the return code `sy-subrc` is not set. The addition [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html) is used implicitly and cannot be specified.
-   For the dynamic variants, the statement `ASSIGN` sets the return code `sy-subrc` or can raise an exception. The addition [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html) can be specified.
-   When a [table expression](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) is specified, the statement `ASSIGN` sets the return code `sy-subrc`. The addition [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html) can be specified.
-   When assigning constructor operators:

-   For [`NEW`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) the return code `sy-subrc` is set by the constructor operator.
-   For [`CASE`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) the return code `sy-subrc` is not set.

-   The addition [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html) must not be specified because an assignment of a constructor operator is either successful or raises an exception.

-   In an internal table with a [header line](ABENHEADER_LINE_GLOSRY.html), either the header line or the [table body](ABENTABLE_BODY_GLOSRY.html) can be assigned to a field symbol. In the statement `ASSIGN`, the name of an internal table with a header line addresses the header line. To address the table body, `[]` must be appended to the name as usual. A field symbol to which a table body is assigned behaves in the same way in operand positions as a table without a header line.
-   Field symbols to which data objects or parts of data objects are assigned in the [heap](ABENHEAP_GLOSRY.html) act in a memory-preserving way, like [heap references](ABENHEAP_REFERENCE_GLOSRY.html).
-   In an inline declaration of the field symbol with [`FIELD-SYMBOL(<fs>)`](ABENFIELD-SYMBOL_INLINE.html), the data type of the assigned memory area determines its typing.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_field\_symbols.html abapassign.html