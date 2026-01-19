---
title: "ABENRFC_LIMITATIONS"
description: |
  ABENRFC_LIMITATIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRFC_LIMITATIONS.htm"
abapFile: "ABENRFC_LIMITATIONS.html"
keywords: ["select", "update", "do", "if", "case", "data", "types", "ABENRFC", "LIMITATIONS"]
---

In contrast to the regular function module call, the following restrictions apply to an RFC:

-   [Pass-by value](ABENPASS_BY_VALUE_GLOSRY.html) must be selected for the `IMPORTING`, `EXPORTING`, and `CHANGING` parameters of a [remote-enabled function module](ABENREMOTE_ENABLED_FM_GLOSRY.html). This cannot be specified explicitly for `TABLES` parameters but is used implicitly for RFC.
-   The formal parameter of a [remote-enabled function module](ABENREMOTE_ENABLED_FM_GLOSRY.html) must be typed using data types from the ABAP Dictionary or using built-in ABAP types. Data types from [type pools](ABENTYPE_POOL_GLOSRY.html) cannot be specified.
-   No [reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html) can be passed in RFCs. The [formal parameters](ABENFORMAL_PARAMETER_GLOSRY.html) of a [remote-enabled function module](ABENREMOTE_ENABLED_FM_GLOSRY.html) cannot, therefore, be typed using a [reference type](ABENREFERENCE_TYPE_GLOSRY.html).
-   A [database commit](ABENDB_COMMIT.html) is triggered in every call that uses synchronous and asynchronous RFC. For this reason, synchronous or asynchronous RFC must not be used between ABAP SQL statements that open or close a [database cursor](ABENDATABASE_CURSOR_GLOSRY.html). Exceptions to this are:

-   During [updates](ABENUPDATE_GLOSRY.html), [sRFC](ABENSRFC_GLOSRY.html) and [aRFC](ABENSRFC_GLOSRY.html) do not cause a work process switch or a database commit.
-   During [background processing](ABENBACKROUND_PROCESSING_GLOSRY.html), a database commit is triggered, but the database cursor is kept open.

-   In a remotely called function module, no statements can be called that close the current [RFC session](ABENRFC_SESSION_GLOSRY.html) and hence the connection. An example of this is the statement `LEAVE PROGRAM` or `SUBMIT` without the addition `RETURN`.
-   Since only pass by value takes place in RFC, when exceptions do occur, intermediate results can never be accessed when a synchronous RFC is made. `TABLES` parameters are an exception to this. When the exception `SYSTEM_FAILURE` is raised, these parameters behave in the same way as when the function module is executed locally, in which case they are passed by reference. The data contained by a parameter of this type before the exception is passed to the client.
-   When passing character-like data, there is usually a conversion between the [code pages](ABENCODEPAGE_GLOSRY.html) involved. When data is passed between [MDMP systems](ABENMDMP-SYSTEM_GLOSRY.html) and [Unicode systems](ABENUNICODE_SYSTEM_GLOSRY.html), the mapping might not be unique. For structures defined in the ABAP Dictionary, the [text language](ABENTEXT_LANGUAGE_GLOSRY.html) is evaluated when the binary [RFC protocol](ABENRFC_PROTOCOL.html) is used.
-   [Information messages](ABENINFORMATION_MESSAGE_GLOSRY.html) and [warnings](ABENWARNING_GLOSRY.html) are handled like [status messages](ABENSTATUS_MESSAGE_GLOSRY.html).
-   In background RFC calls ([bgRFC](ABENBGRFC_GLOSRY.html) and the obsolete [tRFC](ABENTRFC_2_GLOSRY.html) and [qRFC](ABENQRFC_GLOSRY.html)), the statements [`COMMIT WORK`](ABAPCOMMIT.html) and [`ROLLBACK WORK`](ABAPROLLBACK.html) must not be executed within a Unit/LUW. In addition, no implicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html) can be triggered there.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abenrfc.html