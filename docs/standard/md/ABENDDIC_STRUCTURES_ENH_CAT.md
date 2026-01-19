---
title: "ABENDDIC_STRUCTURES_ENH_CAT"
description: |
  ABENDDIC_STRUCTURES_ENH_CAT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_STRUCTURES_ENH_CAT.htm"
abapFile: "ABENDDIC_STRUCTURES_ENH_CAT.html"
keywords: ["do", "if", "case", "class", "data", "types", "ABENDDIC", "STRUCTURES", "ENH", "CAT"]
---

DDIC structures and DDIC database tables that are delivered by SAP can be extended using [customizing includes](ABENCUSTOMIZING_INCLUDE_GLOSRY.html) or [append structures](ABENAPPEND_STRUCTURE_GLOSRY.html).

These types of changes cause problems if the extensions change the [structure fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html). For this reason, DDIC structures and DDIC database tables are classified in order to be able to recognize and handle problems related to structure extensions. This classification is used in the syntax check for ABAP programs to create a warning at all positions where a program works with structures, and where later structure extensions could cause syntax errors or changed program behavior. When a structure or a DDIC database table is defined in the ABAP Dictionary, the enhancement categories shown in the following table can be used as a classification.

The warnings from the program check are classified into three levels, depending on the effects of the allowed structure extensions:

If the structure `ddic_struc` in the ABAP Dictionary is defined only with [flat](ABENFLAT_GLOSRY.html) components but is classified as *Can be enhanced (deep)*, the following program section produces a warning in the syntax check. If the structure were to be extended by a [deep](ABENDEEP_GLOSRY.html) component after the program was delivered, the program would have incorrect syntax and would no longer be executable. In this case, therefore either the structure `ddic_struc` must be classified in the ABAP Dictionary as *Can be enhanced (character-like)* or else the offset/length cannot be specified in the program.

DATA: my\_struc TYPE ddic\_struc, \\n str TYPE string, \\n off TYPE i, \\n len TYPE i. \\n... \\nstr = my\_struc+off(len). **Level** **Category** **Meaning** **Level** **Type of Check** **Meaning** 1 Not classified The structure does not have an enhancement category. 2 Cannot be enhanced The structure must not be extended. 3 Can be enhanced (character-like) All structure components and their extensions must be character-like and flat. 4 Can be enhanced (character-like or numeric) All structure components and their extensions must be flat. 5 Can be enhanced (deep) All structure components and their extensions can have any data type. A Syntax check An extension that completely exhausts the enhancement category of the affected structure produces a syntax error. B Extended check Permitted extensions can produce syntax errors, but not always. C Extended check Permitted extensions cannot produce syntax errors, although changes to program behavior do cause semantic problems. abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_structures.html abenddic\_structures\_tech.html