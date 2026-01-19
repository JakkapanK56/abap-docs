---
title: "ABENDATA_REFERENCE_TYPE"
description: |
  ABENDATA_REFERENCE_TYPE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDATA_REFERENCE_TYPE.htm"
abapFile: "ABENDATA_REFERENCE_TYPE.html"
keywords: ["select", "if", "data", "types", "internal-table", "ABENDATA", "REFERENCE", "TYPE"]
---

Data references can point to any data objects or to their parts (components, lines of internal tables, or subareas determined by offset or length specifications). The static type of their reference variables is either the built-in generic type `data` or any non-generic data type. Data reference variables can be used with the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) for static and in the statement [`CREATE DATA`](ABAPCREATE_DATA.html) for dynamic creation of data objects. The statement [`GET REFERENCE`](ABAPGET_REFERENCE.html) and the reference operator [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html) can be used to write references to existing data objects in data reference variables. When internal tables are processed, most statements have the addition [`REFERENCE INTO`](ABAPREAD_TABLE_OUTDESC.html), to set references to table lines.

The [dereferencing operator](ABENDEREFERENCING_OPERAT_GLOSRY.html)\\ [`->*`](ABENDEREFERENCING_OPERATOR.html) is used to access the data object to which a data reference points.

Data references can be [heap references](ABENHEAP_REFERENCE_GLOSRY.html) or [stack references](ABENSTACK_REFERENCE_GLOSRY.html).

Inline declaration of a data reference variable `dref` with the static type `scarr` on the left side of a corresponding anonymous data object created on the [heap](ABENHEAP_REFERENCE_GLOSRY.html). Uses the dereferencing operator `->*` to access the entire data object and the object component selector `->` to access a component.

FINAL(dref) = NEW scarr( ). \\n\\ \\nSELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = 'LH' \\n INTO @dref->\*. \\n\\ \\ncl\_demo\_output=>display\_data( dref->carrid ). abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendata\_references.html