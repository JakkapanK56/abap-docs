---
title: "ABAPINTERFACE"
description: |
  ABAPINTERFACE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPINTERFACE.htm"
abapFile: "ABAPINTERFACE.html"
keywords: ["do", "if", "class", "data", "ABAPINTERFACE"]
---

1\. `INTERFACE intf [PUBLIC].`\\
`[[components](ABENINTERFACE_COMPONENT.html)]`\\
`ENDINTERFACE.`

2\. `INTERFACE intf DEFERRED [PUBLIC].`

The statement `INTERFACE` defines [interfaces](ABENOO_INTF_GLOSRY.html) in ABAP Objects or defers their declaration.

The statements `INTERFACE` and associated statements `ENDINTERFACE` can only be specified in the global context of a program. `INTERFACE` and `ENDINTERFACE` cannot be specified within classes, procedures,. This applies in particular to the variant of `INTERFACE` specified here, which is not closed using `ENDINTERFACE`.

[Declaration of Interfaces](ABAPINTERFACE_DEFINITION.html)

[Deferred Interfaces](ABAPINTERFACE_DEFERRED.html)

-   The definition of an interface consists of a [declaration section](ABAPINTERFACE_DEFINITION.html) that starts with `INTERFACE` and is closed using `ENDINTERFACE`. Unlike classes, an interface does not have an implementation part.
-   The variant of `INTERFACE` without `ENDINTERFACE` is used for [deferring interfaces](ABAPINTERFACE_DEFERRED.html) in a program.

-   The definition or deferral of an interface is handled like other declaration statements (`DATA`, `TYPE`, ...). In a processing block without a local context, they are handled like global program declarations and do not close the processing block.

abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html