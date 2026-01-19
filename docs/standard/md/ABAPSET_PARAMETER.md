---
title: "ABAPSET_PARAMETER"
description: |
  ABAPSET_PARAMETER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_PARAMETER.htm"
abapFile: "ABAPSET_PARAMETER.html"
keywords: ["select", "do", "if", "case", "data", "ABAPSET", "PARAMETER"]
---

[Short Reference](ABAPSET_PARAMETER_SHORTREF.html)

`SET PARAMETER ID pid FIELD dobj.`

This statement sets the content of the [SPA/GPA](ABENSPA_GPA_PARAMETER_GLOSRY.html) parameter specified in `pid` in the [user memory](ABENUSER_MEMORY_GLOSRY.html) to the content of the data object `dobj`. The ID `pid` expects a [flat](ABENFLAT_GLOSRY.html) character-like field that can contain a maximum of 20 characters and not only blanks. `pid` is case-sensitive. `dobj` expects a flat character-like field whose binary content is passed unconverted.

The statement `SET PARAMETER` does not access the user memory directly. Instead, it accesses a local mapping of the SPA/GPA parameter in the [session memory](ABENROLL_AREA_GLOSRY.html), which is loaded during rollup and saved in the user memory when rolled out (see [SPA/GPA Parameters and ABAP Programs](ABENSPA_GPA.html)). If the SPA/GPA parameter specified for the current user in `pid` does not yet exist in the [user memory](ABENUSER_MEMORY_GLOSRY.html), it is created. If the SPA/GPA parameter already existed for the current user, its value is overwritten.

In a program, SPA/GPA parameters can only be created or filled with values that have a name in the table `TPARA`. If it is possible to statically determine that an ID specified `pid` is not in the database table `TPARA`, the extended program check reports an error.

If the user selects one of the flight connections displayed in the basic list, the SPA/GPA parameters `CAR` and `CON` are set to the ID of the airline and the number of the connection at the event `AT LINE-SELECTION`. The names of both parameters are defined in the table `TPARA` for this purpose. In the initial [dynpro](ABENDYNPRO_GLOSRY.html) of the transaction `DEMO_TRANSACTION`, two input fields are linked to these SPA/GPA parameters and are displayed with the selected values as [start values](ABENSTART_VALUE_GLOSRY.html).

-   An SPA/GPA parameter specified in `pid` must be entered in uppercase to match a name in the database table `TPARA`.
-   Since the statements `SET PARAMETER` and `GET PARAMETER` do not work directly with the SPA/GPA parameters of the user memory, they are only suitable for passing data within an [ABAP session](ABENABAP_SESSION_GLOSRY.html) and not for passing data between parallel ABAP sessions because programs that run in parallel can affect the state of the parameters in an uncontrolled manner.

-   *Cause:* Key only contains blank characters
    *Runtime error:*\\ `SET_PARAMETER_ID_SPACE`
-   *Cause:* Key is longer than 20 characters
    *Runtime error:*\\ `SET_PARAMETER_ID_TOO_LONG`
-   *Cause:* Value is longer than 255 characters
    *Runtime error:*\\ `SET_PARAMETER_VALUE_TOO_LONG`
-   *Cause:* Memory limit of the user memory was reached
    *Runtime error:*\\ `SET_PARAMETER_MEMORY_OVERFLOW`

DATA: carrier TYPE spfli-carrid, \\n connection TYPE spfli-connid. \\n\\ \\nSTART-OF-SELECTION. \\n SELECT carrid, connid \\n FROM spfli \\n INTO (@carrier, @connection). \\n WRITE: / carrier HOTSPOT, connection HOTSPOT. \\n HIDE: carrier, connection. \\n ENDSELECT. \\n\\ \\nAT LINE-SELECTION. \\n SET PARAMETER ID: 'CAR' FIELD carrier, \\n 'CON' FIELD connection. \\n CALL TRANSACTION 'DEMO\_TRANSACTION'. abenabap.html abenabap\_reference.html abencreate\_objects.html abenspa\_gpa.html