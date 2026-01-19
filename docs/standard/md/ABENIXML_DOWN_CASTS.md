---
title: "ABENIXML_DOWN_CASTS"
description: |
  ABENIXML_DOWN_CASTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENIXML_DOWN_CASTS.htm"
abapFile: "ABENIXML_DOWN_CASTS.html"
keywords: ["do", "if", "try", "method", "data", "types", "exception-handling", "ABENIXML", "DOWN", "CASTS"]
---

For reference variables with the static type of the interfaces `IF_IXML_...` of the iXML Library, the usual [downcasts](ABENDOWN_CAST_GLOSRY.html) with the [casting operators](ABENCASTING_OPERATOR_GLOSRY.html)\\ [`?=`](ABAPMOVE_CAST.html) and [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html) can be used for assignments from more general to more specific types. If a downcast fails, the exception `CX_SY_MOVE_CAST_ERROR` is raised, which can be handled in a [`TRY`](ABAPTRY.html) control structure as usual.

The method `QUERY_INTERFACE` of the interface `IF_IXML_UNKNOWN` included by every object in iXML Library can be used to simplify exception handling:

special\_reference ?= general\_reference->query\_interface( type ).

`type` can be used to specify the required special type by specifying a constant `ixml_iid...` from the type pool `IXML`. A successful downcast runs as if no method is called. If an error occurs, the exception is handled in the method and an initial reference returned.

[iXML Library, Downcasts](ABENIXML_CASTING_ABEXA.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib.html abenabap\_ixml\_lib\_object\_types.html