---
title: "ABENLIFETIME_AND_VISIBILITY"
description: |
  ABENLIFETIME_AND_VISIBILITY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLIFETIME_AND_VISIBILITY.htm"
abapFile: "ABENLIFETIME_AND_VISIBILITY.html"
keywords: ["select", "delete", "while", "if", "method", "class", "data", "types", "ABENLIFETIME", "AND", "VISIBILITY"]
---

The context of a declarative statement in the source code of a program determines the validity and visibility of the declared component. In ABAP programs, there are three contexts in which data types and data objects can be declared:

All contexts see the program-independent type definitions of ABAP CDS, of the ABAP Dictionary and the type definitions and data declarations in the public visibility sections of global classes. Local declarations, however, hide global declarations with the same name. The following methods can be used to unhide these declarations:

In addition to context-dependent visibility, the position of the declaration in the source text also plays a role. In a statement of an ABAP program only previous declarations are visible, regardless of the context. To ensure that the order in the program matches the context-dependent visibility, all global declarations of a program should be listed at the start of the source code, before the first [processing block](ABENPROCESSING_BLOCK_GLOSRY.html), and all local declarations should be listed immediately after the introduction of a procedure. The definition of an interface and the declaration part of a class are global declarations in this view. Note that reference variables that refer to a class can only be declared after the class has been declared. The implementation part, on the other hand, is one of the processing blocks.

Declaration of a program-global field `g_field`, an instance attribute `attr` of a class, and a local field `field` of a method. Reference is made to the outer declarations in the inner declarations.

-   **Locally in Procedures**
-   Local data in [procedures](ABENPROCEDURE_GLOSRY.html) is valid while a procedure is being executed. It is created when the procedure is called and deleted when the procedure is exited. In addition to their local data and formal parameters, procedures see the global data of the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html). Methods also 'see' the components of their class.
-   **As Components of Classes**
-   [Static attributes](ABENSTATIC_ATTRIBUTE_GLOSRY.html) of classes exist for as long as the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the ABAP program exists. Instance attributes of classes are bound to the lifetime of objects. They are created when an object is instantiated and deleted along with the object by the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html). Classes also see the global data of the compilation unit.
-   **Globally in the Compilation Unit**
-   Global program data exists for as long as the internal session of the ABAP program exists. It is created when the program is loaded in the internal session, and deleted from the internal session when the program is removed. An ABAP program usually only sees its own global data (except for [interface work areas](ABENINTERFACE_WORK_AREA_GLOSRY.html)).

-   In methods, components of classes can be addressed using an [object component selector](ABENOBJECT_COMPONENT_SELECT_GLOSRY.html).
-   In statements in which a dynamic specification of a data type, a class, or an interface is possible, a global type can be addressed by specifying an [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html).

-   The [ABAP system fields](ABENSYSTEM_FIELDS.html) are located outside of the contexts listed above. They are hidden by global program data objects with the same names.
-   The same is true for the obsolete structure [`screen`](ABENSCREEN_STRUCTURE_OBSOLETE.html).
-   All data declared in the global declaration part of an ABAP program is global. Apart from the event block `AT SELECTION-SCREEN`, all data declared within event blocks and dialog modules is also global to the program. The data declared in the event blocks mentioned above is local to them. Data that is declared between closed processing blocks is also global in the program.

DATA g\_field TYPE string VALUE 'global field'. \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n DATA attr LIKE g\_field VALUE 'instance attribute'. \\n METHODS meth. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n DATA field LIKE attr VALUE 'local field'. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abentypes\_and\_objects.html