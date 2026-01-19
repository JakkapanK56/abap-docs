---
title: "ABENUSE_EXCEPTION_CLASS_GUIDL"
description: |
  ABENUSE_EXCEPTION_CLASS_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUSE_EXCEPTION_CLASS_GUIDL.htm"
abapFile: "ABENUSE_EXCEPTION_CLASS_GUIDL.html"
keywords: ["do", "if", "method", "class", "ABENUSE", "EXCEPTION", "CLASS", "GUIDL"]
---

The concept of freely definable exception classes involves being able to create an exception class that adequately describes the exception situation in question. The description consists both of the name of the exception class, the associated exception texts, and their documentation. You can divide an exception class into multiple subexceptions by creating multiple exception texts. Subclasses of exception classes can be used to make the information even more specific.

**Only use suitable exception classes**

When describing an error situation, only use exception classes with the correct category and name, the appropriate attributes and texts, and which contain the correct documentation. Do not reuse inappropriate exception classes.

Reusing existing exception classes with the wrong content removes all benefits of freely definable exception classes. The new exception object cannot describe the exception situation adequately. It also makes it very difficult to maintain and analyze the code. In particular, you run a great risk of handling the exception incorrectly. This is because a caller layer higher up in the hierarchy never expects the exceptions it handles to be raised by a situation with the wrong semantics.

The following procedure is recommended for raising correct exceptions:

In doing so, it must be ensured that an appropriate [exception category](ABENEXCEPTION_CATEGORY_GUIDL.html) is used.

The following source code shows the incorrect use of the system class `cx_sy_arithmetic_overflow` (which exists in every system) for an application-specific exception situation. This system exception should usually only be raised by the ABAP runtime framework when an arithmetic calculation takes place.

The following source code shows how an application-specific exception class is used that has been created especially for the situation and whose name reflects the topic.

1.  Search for an existing exception class that is released for use in the current concept (and as part of the package concept) and which matches that error situation exactly.
2.  Make an existing, almost ideal exception class more specific by passing on and/or adding new exception texts.
3.  Create an new ideal exception class, possibly as a part of a predefined inheritance hierarchy.

CLASS warehouse DEFINITION. \\n PUBLIC SECTION. \\n METHODS calculate\_storage\_capacity \\n RAISING cx\_sy\_arithmetic\_error. \\nENDCLASS.CLASS warehouse IMPLEMENTATION. \\n METHOD calculate\_storage\_capacity. \\n ... \\n RAISE EXCEPTION TYPE cx\_sy\_arithmetic\_overflow. \\n ... \\n ENDMETHOD. \\nENDCLASS. CLASS cx\_warehouse\_out\_of\_capacity DEFINITION \\n INHERITING FROM cx\_static\_check. \\nENDCLASS.CLASS warehouse DEFINITION. \\n PUBLIC SECTION. \\n METHODS calculate\_storage\_capacity \\n RAISING cx\_warehouse\_out\_of\_capacity. \\nENDCLASS.CLASS warehouse IMPLEMENTATION. \\n METHOD calculate\_storage\_capacity. \\n ... \\n RAISE EXCEPTION TYPE cx\_warehouse\_out\_of\_capacity. \\n ... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenarchitecture\_gdl.html abenerror\_handling\_gdl.html