---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENENCAP_CLASS_INTERF_GUIDL.html"
abapFile: "ABENENCAP_CLASS_INTERF_GUIDL.html"
type: "abap-reference"
---

## Background

The [separation of concerns](ABENSEPARATION_CONCERNS_GUIDL.md) is one of the basic rules of these ABAP programming guidelines. This separation, which refers to a strict division of ABAP code into parts for presentation services, application services, and persistence services, is also technically possible for classic dynpro-based UI technologies. The MVC approach is not directly supported, but SoC can also be achieved through the consistent use of the available encapsulation technologies.

However, SoC was rarely implemented in classic dialog programming. Here, presentation logic, application logic, and persistence logic were often combined in a monolithic module pool.

## Rule

**Encapsulate classic dynpros and selection screens**

Only create classic dynpros and selection screens in programs in a logical layer specifically provided for this purpose. You can use function pools as the program type.

## Details

When using classic UI technologies, you need to separate the display logic from the application logic for the following reasons:

-   Reuse individual components
-   Automated program logic tests, irrespective of the UI
-   Change the UI technology

In addition, the communication between classic dynpros or selection screens and ABAP programs is implemented using global variables. This poses conceptual problems and cannot be combined with a modern, object-oriented approach for application programs.

Since class pools do not support classic dynpros and selection screens, you can only use function pools for encapsulation. In this role, a function pool must be considered a global class. Here, the data of the global declaration part assumes the role of the private attributes, and the function modules assume the role of the public methods. The relevant procedure is demonstrated in `DEMO_CR_CAR_RENTAL_SCREENS` of package `SABAP_DEMOS_CAR_RENTAL_DYNPRO`. It applies to selection screens.

Besides UI elements, these function pools can only contain display logic in the form of local classes. The application logic communicates with the display logic using the function modules of this function pool. You can still call the first dynpro of a dynpro sequence using a transaction code. This method is used in cases where the user starts the application.

The guidelines described in this book are also valid in function pools. It is especially important that the [dialog modules](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.md) (PBO and PAI), which are called by the dynpro, or the [event blocks](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.md) for selection screen processing do not contain any program logic. Instead they should directly delegate the processing to the relevant methods of the local classes. The same applies to the [function modules](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md) that act as the external interface. In addition, you must [restrict](ABENSELECT_TABLE_TYPE_GUIDL.md) the scope of the function pool global data to the minimum scope required for communicating with dynpros.

## Use

Following the above rule means you cannot use standard selection screens. Therefore, it is necessary to make an exception to this rule for executable programs that are executed during background processing. This is because the required parameter interface must be a standard selection screen defined directly in the program. An encapsulation in a function pool is not possible here. However, in this case, the events of selection screen processing should only call one appropriate method of a local class within the executable program.

## Bad Example

A classic dialog program - usually a single module pool - processes all the facets of an application.

## Good Example

The following source code shows a part of a function pool `DEMO_CR_CAR_RENTAL_SCREENS` with expanded include programs. This function pool encapsulates the dynpro and selection screen for transaction `DEMO_CR_CAR_RENTAL`, following the above rule. The connection to the application layer is established exclusively using the `if_demo_cr_car_rentl_service` interface, which is also used in the Web Dynpro application of this transaction.

```
FUNCTION-POOL demo_cr_car_rental_screens.* Top IncludeSELECTION-SCREEN BEGIN OF SCREEN 200 TITLE text-ccr. 
PARAMETERS g_name TYPE demo_cr_customer_name. 
SELECTION-SCREEN END OF SCREEN 200.TABLES demo_cr_scustomer_cntrl.CONTROLS: customers TYPE TABLEVIEW USING SCREEN 0100, 
          reservations TYPE TABLEVIEW USING SCREEN 0100.DATA g_ok_code TYPE sy-ucomm.DATA: g_customers TYPE TABLE OF demo_cr_scustomer_cntrl, 
      g_customer LIKE LINE OF g_customers.DATA: g_reservations TYPE TABLE OF demo_cr_sreservation_cntrl, 
      g_reservation LIKE LINE OF g_reservations.* Local Class DeclarationsCLASS screen_handler DEFINITION. 
  PUBLIC SECTION. 
    CLASS-DATA car_rental_service 
       TYPE REF TO if_demo_cr_car_rentl_service. 
    CLASS-METHODS: class_constructor, 
                   status_0100, 
                   user_command_0100, 
                   cancel. 
  PRIVATE SECTION. 
    CLASS-METHODS: customer_search_by_id, 
                   ... 
ENDCLASS.CLASS customer_table DEFINITION. 
  PUBLIC SECTION. 
    CLASS-METHODS: change_tc_attr, 
                   mark. 
ENDCLASS. 
... 
* Function ModuleFUNCTION demo_cr_call_car_rental_screen. 
  CALL SCREEN 100. 
ENDFUNCTION. 
* PBO ModulesMODULE status_0100 OUTPUT. 
  screen_handler=>status_0100( ). 
ENDMODULE.MODULE customers_change_tc_attr OUTPUT. 
  customer_table=>change_tc_attr( ). 
ENDMODULE. 
... 
* PAI ModulesMODULE cancel INPUT. 
  screen_handler=>cancel( ). 
ENDMODULE.MODULE user_command_0100 INPUT. 
  screen_handler=>user_command_0100( ). 
ENDMODULE.MODULE customers_mark INPUT. 
  customer_table=>mark( ). 
ENDMODULE. 
... 
* Local Class Implementations 
...
```

Dynpro `100` is called in a function module but can also be linked to a transaction code. In the classic PBO and PAI modules, methods of local classes are called. However the implementation of these methods is not shown here. There is a class for general screen handling and a class for each table control. The application layer is accessed using the specified interface for implementations of the class.
