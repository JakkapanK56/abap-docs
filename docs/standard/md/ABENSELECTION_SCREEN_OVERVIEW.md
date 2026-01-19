---
title: "ABENSELECTION_SCREEN_OVERVIEW"
description: |
  ABENSELECTION_SCREEN_OVERVIEW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELECTION_SCREEN_OVERVIEW.htm"
abapFile: "ABENSELECTION_SCREEN_OVERVIEW.html"
keywords: ["select", "if", "case", "data", "ABENSELECTION", "SCREEN", "OVERVIEW"]
---

Selection screens are special [dynpros](ABENDYNPRO_GLOSRY.html) that can be defined in executable programs, function pools, and module pools. Selection screens are defined in the global declaration part of the specified ABAP programs with the statements `SELECT-OPTIONS`, `SELECTION-SCREEN` and `PARAMETERS` without using the Screen Painter. The [screen layouts](ABENSCREEN_GLOSRY.html) of selection screens can contain a subset of the screen elements of general dynpros.

Selection screens are in the same namespace as the dynpros of the program. In executable programs, [dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html) 1000 is reserved for a standard selection screen. In addition to the standard selection screen, standalone selection screens can also be defined. Standalone selection screens can only be defined in function pools and module pools.

When an ABAP program is activated, the components of the program selection screen, that is, screens with screen elements and [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html), are generated automatically.

The generated dynpros cannot be edited directly, which also means that certain default settings cannot be disabled. For example, input fields are always templates in which certain characters (*!*, *\=*, *\_*) have special [functions](ABENABAP_DYNPROS_FIELDS.html).

Selection screens essentially have two tasks:

The ABAP runtime framework sets a default GUI status and a default title for a selection screen. There is no guarantee that the statement [`SET PF-STATUS`](ABAPSET_PF-STATUS_DYNPRO.html) works at [PBO](ABENPBO_GLOSRY.html) for the selection screen. To define a separate GUI status for a selection screen or to deactivate the functions of the screen generated, one of the function modules `RS_SET_SELSCREEN_STATUS` or `RS_EXTERNAL_SELSCREEN_STATUS` can be used in exceptional cases.

The default title in the title bar of selection screens is the title of the program defined in the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html). This title can be overwritten as follows:

No dialog modules for selection screens can be defined in the ABAP program. Instead, the runtime framework raises specific events during PBO and [PAI](ABENPAI_GLOSRY.html) processing of the dynpro, which can be handled in corresponding event blocks during [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html).

A standard selection screen can also be defined in a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html). If an executable program is linked with a logical database, its standard selection screen is composed of the logical database and its own database.

-   They enable users to input selection parameters (single values) and selection criteria (interval selections in tabular form).
-   they represent the interface of executable programs whose input fields can be supplied by the calling program with [`SUBMIT`](ABAPSUBMIT.html).

-   With the addition `TITLE` in the case of selection screens defined using [`SELECTION-SCREEN BEGIN OF SCREEN`](ABAPSELECTION-SCREEN_DEFINITION.html).
-   With the statement [`SET TITLEBAR`](ABAPSET_TITLEBAR_DYNPRO.html) at PBO in the case of standard selection screens.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html