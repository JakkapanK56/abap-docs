---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDIAL_MOD_EVENT_BLOCK_GUIDL.html"
abapFile: "ABENDIAL_MOD_EVENT_BLOCK_GUIDL.html"
type: "abap-reference"
---

## Background

Besides procedures, there are two further types of processing blocks. However, they do not have a parameter interface and do not allow declaration of local data: (`AT SELECTION-SCREEN` and `GET` are exceptions but they should not be exploited):

-   **Dialog modules**
-   Dialog modules are introduced using the statement `MODULE` and ended using the statement `ENDMODULE`. These modules form the functional interface between classic dynpros and the associated ABAP program. They are called from within the dynpro flow logic.
-   **Event blocks**
-   Event blocks are introduced by the corresponding keyword and implicitly ended by the next processing block. The processing of an event block is raised by the ABAP runtime framework when the relevant event occurs. There are event blocks for:

-   Loading a program (`LOAD-OF-PROGRAM`)
-   Reporting events that occur during the processing of an executable program (with a logical database) (`INITIALIZATION`, `START-OF-SELECTION`, `GET`, `END-OF-SELECTION`)
-   Selection screen events (`AT SELECTION-SCREEN ...`)
-   List events of classic list processing (`AT LINE-SELECTION`, `AT USER-COMMAND`)

## Rule

**No implementations in dialog modules and event blocks**

Only use dialog modules and event routines if they are necessary from a technical viewpoint. In these cases, do not implement the required function. Instead, call the relevant (local) methods.

## Details

Since it is not possible to declare local data in dialog modules and event blocks, you cannot implement any useful program logic. This means that any dialog modules and event blocks (provided that they are still necessary) should only contain one method call. If you [use ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md) consistently, only the following elements are required:

-   `LOAD-OF-PROGRAM` or `INITIALIZATION` as the program constructor in cases where [program types](ABENPROGRAM_TYPE_GUIDL.md) other than class pools are used
-   Dialog modules and `AT SELECTION-SCREEN` when [classic dynpros and selection screens](ABENENCAP_CLASS_INTERF_GUIDL.md) are processed
-   `START-OF-SELECTION` in [executable programs](ABENPROGRAM_TYPE_GUIDL.md) for background processing. To improve readability, you should always specify the statement explicitly (although it is optional in many situations).
-   Although possible in the syntax, you should never specify an event block more than once within a program.

## Hint

Using `LOAD-OF-PROGRAM` in a function pool is basically the same as using a static constructor in a global class. In executable programs, you can use `INITIALIZATION` instead, if any parameters passed using `SUBMIT` need to be evaluated.

## Example

The following source code shows the PAI modules of the function pool `DEMO_CR_CAR_RENTAL_SCREENS` from the package `SABAP_DEMOS_CAR_RENTAL_DYNPRO`. The screens in this package can be called using transaction `DEMO_CR_CAR_RENTAL`. These dialog modules adhere to the above rule. They do not contain their own implementations. They call methods of a local class of the function pool.

```
MODULE cancel INPUT. 
  screen_handler=>cancel( ). 
ENDMODULE.MODULE user_command_0100 INPUT. 
  screen_handler=>user_command_0100( ). 
ENDMODULE.MODULE customers_mark INPUT. 
  customer_table=>mark( ). 
ENDMODULE.MODULE reservations_mark INPUT. 
  reservation_table=>mark( ). 
ENDMODULE.
```
