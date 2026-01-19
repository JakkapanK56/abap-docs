---
title: "ABENCALL_PROCEDURES_EXTERN"
description: |
  ABENCALL_PROCEDURES_EXTERN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCALL_PROCEDURES_EXTERN.htm"
abapFile: "ABENCALL_PROCEDURES_EXTERN.html"
keywords: ["if", "method", "class", "data", "ABENCALL", "PROCEDURES", "EXTERN"]
---

The following procedures of the same AS ABAP can be called externally:

During the first external call of a procedure of the same [AS ABAP](ABENAS_ABAP_GLOSRY.html), its [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) is loaded into the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the calling program if it has not yet been loaded. Except when loading [class pools](ABENCLASS_POOL_GLOSRY.html), the event [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html) is also raised, which calls the [program constructor](ABENPROGRAM_CONSTRUCTOR_GLOSRY.html) of the program. External calls of subroutines and methods of local classes are not recommended and are critical, since the assignment of the loaded compilation unit to a [program group](ABENPROGRAM_GROUP_GLOSRY.html) is usually not determined:

Furthermore, external procedure calls may have different program properties between the calling and the called programs.

[Only call suitable procedures externally](ABENINTERN_EXTERN_PROC_CALL_GUIDL.html)

Any subroutines and methods of local classes defined in an [include program](ABENINCLUDE_PROGRAM_GLOSRY.html) cannot be called externally by specifying the include program, since it cannot be generated as a standalone program. The procedures can only be called by specifying the name of the compilation unit if the include program itself is included in the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html).

External calls of the function module `READ_SPFLI_INTO_TABLE` and the method `DISPLAY` of the global class `CL_DEMO_OUTPUT`.

-   Procedures which are intended for external calls:

-   Methods of global classes in class pools that are visible at the calling position, that is, [public](ABENPUBLIC_GLOSRY.html) methods in all programs, [protected](ABENPROTECTED_GLOSRY.html) methods in subclasses, and [private](ABENPRIVATE_GLOSRY.html) methods in [friends](ABENFRIEND_GLOSRY.html) of the classes.
-   [Function modules](ABENFUNCTION_MODULE_GLOSRY.html) in function pools
-   Methods of local classes of other programs that are visible at the calling position if a [reference variable](ABENREFERENCE_VARIABLE_GLOSRY.html) with a reference to an object of the class was passed to the calling program

-   Procedures which are not intended for external calls but can still be called externally (but should not be):

-   [Subroutines](ABENSUBROUTINE_GLOSRY.html) in [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html), [module pools](ABENMODUL_POOL_GLOSRY.html), [function pools](ABENFUNCTION_POOL_GLOSRY.html), and [subroutine pools](ABENSUBROUTINE_POOL_GLOSRY.html)
-   Static methods of local classes of a [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) that are visible at the call position, if the name of the class is specified dynamically using an [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html)

-   [Program Groups in External Procedure Calls](ABENPROGRAM_GROUPS.html)

-   [Fixed point arithmetic in external procedure calls](ABENFIXED_POINT_ARITH_EXTERNAL.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itab TYPE spfli\_tab. \\n\\ \\nCALL FUNCTION 'READ\_SPFLI\_INTO\_TABLE' \\n EXPORTING \\n id = 'LH' \\n IMPORTING \\n itab = itab \\n EXCEPTIONS \\n not\_found = 1 \\n OTHERS = 2. \\n\\ \\nIF sy-subrc = 0. \\n out->write( itab ). \\nENDIF. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html