---
title: "Dialog Modules and Event Blocks - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendial_mod_event_block_guidl.htm"
abapFile: "abendial_mod_event_block_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Modularization units](ABENMODULARIZATION_UNIT_GUIDL.md) → 

Dialog Modules and Event Blocks

Background

Besides procedures, there are two further types of processing blocks. However, they do not have a parameter interface and do not allow declaration of local data: (AT SELECTION-SCREEN and GET are exceptions but they should not be exploited):

-   Dialog modules
    Dialog modules are introduced using the statement MODULE and ended using the statement ENDMODULE. These modules form the functional interface between classic dynpros and the associated ABAP program. They are called from within the dynpro flow logic.

-   Event blocks
    Event blocks are introduced by the corresponding keyword and implicitly ended by the next processing block. The processing of an event block is triggered by the ABAP runtime environment when the relevant event occurs. There are event blocks for:

-   Loading a program (LOAD-OF-PROGRAM)

-   Reporting events that occur during the processing of an executable program (with a logical database) (INITIALIZATION, START-OF-SELECTION, GET, END-OF-SELECTION)

-   Selection screen events (AT SELECTION-SCREEN ...)

-   List events of classic list processing (AT LINE-SELECTION, AT USER-COMMAND)

Rule

No implementations in dialog modules and event blocks

Only use dialog modules and event routines if they are necessary from a technical viewpoint. In these cases, do not implement the required function. Instead, call the relevant (local) methods.

Details

Since it is not possible to declare local data in dialog modules and event blocks, you cannot implement any useful program logic. This means that any dialog modules and event blocks (provided that they are still necessary) should only contain one method call. If you [use ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md "Guideline") consistently, only the following elements are required:

-   LOAD-OF-PROGRAM or INITIALIZATION as the program constructor in cases where [program types](ABENPROGRAM_TYPE_GUIDL.md "Guideline") other than class pools are used

-   Dialog modules and AT SELECTION-SCREEN when [classic dynpros and selection screens](ABENENCAP_CLASS_INTERF_GUIDL.md "Guideline") are processed

-   START-OF-SELECTION in [executable programs](ABENPROGRAM_TYPE_GUIDL.md "Guideline") for background processing To improve readability, you should always specify the statement explicitly (although it is optional in many situations).

-   Although possible in the syntax, you should never specify an event block more than once within a program.

Note

Using LOAD-OF-PROGRAM in a function group is basically the same as using a static constructor in a global class. In executable programs, you can use INITIALIZATION instead, if any parameters passed using SUBMIT need to be evaluated.

Example

The following source code shows the PAI modules of the function group DEMO\_CR\_CAR\_RENTAL\_SCREENS from the package SABAP\_DEMOS\_CAR\_RENTAL\_DYNPRO. The screens in this package can be called using transaction DEMO\_CR\_CAR\_RENTAL. These dialog modules adhere to the above rule. They do not contain their own implementations. They call methods of a local class of the function group.

MODULE cancel INPUT.
  screen\_handler=>cancel( ).
ENDMODULE.

MODULE user\_command\_0100 INPUT.
  screen\_handler=>user\_command\_0100( ).
ENDMODULE.

MODULE customers\_mark INPUT.
  customer\_table=>mark( ).
ENDMODULE.

MODULE reservations\_mark INPUT.
  reservation\_table=>mark( ).
ENDMODULE.
