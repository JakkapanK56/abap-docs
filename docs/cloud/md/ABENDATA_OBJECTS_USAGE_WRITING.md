---
title: "ABENDATA_OBJECTS_USAGE_WRITING"
description: |
  ABENDATA_OBJECTS_USAGE_WRITING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDATA_OBJECTS_USAGE_WRITING.htm"
abapFile: "ABENDATA_OBJECTS_USAGE_WRITING.html"
keywords: ["do", "if", "data", "types", "internal-table", "field-symbol", "ABENDATA", "OBJECTS", "USAGE", "WRITING"]
---

Only modifiable data objects, that is, no literals, text symbols, constants, or non-modifiable formal parameters, can be specified as follows at [write positions](ABENWRITE_POSITION_GLOSRY.html):

The following write positions can be distinguished:

-   Specification of a [visible data object](ABENLIFETIME_AND_VISIBILITY.html) specified at this position using the identifier `dobj`, a field symbol `<fs>`, or a dereferenced data reference `dref->*` if `dref` is typed completely. Like in [read positions](ABENREAD_POSITION_GLOSRY.html), `[]` can be appended to internal tables to address the [table body](ABENTABLE_BODY_GLOSRY.html).
-   Specification of a [subarea](ABENOFFSET_LENGTH.html) of a [flat](ABENFLAT_GLOSRY.html) character-like or byte-like data object using an [offset/length](ABENOFFSET_LENGTH_SPECIFIC_GLOSRY.html) specification. An offset or length specification cannot be made in write positions for data objects of the [deep](ABENDEEP_GLOSRY.html) data types `string` and `xstring`.
-   At a [declaration position](ABENDECLARATION_POSITION_GLOSRY.html), an [inline declaration](ABENINLINE_DECLARATION_GLOSRY.html) of a data object or field symbol can be made using a [declaration expression](ABENDECLARATION_EXPRESSION_GLOSRY.html).
-   [Writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html) can be listed in a [result position](ABENRESULT_POSITION_GLOSRY.html).

-   [Read/write positions](ABENREAD_WRITE_POSITION_GLOSRY.html), where an operand is first read and then written.
-   [Write-only positions](ABENWRITE_ONLY_POSITION_GLOSRY.html), where an operand is overwritten without being read first. For the time being, those are [declaration positions](ABENDECLARATION_POSITION_GLOSRY.html) only.

-   In [result positions](ABENRESULT_POSITION_GLOSRY.html), certain [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html) can be specified.
-   [Enumerated variables](ABENENUMERATED_VARIABLE_GLOSRY.html) can only be used in write positions where the operand type is the enumerated type and only the associated [enumerated values](ABENENUMERATED_VALUE_GLOSRY.html) can be written.

abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_data\_objects.html