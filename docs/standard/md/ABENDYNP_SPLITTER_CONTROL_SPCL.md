---
title: "ABENDYNP_SPLITTER_CONTROL_SPCL"
description: |
  ABENDYNP_SPLITTER_CONTROL_SPCL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNP_SPLITTER_CONTROL_SPCL.htm"
abapFile: "ABENDYNP_SPLITTER_CONTROL_SPCL.html"
keywords: ["while", "if", "case", "method", "class", "ABENDYNP", "SPLITTER", "CONTROL", "SPCL"]
---

A splitter control is a screen element that divides the area it covers either horizontally into two adjacent [subscreen areas](ABENSUBSCREEN_ARREA_GLOSRY.html) or vertically one above each other. The division is made by a sash. The horizontal or vertical position of the sash is specified statically in the definition of the splitter control. It can be set to PBO in the ABAP program and changed by the user while the screen layout is displayed.

[Subscreen dynpros](ABENSUBSCREEN_DYNPRO_GLOSRY.html) are included in both subscreen areas in exactly the same way as [direct inclusion](ABENDYNP_SUBSCREEN.html) using the [`CALL SUBSCREEN`](CALL.html) statement in the dynpro flow logic. Any subscreens can be included, particularly those that contain splitter controls again.

In ABAP programs, the position of the sash of a splitter controls is controlled using an instance of the `CL_DYNPRO_SPLITTER` class. If, before sending this screen layout, an object of this class is created and its constructor is given the name of a splitter control, this is bound to the splitter control and its methods can be used to set and read the position of the sash. The sash position is specified as a percentage and refers to the width or height of the splitter control. In the object, the position is represented by a private attribute. Important methods of the class are:

A splitter control can have a [function code](ABENFUNCTION_CODE_GLOSRY.html) assigned to it, which can be used to react to changes to the sash position made by the user in ABAP programs.

[Dynpros, Splitter Controls](ABENDYNPRO_SPLITTER_CONTROL_ABEXA.html)

-   `GET_GUISASH`
-   At PAI sets the sash position of the object to the current value of the bound splitter control.
-   `SET_SASH`
-   If no value is passed to the `POSITION` parameter, the method sets the sash position of the bound splitter control at PBO to the value of the object. If a value is passed to the `POSITION` parameter, the method sets the attribute of the object and the sash position of the bound splitter control at PBO to this value. At PAI, only the attribute of the object is set.
-   `GET_SASH`
-   Returns the sash position of the bound splitter control at PBO and PAI.

-   A splitter control can only be created in the alphanumeric Screen Painter by using *Edit -> Create Element -> Splitter Control*. For this reason, it should only be used in cases when the functions offered are required on classic dynpros. [SAPUI5](ABENSAPUI5_GLOSRY.html) or [Web Dynpro ABAP](ABENWEB_DYNPRO_GLOSRY.html) should be used for new developments instead of classic dynpros.
-   Splitter controls offer certain advantages over the corresponding [CFW](ABENCFW_GLOSRY.html) containers. One advantage is that they allow all screen elements of a classic dynpro to be displayed directly in a flexible frame. Another is that they have better performance than CFW controls. An example of intensive use of splitter controls is the flexible interface of the ABAP Debugger.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html