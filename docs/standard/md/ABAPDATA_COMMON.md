---
title: "ABAPDATA_COMMON"
description: |
  ABAPDATA_COMMON - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDATA_COMMON.htm"
abapFile: "ABAPDATA_COMMON.html"
keywords: ["if", "class", "data", "types", "ABAPDATA", "COMMON"]
---

[Short Reference](ABAPDATA_COMMON_PART_SHORTREF.html)

`DATA BEGIN OF COMMON PART [name].    ...    DATA ...    ...  DATA END OF COMMON PART [name].`

This variant of the statement [`DATA`](ABAPDATA.html) with the additions `BEGIN OF COMMON PART` and `END OF COMMON PART` defines a global [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html) that can be used jointly by the programs of a [program group](ABENPROGRAM_GROUP_GLOSRY.html). All data objects declared between these statements using `DATA` are part of this [common area](ABENCOMMON_AREA_GLOSRY.html).

The addition `COMMON PART` can only be used in the global declaration part of an ABAP program. Multiple common [data areas](ABENDATA_AREA_GLOSRY.html) can be declared in a program, but they cannot be nested. Every common data area must be given a unique name using the `name` addition. The addition `name` can be omitted only if there is just one common data area in a program.

The following rules apply:

Declares a common data area `struc` in the include program `part`. By including the include program, the three programs `param`, `sum` and `dis` have shared access to the data area `struc` if they are part of a single program group. The latter is accomplished by loading the programs `sum` and `disp` into the program group of `param` using external subroutine calls. The subroutine `display` in the program `disp` outputs the input values to the program `param` and the result of the summation in the subroutine `summing`.

-   In all programs in a program group that declare common data areas with the same name, these areas must have identical layouts. Common data areas are hence viewed as structures whose [structure fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html) must be identical and whose deep components must be compatible (pairwise). If not, the runtime error `LOAD_COMMON_PART_STRUCT` occurs.
-   In common data areas, no [object reference variables](ABENOBJECT_REFER_VARIABLE_GLOSRY.html) with the static type of program-local classes and interfaces, nor [data reference variables](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html) with the static type of program-local structured types, can be declared.

-   The use of common data areas in otherwise independent programs is highly error-prone with regard to both their maintainability and their functionality. Therefore, common data areas should no longer be used. The parameter interfaces of [procedures](ABENPROCEDURE_GLOSRY.html) are available for exchanging data between programs.
-   Common data areas for different programs are generally declared in an [include program](ABENINCLUDE_PROGRAM_GLOSRY.html) that is embedded in all programs involved. However, multiple use of include programs is no longer recommended.
-   For more information about issues related to interface work areas, see [Program Groups in External Procedure Calls](ABENPROGRAM_GROUPS.html).

\* INCLUDE part. \\nDATA: BEGIN OF COMMON PART struc, \\n f1 TYPE i, \\n f2 TYPE i, \\n s TYPE i, \\n END OF COMMON PART struc. \\n\\ \\nPROGRAM param. \\nINCLUDE part. \\nPARAMETERS: \\n p1 TYPE i DEFAULT 20, \\n p2 TYPE i DEFAULT 90. \\nf1 = p1. \\nf2 = p2. \\nPERFORM summming IN PROGRAM sum. \\n\\ \\nPROGRAM sum. \\nINCLUDE part. \\nFORM summing. \\n s = f1 + f2. \\n PERFORM display IN PROGRAM disp. \\nENDFORM. \\n\\ \\nPROGRAM disp. \\nINCLUDE part. \\nFORM display. \\n WRITE: / f1, f2, s. \\nENDFORM. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abeninterface\_areas\_obsolete.html