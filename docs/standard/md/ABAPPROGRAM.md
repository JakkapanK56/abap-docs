---
title: "ABAPPROGRAM"
description: |
  ABAPPROGRAM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPROGRAM.htm"
abapFile: "ABAPPROGRAM.html"
keywords: ["loop", "do", "if", "ABAPPROGRAM"]
---

[Short Reference](ABAPPROGRAM_SHORTREF.html)

``PROGRAM prog [[`list_options`](ABAPREPORT_LIST_OPTIONS.html)]``\\ 
             `[MESSAGE-ID mid]`\\ 
             `[REDUCED FUNCTIONALITY].`

[`... REDUCED FUNCTIONALITY`](#ABAP_ONE_ADD@1@)

The statement `PROGRAM` introduces a [module pool](ABENMODUL_POOL_GLOSRY.html) or a [subroutine pool](ABENSUBROUTINE_POOL_GLOSRY.html). It must be the first statement of a standalone program after any [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) are resolved. The name `prog` must be specified directly. The following applies to the additions:

This addition only has an effect in programs of program type [subroutine pool](ABENSUBROUTINE_POOL_GLOSRY.html) and otherwise produces a syntax check warning. In a subroutine pool that is introduced with the addition `REDUCED FUNCTIONALITY`, not all components that are loaded with a regular ABAP program are loaded. This reduces the [program load](ABENLOAD_GLOSRY.html) and memory consumption in the [session memory](ABENROLL_AREA_GLOSRY.html). However, the full ABAP language scope is not available for this.

If no parts of the missing functions are required, the addition `REDUCED FUNCTIONALITY` can be used to avoid the unnecessary resource consumption by subroutine pools.

-   In module pools, the additions [`list_options`](ABAPREPORT_LIST_OPTIONS.html) and `MESSAGE-ID` of the statement `PROGRAM` have the same meaning as the identically named additions in the statement [`REPORT`](ABAPREPORT.html). The addition `REDUCED FUNCTIONALITY` works only in subroutine pools and is otherwise ignored.
-   In subroutine pools, the specification of `MESSAGE-ID` has the same meaning as in the statement [`REPORT`](ABAPREPORT.html). Any additions [`list_options`](ABAPREPORT_LIST_OPTIONS.html) for the basic list are ignored, since subroutine pools do not have a separate [list buffer](ABENLIST_BUFFER_GLOSRY.html). Output statements in subroutine pools write to the current list of the calling [main program](ABENMAIN_PROGRAM_GLOSRY.html). The addition `REDUCED FUNCTIONALITY` only works in subroutine pools..

-   The keyword `PROGRAM` can also be replaced by the keyword [`REPORT`](ABAPREPORT.html). In module pools or subroutine pools, `REPORT` has the same meaning as `PROGRAM` and can be used with its additions. As a convention, module pools and subroutine pools should only be introduced by using `PROGRAM`.
-   The specification of `prog` is not absolutely necessary, but the name of the ABAP program from the [repository](ABENREPOSITORY_GLOSRY.html) should always be used.
-   The name of a module pool is not fixed, but should follow the naming conventions in ABAP Workbench, which specify that the name of module pools should start with `SAPM`.

-   The built-in structure [`syst`](ABENSYSTEM_FIELDS.html) is not loaded. Instead of `syst`, the structure `sy` with the same meaning can be used.
-   The built-in structure [`screen`](ABENSCREEN_STRUCTURE_OBSOLETE.html) is not loaded. The statements [`LOOP AT SCREEN`](ABAPLOOP_AT_SCREEN.html) and [`MODIFY SCREEN`](ABAPMODIFY_SCREEN.html) are therefore not possible.
-   It is not possible to work with the [dynpros](ABENDYNPRO_GLOSRY.html) of the [main program](ABENMAIN_PROGRAM_GLOSRY.html) of the current [program group](ABENPROGRAM_GROUP_GLOSRY.html).
-   No support is available for [spooling lists](ABENPRINT.html). The corresponding additions of the statements [`NEW-PAGE`](ABAPNEW-PAGE_PRINT.html) and [`SUBMIT`](ABAPSUBMIT_PRINT_PARAMETERS.html) cannot be used.

-   The addition `REDUCED FUNCTIONALITY` also works in subroutine pools that were created with [`GENERATE SUBROUTINE POOL`](ABAPGENERATE_SUBROUTINE_POOL.html).
-   The use of `REDUCED FUNCTIONALITY` is especially recommended for small subroutine pools that only contain simple help procedures
-   The use of `REDUCED FUNCTIONALITY` in a subroutine pool produces a syntax check warning that indicates that not all ABAP functions are available. If nonexistent functions are used, corresponding syntax errors are produced.

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_program\_statement.html