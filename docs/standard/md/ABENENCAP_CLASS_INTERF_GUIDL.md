---
title: "ABENENCAP_CLASS_INTERF_GUIDL"
description: |
  ABENENCAP_CLASS_INTERF_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENENCAP_CLASS_INTERF_GUIDL.htm"
abapFile: "ABENENCAP_CLASS_INTERF_GUIDL.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "ABENENCAP", "CLASS", "INTERF", "GUIDL"]
---

The [separation of concerns](ABENSEPARATION_CONCERNS_GUIDL.html) is one of the basic rules of these ABAP programming guidelines. This separation, which refers to a strict division of ABAP code into parts for presentation services, application services, and persistence services, is also technically possible for classic dynpro-based UI technologies. The MVC approach is not directly supported, but SoC can also be achieved through the consistent use of the available encapsulation technologies.

However, SoC was rarely implemented in classic dialog programming. Here, presentation logic, application logic, and persistence logic were often combined in a monolithic module pool.

**Encapsulate classic dynpros and selection screens**

Only create classic dynpros and selection screens in programs in a logical layer specifically provided for this purpose. You can use function pools as the program type.

When using classic UI technologies, you need to separate the display logic from the application logic for the following reasons:

In addition, the communication between classic dynpros or selection screens and ABAP programs is implemented using global variables. This poses conceptual problems and cannot be combined with a modern, object-oriented approach for application programs.

Since class pools do not support classic dynpros and selection screens, you can only use function pools for encapsulation. In this role, a function pool must be considered a global class. Here, the data of the global declaration part assumes the role of the private attributes, and the function modules assume the role of the public methods. The relevant procedure is demonstrated in `DEMO_CR_CAR_RENTAL_SCREENS` of package `SABAP_DEMOS_CAR_RENTAL_DYNPRO`. It applies to selection screens.

Besides UI elements, these function pools can only contain display logic in the form of local classes. The application logic communicates with the display logic using the function modules of this function pool. You can still call the first dynpro of a dynpro sequence using a transaction code. This method is used in cases where the user starts the application.

The guidelines described in this book are also valid in function pools. It is especially important that the [dialog modules](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.html) (PBO and PAI), which are called by the dynpro, or the [event blocks](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.html) for selection screen processing do not contain any program logic. Instead they should directly delegate the processing to the relevant methods of the local classes. The same applies to the [function modules](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html) that act as the external interface. In addition, you must [restrict](ABENSELECT_TABLE_TYPE_GUIDL.html) the scope of the function pool global data to the minimum scope required for communicating with dynpros.

Following the above rule means you cannot use standard selection screens. Therefore, it is necessary to make an exception to this rule for executable programs that are executed during background processing. This is because the required parameter interface must be a standard selection screen defined directly in the program. An encapsulation in a function pool is not possible here. However, in this case, the events of selection screen processing should only call one appropriate method of a local class within the executable program.

A classic dialog program - usually a single module pool - processes all the facets of an application.

The following source code shows a part of a function pool `DEMO_CR_CAR_RENTAL_SCREENS` with expanded include programs. This function pool encapsulates the dynpro and selection screen for transaction `DEMO_CR_CAR_RENTAL`, following the above rule. The connection to the application layer is established exclusively using the `if_demo_cr_car_rentl_service` interface, which is also used in the Web Dynpro application of this transaction.

Dynpro `100` is called in a function module but can also be linked to a transaction code. In the classic PBO and PAI modules, methods of local classes are called. However the implementation of these methods is not shown here. There is a class for general screen handling and a class for each table control. The application layer is accessed using the specified interface for implementations of the class.

-   Reuse individual components
-   Automated program logic tests, irrespective of the UI
-   Change the UI technology

FUNCTION-POOL demo\_cr\_car\_rental\_screens.\* Top IncludeSELECTION-SCREEN BEGIN OF SCREEN 200 TITLE text-ccr. \\nPARAMETERS g\_name TYPE demo\_cr\_customer\_name. \\nSELECTION-SCREEN END OF SCREEN 200.TABLES demo\_cr\_scustomer\_cntrl.CONTROLS: customers TYPE TABLEVIEW USING SCREEN 0100, \\n reservations TYPE TABLEVIEW USING SCREEN 0100.DATA g\_ok\_code TYPE sy-ucomm.DATA: g\_customers TYPE TABLE OF demo\_cr\_scustomer\_cntrl, \\n g\_customer LIKE LINE OF g\_customers.DATA: g\_reservations TYPE TABLE OF demo\_cr\_sreservation\_cntrl, \\n g\_reservation LIKE LINE OF g\_reservations.\* Local Class DeclarationsCLASS screen\_handler DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA car\_rental\_service \\n TYPE REF TO if\_demo\_cr\_car\_rentl\_service. \\n CLASS-METHODS: class\_constructor, \\n status\_0100, \\n user\_command\_0100, \\n cancel. \\n PRIVATE SECTION. \\n CLASS-METHODS: customer\_search\_by\_id, \\n ... \\nENDCLASS.CLASS customer\_table DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS: change\_tc\_attr, \\n mark. \\nENDCLASS. \\n... \\n\* Function ModuleFUNCTION demo\_cr\_call\_car\_rental\_screen. \\n CALL SCREEN 100. \\nENDFUNCTION. \\n\* PBO ModulesMODULE status\_0100 OUTPUT. \\n screen\_handler=>status\_0100( ). \\nENDMODULE.MODULE customers\_change\_tc\_attr OUTPUT. \\n customer\_table=>change\_tc\_attr( ). \\nENDMODULE. \\n... \\n\* PAI ModulesMODULE cancel INPUT. \\n screen\_handler=>cancel( ). \\nENDMODULE.MODULE user\_command\_0100 INPUT. \\n screen\_handler=>user\_command\_0100( ). \\nENDMODULE.MODULE customers\_mark INPUT. \\n customer\_table=>mark( ). \\nENDMODULE. \\n... \\n\* Local Class Implementations \\n... abenabap.html abenabap\_reference.html abenabap\_pgl.html abenarchitecture\_gdl.html abenuser\_interfaces\_gdl.html