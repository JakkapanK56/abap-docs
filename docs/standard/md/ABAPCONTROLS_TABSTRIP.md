---
title: "ABAPCONTROLS_TABSTRIP"
description: |
  ABAPCONTROLS_TABSTRIP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCONTROLS_TABSTRIP.htm"
abapFile: "ABAPCONTROLS_TABSTRIP.html"
keywords: ["select", "if", "case", "data", "ABAPCONTROLS", "TABSTRIP"]
---

[Short Reference](ABAPCONTROLS_SHORTREF.html)

`CONTROLS contrl TYPE TABSTRIP.`

Declares a [tabstrip control](ABENTABSTRIP_CONTROL_GLOSRY.html). If the type `TABSTRIP` is specified in the statement `CONTROLS`, a [deep structure](ABENDEEP_STRUCTURE_GLOSRY.html) is created with the name of the [control](ABENCONTROL_GLOSRY.html) and the type `cx_tabstrip` of the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `CXTAB`. From this structure, only the component `activetab` is required in the program.

In [PBO](ABENPBO_GLOSRY.html) processing, the active tabstrip page is specified by assigning the function code of a [tab title](ABENTAB_TITLE_GLOSRY.html) to the component `activetab`. The first tabstrip page is active by default. When scrolling in the SAP GUI, the tabstrip control can be initialized in this way. When scrolling in an ABAP program, the tabstrip page selected by the user must be activated by this assignment. At the same time, it must be ensured that the required [subscreen](ABENSUBSCREEN_GLOSRY.html) is included in the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html) using the statement [`CALL SUBSCREEN`](CALL.html).

In [PAI](ABENPAI_GLOSRY.html) processing, the component `activetab` contains the function code of the active tab title. When scrolling in the SAP GUI, the tabstrip page currently being displayed can be determined in this way.

The same applies to the inclusion of subscreens of tabstrips using [`CALL SUBSCREEN`](CALL.html) as to regular subscreens.

If, on a dynpro, a tabstrip control is defined with three untyped tab titles with the function codes *TAB1*, *TAB2*, and *TAB3* and a subscreen area `SUB`, scrolling can be programmed in ABAP as follows. In a PBO module `prepare_tabstrip`, the component `activetab` of the structure `tab_strip` created using `CONTROLS` is assigned the function code of the first tab title. After a tab title has been selected, this component is set to the corresponding function code in the PAI module `handle_user_command`. The number of the required [subscreen dynpro](ABENSUBSCREEN_DYNPRO_GLOSRY.html) is assigned to the data object `dynnr` that is used for including the subscreen in the dynpro flow logic. The associated programming of the dynpro flow logic can be seen in the example for [`CALL SUBSCREEN`](CALL.html).

CONTROLS tab\_strip TYPE TABSTRIP. \\nDATA: ok\_code TYPE sy-ucomm, \\n dynnr TYPE sy-dynnr. \\n... \\nMODULE prepare\_tabstrip OUTPUT. \\n IF tab\_strip-activetab IS INITIAL OR \\n dynnr IS INITIAL. \\n tab\_strip-activetab = 'TAB1'. \\n dynnr = '0110'. \\n ENDIF. \\nENDMODULE. \\nMODULE handle\_user\_command INPUT. \\n CASE ok\_code. \\n WHEN 'TAB1'. \\n dynnr = '0110'. \\n WHEN 'TAB2'. \\n dynnr = '0120'. \\n WHEN 'TAB3'. \\n dynnr = '0130'. \\n ... \\n ENDCASE. \\n IF ok\_code(3) = 'TAB'. \\n tab\_strip-activetab = ok\_code. \\n ENDIF. \\nENDMODULE. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html abapcontrols.html