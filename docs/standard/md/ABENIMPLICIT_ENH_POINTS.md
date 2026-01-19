---
title: "ABENIMPLICIT_ENH_POINTS"
description: |
  ABENIMPLICIT_ENH_POINTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENIMPLICIT_ENH_POINTS.htm"
abapFile: "ABENIMPLICIT_ENH_POINTS.html"
keywords: ["select", "do", "method", "class", "ABENIMPLICIT", "ENH", "POINTS"]
---

In addition to [enhancement options](ABENENHANCEMENT_POINT_GLOSRY.html) that can be created explicitly using [`ENHANCEMENT-POINT`](ABAPENHANCEMENT-POINT.html) and [`ENHANCEMENT-SECTION`](ABAPENHANCEMENT-SECTION.html), implicit enhancement options exist in the following places in ABAP programs:

The enhancement implementations for implicit enhancement options can only ever be bound to a single compilation unit, which means that the implicit enhancement options are not available in include programs when the following applies:

To make implicit enhancement options visible in the ABAP Editor, choose *Edit -> Enhancement Operations -> Show Implicit Enhancement Points*. They can be enhanced by using [source code enhancements](ABENSOURCE_CODE_ENHANCEMENT_GLOSRY.html) in the same way as explicit enhancement options.

-   After the last line of the source code of executable programs, function pools, module pools, subroutine pools, and include programs.
-   Before the first and after the last line of the implementation of a procedure (after the introductory statement and in front of the `END` statement)
-   Before the first and after the last line of a [source code plug-in](ABENSOURCE_CODE_PLUGIN_GLOSRY.html) (after `ENHANCEMENT` and in front of `ENDENHANCEMENT`)
-   At the end of a visibility section in the declaration part of a local class
-   At the end of a list of formal parameters of the same type at the declaration of local methods
-   In structure definitions using `BEGIN OF` and `END OF` in front of the statement with the addition `END OF`.

-   The include program is not included in a compilation unit.
-   The include program is included more than once in a compilation unit.
-   The include program is included in multiple programs, and none of these programs is selected as a relevant master program in the ABAP Workbench.
-   The include program is included in multiple programs and at least one of these programs contains an include-bound explicit enhancement option, that is, an option defined using the addition [`INCLUDE BOUND`](ABAPENHANCEMENT-POINT.html).

-   The visibility sections of global classes and the parameter interfaces of function modules and global methods also contain implicit enhancement options. These can be displayed and enhanced in the Class Builder or Function Builder.
-   [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) do not have any implicit enhancement options.

abenabap.html abenabap\_reference.html abenenhancement\_framework.html abensource\_code\_enhancement.html