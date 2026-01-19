---
title: "ABENDYNP_FIELD_HELP"
description: |
  ABENDYNP_FIELD_HELP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNP_FIELD_HELP.htm"
abapFile: "ABENDYNP_FIELD_HELP.html"
keywords: ["do", "if", "case", "data", "ABENDYNP", "FIELD", "HELP"]
---

In the event blocks at [POH](ABENPOH_GLOSRY.html) and [POV](ABENPOV_GLOSRY.html), only `FIELD` statements are possible. The statement `MODULE` can only be used as addition of the statement `FIELD`. In the case of these events, no data is transported automatically from the [dynpro](ABENDYNPRO_GLOSRY.html) to the ABAP program and the statement `FIELD` is ignored accordingly. The statement `FIELD` can either be linked with the statement `MODULE` or specified with the addition `WITH` at POH.

If the statement `FIELD` is specified more than once for the same [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html), only the first statement is executed. If the event blocks at POH and POV are not implemented, field or input help fields are displayed that are defined in the system or in the ABAP Dictionary. If no help is defined, this is displayed in a message in the task bar.

For a more detailed description, see also [Field Help, Input Help, and Dropdown List Boxes](ABENABAP_DYNPROS_HELP.html).

-   [Calling a Dialog Module](ABENDYNP_FIELD_HELP_DIALOG.html)
-   [Calling the Data Element Supplementary Documentation](ABENDYNP_FIELD_HELP_DOCU.html)

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_dynpro\_statements.html dynpfield.html