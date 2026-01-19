---
title: "ABAPGET_REFERENCE"
description: |
  ABAPGET_REFERENCE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPGET_REFERENCE.htm"
abapFile: "ABAPGET_REFERENCE.html"
keywords: ["delete", "do", "if", "class", "data", "types", "internal-table", "field-symbol", "ABAPGET", "REFERENCE"]
---

`GET REFERENCE OF dobj INTO dref.`

***This syntax is only supported temporarily in the current ABAP language version and must be replaced with valid syntax for that version.***\\ \\n\\n

This statement sets the [reference](ABENREFERENCE_GLOSRY.html) in the reference variable `dref` so that it points to the data object `dobj`. The following can be specified for `dref`:

The data object is specified directly and in accordance with the rules described in the section [Read Positions](ABENDATA_OBJECTS_USAGE_READING.html). If offsets/lengths ([`+off(len)`](ABENOFFSET_LENGTH.html)) are specified, the data type `dobj` here cannot be `string` or `xstring`.

-   An existing [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html). The static type of the data reference variable must be more general than or the same as the data type `dobj`, according to the [assignment rules for reference variables](ABENCONVERSION_REFERENCES.html).
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). This declares a data reference variable whose static type is the data type of `dobj`. The data type of `dobj` must be known statically as a complete type or as the generic type `data`. Field symbols and formal parameters with other generic types, in particular `any`, are not possible.

-   In addition to the reference operator [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html) and the addition [`REFERENCE INTO`](ABAPREAD_TABLE_OUTDESC.html), the statement `GET REFERENCE` is the only option for internal table statements to create [stack references](ABENSTACK_REFERENCE_GLOSRY.html). Stack references can become invalid if the referenced data object is deleted.
-   When applied to data objects in the [heap](ABENHEAP_GLOSRY.html)\\ `GET REFERENCE` creates memory-retaining [heap references](ABENHEAP_REFERENCE_GLOSRY.html).
-   The content of two reference variables filled with `GET REFERENCE` is only the same if the remaining administration information is the same, apart from the referenced data objects. For example, a reference that is obtained directly by specifying the data object is not the same as a reference that is obtained by specifying a field symbol if it has a different data type due to a [casting](ABENCAST_CASTING_GLOSRY.html).
-   For an internal table with a [header line](ABENHEADER_LINE_GLOSRY.html), a data reference variable can only point to this or the [table body](ABENTABLE_BODY_GLOSRY.html). In the statement `GET REFERENCE`, the name of an internal table with a header line addresses the header line. To address the table body, `[]` must be appended to the name as usual. A dereferenced data reference to which a table body is assigned behaves in the same way in operand positions as a table without a header line.
-   If references are set using `GET REFERENCE`, permission to access the corresponding data object is only checked at the position of the statement. The references can then be passed on to any destination and can be used to access the associated data objects from any position using the references. To prevent access to private and read-only attributes using references outside classes, do not publish references to these attributes externally. A constant or read-only input parameter, however, can never be made modifiable by passing its reference.
-   The [reference operator](ABENREFERENCE_OPERATOR_GLOSRY.html)\\ [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html) works like the statement `GET REFERENCE` and can be used in [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_references.html