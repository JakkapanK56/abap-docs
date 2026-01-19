---
title: "ABENNEWS-610-SYSTEM"
description: |
  ABENNEWS-610-SYSTEM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-610-SYSTEM.htm"
abapFile: "ABENNEWS-610-SYSTEM.html"
keywords: ["if", "data", "types", "ABENNEWS", "610", "SYSTEM"]
---

[1. Content of the System Field `sy-calld`](#ABAP_MODIFICATION_1@4@)

[2. Replacement of the System Field `sy-repid`](#ABAP_MODIFICATION_2@4@)

The field `sy-calld` should contain `space` if the program is the first and only program in a [call sequence](ABENCALL_SEQUENCE_GLOSRY.html). `sy-calld` should contain *X* if the program is a called program in a call sequence. Previously, `sy-calld` was always set to *X* for `SUBMIT` without `RETURN`, even though this meant that the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) or the position in the call sequence of the caller is replaced by the called program. If the calling program was the first program in the call sequence, this produced errors in the application logic. From now on, `sy-calld` is not affected by `SUBMIT` without `RETURN`, and retains the value of the calling program whose internal session is being replaced.

The system field `sy-repid` is no longer a component of the structure `SY` in the ABAP program or the structured type `SYST` in ABAP Dictionary. Instead, from ABAP release 6.10, every program contains the built-in constants `sy-repid` and `syst-repid`, which both contain the name of the current program. There are also two built-in types `sy-repid` and `syst-repid`. The obsolete type references [`LIKE syst-repid`](ABAPDATA_SIMPLE.html) and [`TYPE sy-repid`](ABAPTYPES_SIMPLE.html) are, therefore, still possible.

In addition to considerable performance improvements in the external procedure call, this new feature also has the advantage that `sy-repid` can now also be passed as a parameter to external [procedures](ABENPROCEDURE_GLOSRY.html). The formal parameter is set to the name of the caller and not to the name of the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html), which means that a helper variable is no longer required.

This incompatible change can cause problems if ABAP programs refer to the previous structure `syst`, for example:

-   `DATA my_syst type syst.`
-   `... my_syst-repid ...`
-   `ASSIGN COMPONENT 'REPID' OF STRUCTURE sy TO ...`

abenabap.html abennews.html abennews-6.html abennews-610.html