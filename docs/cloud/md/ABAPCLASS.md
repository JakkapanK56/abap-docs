---
title: "ABAPCLASS"
description: |
  ABAPCLASS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCLASS.htm"
abapFile: "ABAPCLASS.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABAPCLASS"]
---

1\. `CLASS class DEFINITION [[class_options](ABAPCLASS_OPTIONS.html)].`\\
`[PUBLIC SECTION.`\\
`[[components](ABENCLASS_COMPONENT.html)]]`\\
`[PROTECTED SECTION.`\\
`[[components](ABENCLASS_COMPONENT.html)]]`\\
`[PRIVATE SECTION.`\\
`[[components](ABENCLASS_COMPONENT.html)]]`\\
`ENDCLASS.`

2\. `CLASS class IMPLEMENTATION.`\\
`...`\\
`METHOD ...`\\
`...`\\
`ENDMETHOD.`\\
`...`\\
`ENDCLASS.`

3\. `CLASS class DEFINITION DEFERRED [PUBLIC].`

4\. `CLASS class DEFINITION LOCAL FRIENDS class1 class2 ... intf1 intf2 ...`

The statement `CLASS` defines a class `class`, publishes it, or specifies properties.

The statements `CLASS` and associated statements `ENDCLASS` can be specified in the following contexts:

This applies in particular also to the variants of `CLASS` listed here, which are not closed using `ENDCLASS`.

Declaration and implementation of a local class `demo` with some of the possible components.

[Declaration Part of a Class](ABAPCLASS_DEFINITION.html)

[Implementation Part of a Class](ABAPCLASS_IMPLEMENTATION.html)

[Publication of Classes](ABAPCLASS_DEFERRED.html)

[Local Friends of Global Classes](ABAPCLASS_LOCAL_FRIENDS.html)

-   The complete definition of a class consists of a [declaration part](ABAPCLASS_DEFINITION.html) and an [implementation part](ABAPCLASS_IMPLEMENTATION.html), which are both introduced by `CLASS` and ended by `ENDCLASS`. In the declaration part, the properties of the class are specified, and its components are declared. In the implementation part, the methods of the class are implemented.
-   The variants of `CLASS` without `ENDCLASS` are used for the [publication of classes](ABAPCLASS_DEFERRED.html) in a program and the declaration of [local friends](ABAPCLASS_LOCAL_FRIENDS.html) of a global class.

-   `CLASS` and `ENDCLASS` can only be specified in the global context of a program.
-   `CLASS` and `ENDCLASS` cannot be listed within classes, procedures.

-   The declaration part of a class, and the variants of `CLASS` that are not closed using `ENDCLASS` are handled like other declaration statements (`DATA`, `TYPE`, ...). In a processing block without a local context, they are handled like global program declarations and do not close the processing block.
-   The implementation part of a class works like a separate processing block and closes any other processing blocks.

CLASS demo DEFINITION CREATE PRIVATE. \\n PUBLIC SECTION. \\n TYPES result TYPE string. \\n CLASS-METHODS new \\n RETURNING VALUE(ref) TYPE REF TO demo. \\n METHODS main \\n RETURNING VALUE(result) TYPE result. \\n PRIVATE SECTION. \\n METHODS util CHANGING text TYPE result. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD new. \\n ref = NEW demo( ). \\n ENDMETHOD. \\n METHOD main. \\n DATA var TYPE result. \\n ... \\n me->util( CHANGING text = var ). \\n ... \\n ENDMETHOD. \\n METHOD util. \\n ... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html