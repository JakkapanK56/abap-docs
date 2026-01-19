---
title: "ABENNEWS-46C-RUNTIME"
description: |
  ABENNEWS-46C-RUNTIME - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46C-RUNTIME.htm"
abapFile: "ABENNEWS-46C-RUNTIME.html"
keywords: ["update", "delete", "if", "catch", "method", "data", "types", "internal-table", "ABENNEWS", "46C", "RUNTIME"]
---

In ABAP release 4.6C, the entire ABAP runtime framework was overhauled, in terms of how programs were generated and executed. The following steps were taken to reduce the load size considerably and improve performance further.

[1\. Handling the Database Buffer](#ABAP_MODIFICATION_1@4@)

[2\. Handling Type Pools](#ABAP_MODIFICATION_2@4@)

[3\. Handling Structures](#ABAP_MODIFICATION_3@4@)

[4\. Further Developments](#ABAP_MODIFICATION_4@4@)

The statement [`PERFORM n ON ON ROLLBACK`](ABAPPERFORM.html), which is the equivalent to the statement [`PERFORM n ON COMMIT`](ABAPPERFORM.html), can now be used in the program. This means that all flagged form routines are executed when [`ROLLBACK WORK`](ABAPROLLBACK.html) is used.

Until now, if a termination message was raised by a [`CATCH SYSTEM-EXCEPTIONS ...`](ABAPCATCH_SYS.html) statement, only one rollback was carried out in the task handler area. Now the system calls a subroutine, which deletes all [`ON COMMIT`](ABAPPERFORM.html) information and performs the scheduled subroutines.

The system field `SY-ONCOM` is now set for local [updates](ABENUPDATE_GLOSRY.html) (as it is for asynchronous updates). This raises a runtime error when a [`COMMIT WORK`](ABAPCOMMIT.html) is triggered for a local update.

From now on, types in type pools that are not used are no longer generated in the programs that use the [`TYPE POOL`](ABAPTYPE-POOL.html). Dynamic accesses are now performed by loading the load table for the type pools at runtime.

In addition, constants in type pools that are not used are no longer generated in the programs that include them. Duplicate control blocks for components are no longer created in key lists for ABAP Dictionary tables. Again, dynamic accesses are now performed using type pool load.

Additional type information for structure components is no longer generated when the system performs simple operations like [`=`](ABAPMOVE.html) or [`IF`](ABAPIF.html).

Now, when a structure is passed to a [`form routine`](ABAPFORM.html), the type comparison is also performed when the actual parameter is [flat](ABENFLAT_GLOSRY.html) and the formal parameter is [deep](ABENDEEP_GLOSRY.html). (Previously, flat structures could only be compared with flat, and deep with deep).

Now, assignments to neighboring memory areas are bundled in one internal statement, as soon as the syntax check is performed or when the program is generated. This ensures that the system no longer creates superfluous administrative information.

If data objects from the [`Automation Controller`](ABENOLE2.html) are referenced, and then disappear from the stack or internal table, the runtime framework aborts as soon as the stack is created. This means, for example, that the object can be displayed in the short dump.

If a program calls a second program at runtime, the system switches to this second program much more quickly than before. It also switches more quickly to a method called by another method. This performance gain is important, if both translation units are in the `[PXA](ABENPXA_GLOSRY.html) (Program Executable Area)`, less so when the program is being read from the database.

abenabap.html abennews.html abennews-4.html abennews-46c.html