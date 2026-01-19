---
title: "ABAPINTERFACE"
description: |
  ABAPINTERFACE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINTERFACE.htm"
abapFile: "ABAPINTERFACE.html"
keywords: ["select", "do", "if", "class", "data", "ABAPINTERFACE"]
---

[Short Reference](ABAPINTERFACE_SHORTREF.html)

1\. `INTERFACE intf [PUBLIC].`\\
`[[components](ABENINTERFACE_COMPONENT.html)]`\\
`ENDINTERFACE.`

2\. `INTERFACE intf DEFERRED [PUBLIC].`

The statement `INTERFACE` defines [interfaces](ABENOO_INTF_GLOSRY.html) in ABAP Objects or defers their declaration.

The statements `INTERFACE` and associated statements `ENDINTERFACE` can only be specified in the global context of a program. `INTERFACE` and `ENDINTERFACE` cannot be specified within classes, procedures, and processing blocks implemented internally as a procedure, that is, event blocks for [`GET`](ABAPGET-.html) and [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html)). This applies in particular to the variant of `INTERFACE` specified here, which is not closed using `ENDINTERFACE`.

[Declaration of Interfaces](ABAPINTERFACE_DEFINITION.html)

[Deferred Interfaces](ABAPINTERFACE_DEFERRED.html)

-   The definition of an interface consists of a [declaration section](ABAPINTERFACE_DEFINITION.html) that starts with `INTERFACE` and is closed using `ENDINTERFACE`. Unlike classes, an interface does not have an implementation part.
-   The variant of `INTERFACE` without `ENDINTERFACE` is used for [deferring interfaces](ABAPINTERFACE_DEFERRED.html) in a program.

-   The definition or deferral of an interface is handled like other declaration statements (`DATA`, `TYPE`, ...). In a processing block without a local context, they are handled like global program declarations and do not close the processing block.
-   Previously, an obsolete variant [`INTERFACE ... LOAD`](ABAPCLASS_INTERFACE_LOAD.html) was used to load interfaces explicitly.

abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html