---
title: "ABENDYNP_SUBSCREEN"
description: |
  ABENDYNP_SUBSCREEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNP_SUBSCREEN.htm"
abapFile: "ABENDYNP_SUBSCREEN.html"
keywords: ["select", "loop", "do", "while", "if", "data", "ABENDYNP", "SUBSCREEN"]
---

The subscreen technique enables one dynpro to be embedded within another dynpro at runtime. The term *subscreen* applies both to the dynpro where it is embedded and the area on the main dynpro in which it is placed. This section is about subscreen areas. The actual dynpros that are embedded are called subscreen dynpros. When subscreens are embedded, the flow logic of the subscreen dynpro is also embedded. Using subscreens on dynpros is like using includes in ABAP programs.

Subscreens enable the content of a dynpro to be expanded dynamically at runtime. For example, dynpro exits, which are part of the enhancement concept, use the subscreen technique. Some complex dynpro elements, like tabstrips, are also based on subscreens.

The following must be done before using subscreens:

**Defining Subscreen Areas**

Subscreen areas are defined using Screen Painter in the layout of the dynpro on which subscreens are to be embedded. Each subscreen area on a dynpro has a unique name, and a position, length, and height. Subscreen areas may not overlap either with each other or with other dynpro elements. It is also possible to specify whether a subscreen area can be resized vertically or horizontally when the user resizes the window. If the area supports resizing, a minimum size can be specified. If the resizing attributes are selected, the PAI event is triggered whenever the user resizes the main dynpro.

**Defining Subscreen Dynpros**

Subscreen dynpros can be created either in the same ABAP program or a different program. Subscreen dynpros are created by entering the dynpro type `Subscreen` in the dynpro attributes. The static next dynpro must be the dynpro number of the subscreen itself. The size of the dynpro must be chosen to make sure that it fits within the subscreen area where it is placed. If the subscreen dynpro is too big for the subscreen area, only the top left-hand corner of it is displayed.

The layout, element list, and flow logic of a subscreen dynpro are created in the same way as a regular dynpro. Subscreen dynpros may also include other subscreens. However, the following restrictions apply:

Selection screens can also be defined as subscreens.

*Including Subscreens Directly*

The statement [`CALL SUBSCREEN`](CALL.html) can be used to include other screen layouts directly in the [screen layout](ABENSCREEN_GLOSRY.html) of a [dynpro](ABENDYNPRO_GLOSRY.html) in the form of subscreens. Here, subscreen areas must first be defined in the screen layout of the current dynpro. Every subscreen area has a unique name and can be configured to support changes in screen size. If the latter is defined, each size change in the current GUI window raises the [PAI](ABENPAI_GLOSRY.html) event.

As an example, the following statement is used in the PBO event of the main dynpro:

PROCESS BEFORE OUTPUT. \\n... \\n   CALL SUBSCREEN area INCLUDING prog dynp. \\n...

This statement assigns the subscreen dynpro with number `dynp` to the subscreen area called area. `prog` must specify the ABAP program in which the subscreen dynpro is defined. If it does not find a corresponding subscreen dynpro, a runtime error occurs. The PBO flow logic of the subscreen dynpro is also included at the same point. This can call PBO modules of the ABAP program in which the subscreen dynpro is defined. At the end of the subscreen PBO, the global fields from the program are passed to any identically named fields in the subscreen dynpro. The PBO flow logic of the subscreen dynpro can itself include further subscreen dynpros.

The name `area` of the subscreen area must be entered directly without quotation marks. The names `prog` and `dynp` can be specified either as literals or variables. If variables are used, identically named variables must be declared and filled in the ABAP program. The dynpro number `dynp` must be four digits long. If a subscreen dynpro is not assigned to a subscreen area, it remains empty.

To call the PAI flow logic of the subscreen dynpro, the following statement is used in the PAI flow logic of the main dynpro:

PROCESS AFTER INPUT. \\n... \\n   CALL SUBSCREEN area. \\n...

This statement includes the PAI flow logic of the subscreen dynpro included in the subscreen area in the PBO event. This can call PAI modules of the ABAP program in which the subscreen dynpro is defined. Data is transported between identically named fields in the subscreen dynpro and the ABAP program either when the PAI event is triggered, or after the corresponding `FIELD` statements in the PAI flow logic of the subscreen dynpro.

The statement `CALL SUBSCREEN` cannot be placed between `CHAIN` and `ENDCHAIN` or `LOOP` and `ENDLOOP`. While a subscreen dynpro is being processed, the system field `sy-dynnr` contains its dynpro number. Its content therefore changes when the statement `CALL SUBSCREEN` is executed and when the processing of the main dynpro resumes.

When subscreen dynpros are used, the data from their input/output fields must be transported to and from the ABAP programs in which they are defined. The function codes of user actions on the dynpro, on the other hand, are always passed to the `ok_code` field of the main dynpro, and transported into the ABAP program in which it is defined. The function codes of included subscreen dynpros should therefore be distinguishable from each other.

If, for encapsulation reasons, subscreen dynpros are defined in other ABAP programs, the required global data of their ABAP programs must be transported to the program of the calling dynpro after their PAI flow logic is called.

For example, subscreen dynpros can be defined in function groups and their global data assigned to function module parameters and back. The function modules must then be called in appropriate dialog modules in the main program to transport the data.

The global data from the main program can be exported as a data cluster to the ABAP memory before PBO of a subscreen dynpro and imported to a PBO module of the subscreen dynpro. The reverse happens at PAI time.

**Note** Subscreens are the screen layouts of special [subscreen dynpros](ABENSUBSCREEN_DYNPRO_GLOSRY.html). When a subscreen is included, the flow logic of the subscreen dynpro is also included. Subscreens can also include other subscreens. Subscreens cannot have their own OK field. Instead, user actions on subscreens pass the function codes to the OK field of the including dynpro. In the PAI event block of a subscreen dynpro, a [*MODULE*](MODULE.html) statement is never executed with the *AT EXIT-COMMAND* addition.

*Including Subscreens Using Controls*

Subscreens can be included using special [controls](ABENCONTROL_GLOSRY.html):

Subscreens dynpros are defined like regular dynpros in the [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html) and are flagged there as regular dynpros. [Selection screens](ABAPSELECTION-SCREEN_SUBSCREEN.html) can also be defined as subscreens.

[Dynpros, Subscreens](ABENDYNPRO_SUBSCREEN_ABEXA.html)

-   The dynpro elements should be arranged so that they are not truncated if a subscreen area is too small.
-   If multiple subscreen dynpros are created in an ABAP program, the individual dynpro elements must have names unique among the subscreens. If the subscreen dynpros are part of the same program as the main dynpro, the names cannot be used twice there. Otherwise, data transported from the dynpro in the ABAP program must be separated after each user action.
-   Subscreen dynpros cannot have their own `ok_code` field. Function codes associated with user actions on subscreens are placed in the `ok_code` field of the main dynpro. This also applies to subscreen dynpros defined in a different program to the main dynpro.
-   The flow logic of a subscreen dynpro cannot contain module calls using `AT EXIT-COMMAND`. Type `E` function codes can only be handled in the main dynpro.
-   The flow logic of a subscreen dynpro cannot contain any dialog modules containing the ABAP statements `SET TITLEBAR`, `SET PF-STATUS`, `SET SCREEN`, `LEAVE SCREEN`, or `LEAVE TO SCREEN`. Any of these statements produces a runtime error. This means that the GUI status of a main dynpro cannot be modified in a subscreen dynpro.

-   [Tabstrip Controls](ABENDYNP_TABSTRIP.html)
-   [Splitter Controls](ABENDYNP_SPLITTER_CONTROL_SPCL.html)
-   [Custom Controls](ABENDYNPRO_CUSTOM_CONTROLS.html)
-   [Table Controls](ABENDYNP_TABLE_CONTROLS.html)

1.  Subscreen areas must be defined on a dynpro.
2.  Suitable subscreen dynpros must be defined.
3.  The subscreen dynpros must be embedded dynamically in the subscreen areas.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html