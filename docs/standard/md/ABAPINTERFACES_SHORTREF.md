---
title: "ABAPINTERFACES_SHORTREF"
description: |
  ABAPINTERFACES_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINTERFACES_SHORTREF.htm"
abapFile: "ABAPINTERFACES_SHORTREF.html"
keywords: ["if", "method", "class", "data", "ABAPINTERFACES", "SHORTREF"]
---

[Reference](ABAPINTERFACES.html)

`INTERFACES intf    [PARTIALLY IMPLEMENTED]\    \{\ \{\ [ABSTRACT METHODS meth1 meth2 ...]\        [FINAL METHODS meth1 meth2 ...]\ \}\      |\ [ALL METHODS \{ABSTRACT|FINAL\}]\ \}\    [DATA VALUES attr1 = val1 attr2 = val2 ...].`

Implements an interface in the [public](ABENPUBLIC_GLOSRY.html)\\ [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of a class or includes it in another interface.

-   `ABSTRACT METHODS meth1 meth2 ...`\\
    Makes the specified [instance methods](ABENINSTANCE_METHOD_GLOSRY.html)\\ `meth1`, `meth2`, ...abstract when the interface is implemented in a class.
-   `FINAL METHODS meth1 meth2 ...`\\
    Makes the specified instance methods `meth1`, `meth2`, ... final when the interface is implemented in a class.
-   `ALL METHODS \{ABSTRACT|FINAL\}`\\
    Makes all instance methods abstract or final when the interface is implemented in a class.
-   `DATA VALUES attr1 = val1 attr2 = val2 ...`\\
    Assigns [start values](ABENSTART_VALUE_GLOSRY.html)\\ `val1`, `val2`, ... to instance attributes `attr1`, `attr2`, ... when the interface is implemented in a class.
-   [`PARTIALLY IMPLEMENTED`](ABAPINTERFACES_PARTIALLY.html)\\
    In test classes, suppresses the message that not all interfaces are implemented.

abenabap.html abenabap\_reference.html abenabap\_shortref.html