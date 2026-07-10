---
title: "Encapsulating Classic User Interfaces - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenencap_class_interf_guidl.htm"
abapFile: "abenencap_class_interf_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Architecture](ABENARCHITECTURE_GUIDL.md) →  [User Interfaces](ABENUSER_INTERFACES_GUIDL.md) → 

Encapsulating Classic User Interfaces

Background

The [separation of concerns](ABENSEPERATION_CONCERNS_GUIDL.md "Guideline") is one of the basic rules of these ABAP programming guidelines. This separation, which refers to a strict division of ABAP code into parts for presentation services, application services, and persistence services, is also technically possible for classic dynpro-based UI technologies. The MVC approach is not directly supported, but SoC can also be achieved through the consistent use of the available encapsulation technologies.

However, SoC was rarely implemented in classic dialog programming. Here, presentation logic, application logic, and persistence logic were often combined in a monolithic module pool.

Rule

Encapsulate classic dynpros and selection screens

Only create classic dynpros and selection screens in programs in a logical layer specifically provided for this purpose. You can use function groups as the program type.

Details

When using classic UI technologies, you need to separate the display logic from the application logic for the following reasons:

-   Reuse individual components

-   Automated program logic tests, irrespective of the UI

-   Change the UI technology

In addition, the communication between classic dynpros/selection screens and ABAP programs is implemented using global variables. This poses conceptual problems and cannot be combined with a modern, object-oriented approach for application programs.

Since class pools do not support classic dynpros and selection screens, you can only use function groups for encapsulation. In this role, a function group must be considered a global class. Here, the data of the global declaration part assumes the role of the private attributes, and the function modules assume the role of the public methods. The relevant procedure is demonstrated in DEMO\_CR\_CAR\_RENTAL\_SCREENS of package SABAP\_DEMOS\_CAR\_RENTAL\_DYNPRO. It applies to selection screens.

Besides UI elements, these function groups can only contain display logic in the form of local classes. The application logic communicates with the display logic using the function modules of this function group. You can still call the first dynpro of a dynpro sequence using a transaction code. This method is used in cases where the user starts the application.

The guidelines described in this book are also valid in function groups. It is especially important that the [dialog modules](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.md "Guideline") (PBO and PAI), which are called by the dynpro, or the [event blocks](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.md "Guideline") for selection screen processing do not contain any program logic. Instead they should directly delegate the processing to the relevant methods of the local classes. The same applies to the [function modules](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md "Guideline") that act as the external interface. In addition, you must [restrict](ABENSELECT_TABLE_TYPE_GUIDL.md "Guideline") the scope of the function group global data to the minimum scope required for communicating with dynpros.

Exception

Following the above rule means you cannot use standard selection screens. Therefore, it is necessary to make an exception to this rule for executable programs that are executed during background processing. This is because the required parameter interface must be a standard selection screen defined directly in the program. An encapsulation in a function group is not possible here. However, in this case, the events of selection screen processing should only call one appropriate method of a local class within the executable program.

Bad Example

A classic dialog program - usually a single module pool - processes all the facets of an application.

Good Example

The following source code shows a part of a function group DEMO\_CR\_CAR\_RENTAL\_SCREENS with expanded include programs. This function group encapsulates the dynpro and selection screen for transaction DEMO\_CR\_CAR\_RENTAL, following the above rule. The connection to the application layer is established exclusively using the if\_demo\_cr\_car\_rentl\_service interface, which is also used in the Web Dynpro application of this transaction.

FUNCTION-POOL demo\_cr\_car\_rental\_screens.

\* Top Include

SELECTION-SCREEN BEGIN OF SCREEN 200 TITLE text-ccr.
PARAMETERS g\_name TYPE demo\_cr\_customer\_name.
SELECTION-SCREEN END OF SCREEN 200.

TABLES demo\_cr\_scustomer\_cntrl.

CONTROLS: customers TYPE TABLEVIEW USING SCREEN 0100,
          reservations TYPE TABLEVIEW USING SCREEN 0100.

DATA g\_ok\_code TYPE sy-ucomm.

DATA: g\_customers TYPE TABLE OF demo\_cr\_scustomer\_cntrl,
      g\_customer LIKE LINE OF g\_customers.

DATA: g\_reservations TYPE TABLE OF demo\_cr\_sreservation\_cntrl,
      g\_reservation LIKE LINE OF g\_reservations.

\* Local Class Declarations

CLASS screen\_handler DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA car\_rental\_service
       TYPE REF TO if\_demo\_cr\_car\_rentl\_service.
    CLASS-METHODS: class\_constructor,
                   status\_0100,
                   user\_command\_0100,
                   cancel.
  PRIVATE SECTION.
    CLASS-METHODS: customer\_search\_by\_id,
                   ...
ENDCLASS.

CLASS customer\_table DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: change\_tc\_attr,
                   mark.
ENDCLASS.
...
\* Function Module

FUNCTION demo\_cr\_call\_car\_rental\_screen.
  CALL SCREEN 100.
ENDFUNCTION.
\* PBO Modules

MODULE status\_0100 OUTPUT.
  screen\_handler=>status\_0100( ).
ENDMODULE.

MODULE customers\_change\_tc\_attr OUTPUT.
  customer\_table=>change\_tc\_attr( ).
ENDMODULE.
...
\* PAI Modules

MODULE cancel INPUT.
  screen\_handler=>cancel( ).
ENDMODULE.

MODULE user\_command\_0100 INPUT.
  screen\_handler=>user\_command\_0100( ).
ENDMODULE.

MODULE customers\_mark INPUT.
  customer\_table=>mark( ).
ENDMODULE.
...
\* Local Class Implementations
...

Dynpro 100 is called in a function module but can also be linked to a transaction code. In the classic PBO and PAI modules, methods of local classes are called. However the implementation of these methods is not shown here. There is a class for general screen handling and a class for each table control. The application layer is accessed using the specified interface for implementations of the class.
