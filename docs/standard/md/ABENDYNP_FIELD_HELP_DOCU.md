---
title: "ABENDYNP_FIELD_HELP_DOCU"
description: |
  ABENDYNP_FIELD_HELP_DOCU - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNP_FIELD_HELP_DOCU.htm"
abapFile: "ABENDYNP_FIELD_HELP_DOCU.html"
keywords: ["select", "do", "if", "data", "ABENDYNP", "FIELD", "HELP", "DOCU"]
---

`FIELD dynp_field [MODULE mod] WITH hlp.`

If the addition `WITH` is used in the event block at POH, the data element supplementary documentation specified in `hlp` is displayed when the function key F1 is selected on the associated screen element. The prerequisite is that the dynpro field `dynp_field` was defined with reference to a [data element](ABENDDIC_DATA_ELEMENTS.html) in the ABAP Dictionary and that [supplementary documentation](ABENDDIC_DATA_ELEMENTS_SEMA.html) for the current dynpro and the current program was created there.

`hlp` expects a global numeric data object of the ABAP program which contains the number of the data element supplementary documentation. The name of `hlp` must not simultaneously be the name of a data element in the ABAP Dictionary, because this will cause a program termination when the dynpro is used during the program execution. `MODULE` can be used to call a dialog module `mod` to fill the data object `hlp`.

The data element supplementary documentation replaces the data element documentation which is displayed by default for screen fields that are defined with reference to a data element. The data element supplementary documentation has to be specifically designed for the current dynpro and the current program. The associations between the data element supplementary documentation and dynpros of programs are stored in the database table `THLPF`. This association is created if the data element supplementary documentation for a dynpro field was created using forward navigation in the [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html). The association is not created if the data element supplementary documentation was created directly in the ABAP Dictionary.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_dynpro\_statements.html dynpfield.html abendynp\_field\_help.html