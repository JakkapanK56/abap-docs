---
title: "ABAPGET_REFERENCE"
description: |
  ABAPGET_REFERENCE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_REFERENCE.htm"
abapFile: "ABAPGET_REFERENCE.html"
keywords: ["delete", "loop", "do", "if", "class", "data", "types", "internal-table", "field-symbol", "ABAPGET", "REFERENCE"]
---

[Short Reference](ABAPGET_REFERENCE_SHORTREF.html)

`GET REFERENCE OF dobj INTO dref.`

This statement sets the [reference](ABENREFERENCE_GLOSRY.html) in the reference variable `dref` so that it points to the data object `dobj`. The following can be specified for `dref`:

The data object is specified directly and in accordance with the rules described in the section [Read Positions](ABENDATA_OBJECTS_USAGE_READING.html). If offsets/lengths ([`+off(len)`](ABENOFFSET_LENGTH.html)) are specified, the data type `dobj` here cannot be `string` or `xstring`.

Creation of data references to the individual characters of a data object `text` and storing them in an internal table. Direct dereferencing at an operand position is possible because the data reference is completely typed. After the output, an alternative implementation with an [iteration expression](ABENFOR_CONDITIONAL.html) and the reference operator [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html) is shown that has the same result.

-   An existing [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html). The static type of the data reference variable must be more general than or the same as the data type `dobj`, according to the [assignment rules for reference variables](ABENCONVERSION_REFERENCES.html).
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). This declares a data reference variable whose static type is the data type of `dobj`. The data type of `dobj` must be known statically as a complete type or as the generic type `data`. Field symbols and formal parameters with other generic types, in particular `any`, are not possible.

-   In addition to the reference operator [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html) and the addition [`REFERENCE INTO`](ABAPREAD_TABLE_OUTDESC.html), the statement `GET REFERENCE` is the only option for internal table statements to create [stack references](ABENSTACK_REFERENCE_GLOSRY.html). Stack references can become invalid if the referenced data object is deleted.
-   When applied to data objects in the [heap](ABENHEAP_GLOSRY.html)\\ `GET REFERENCE` creates memory-retaining [heap references](ABENHEAP_REFERENCE_GLOSRY.html).
-   The content of two reference variables filled with `GET REFERENCE` is only the same if the remaining administration information is the same, apart from the referenced data objects. For example, a reference that is obtained directly by specifying the data object is not the same as a reference that is obtained by specifying a field symbol if it has a different data type due to a [casting](ABENCAST_CASTING_GLOSRY.html).
-   For an internal table with a [header line](ABENHEADER_LINE_GLOSRY.html), a data reference variable can only point to this or the [table body](ABENTABLE_BODY_GLOSRY.html). In the statement `GET REFERENCE`, the name of an internal table with a header line addresses the header line. To address the table body, `[]` must be appended to the name as usual. A dereferenced data reference to which a table body is assigned behaves in the same way in operand positions as a table without a header line.
-   If references are set using `GET REFERENCE`, permission to access the corresponding data object is only checked at the position of the statement. The references can then be passed on to any destination and can be used to access the associated data objects from any position using the references. To prevent access to private and read-only attributes using references outside classes, do not publish references to these attributes externally. A constant or read-only input parameter, however, can never be made modifiable by passing its reference.
-   The [reference operator](ABENREFERENCE_OPERATOR_GLOSRY.html)\\ [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html) works like the statement `GET REFERENCE` and can be used in [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html).
-   A data reference obtained using `GET REFERENCE` that references a data object in the [shared objects memory](ABENSHARED_OBJECTS_MEMORY_GLOSRY.html) can also be stored in a closed [area instance version](ABENAREA_INSTANCE_VERSION_GLOSRY.html). The restrictions described for the addition [`AREA HANDLE`](ABAPCREATE_DATA_AREA_HANDLE.html) of the statement [`CREATE DATA`](ABAPCREATE_DATA.html) must be respected.

-   *Cause:* The data object specified after `INTO` is not a reference variable.
    *Runtime error:*\\ `GET_REF_REFERENCE_EXPECTED`
-   *Cause:*\\ `GET REFERENCE` is not allowed for a substring.
    *Runtime error:*\\ `ILLEGAL_SUBSTRING_PARAMETER`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES c1 TYPE c LENGTH 1. \\n\\ \\nDATA: dref TYPE REF TO c1, \\n dref\_tab LIKE TABLE OF dref WITH EMPTY KEY, \\n dref\_tab\_new LIKE dref\_tab. \\n\\ \\nDATA: text TYPE c LENGTH 10 VALUE '0123456789', \\n off TYPE i. \\n\\ \\nDO 10 TIMES. \\n off = sy-index - 1. \\n GET REFERENCE OF text+off(1) INTO dref. \\n APPEND dref TO dref\_tab. \\nENDDO. \\n\\ \\nLOOP AT dref\_tab INTO dref. \\n out->write( |\\{ dref->\* \\}| ). \\nENDLOOP. \\n\\ \\ndref\_tab\_new = VALUE #( \\n FOR j = 0 UNTIL j > 9 ( REF #( text+j(1) ) ) ). \\nASSERT dref\_tab\_new = dref\_tab. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_references.html