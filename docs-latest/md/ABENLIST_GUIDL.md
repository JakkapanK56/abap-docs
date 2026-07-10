---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLIST_GUIDL.html"
abapFile: "ABENLIST_GUIDL.html"
type: "abap-reference"
---

## Background

A list is a medium used for the structured and formatted output of data. The following lists are available in ABAP:

-   Classic lists, which are written to a list buffer using ABAP statements and displayed on a special list dynpro.
-   Output of the SAP List Viewer (ALV), which is displayed in [GUI controls](ABENGUI_CONTROL_GLOSRY.md) during the processing of classic dynpros. ALV lists are accessed using classes, such as `CL_SALV_TABLE` (non-hierarchically tabular lists), `CL_SALV_HIERSEQ_TABLE` (hierarchically sequential lists), or `CL_SALV_TREE` (hierarchically tabular lists).

Classic lists are the only option to send ABAP data from ABAP programs directly to the SAP spool system as spool lists. If SAP List Viewer is used, the lists that are displayed in the viewer are automatically converted to classic spool lists during printing.

## Rule

**Use SAP List Viewer**

Do not use classic lists. If dynpro-based, classic UI technologies are still used, SAP List Viewer (ALV) or other GUI control-based technologies should be used instead of classic lists in production programs.

## Details

Using classic lists is no longer recommended for the following reasons:

-   The processing of lists is based on global data and events of the ABAP runtime framework.
-   The list buffer that is used for classic lists is bound to an executable program or a dynpro sequence and not to classes and objects.
-   It is almost impossible to separate presentation logic and application logic when writing to lists.
-   The UI of a classic list is not standardized and thus usually not accessible.

The concept of classic lists is therefore mostly incompatible with the ABAP Objects concept, and classic lists cannot be encapsulated in function pools as easily as classic dynpros and selection screens.

While the application developer must ensure [accessibility](ABENACCESSIBILITY_GUIDL.md) in classic lists with a great deal of effort, the ALV lists automatically comply with the accessibility requirements because the ALV already provides the required services, such as user-specific settings.

## Use

Small helper programs that are not intended for live use in application systems can continue to use classic lists for system-related console output. The `WRITE` list statement here assumes the same role as `System.out.println(...)` in Java or `printf` in C.

In cases in which an ALV output seems to be overdimensioned, other methods are possible, such as Textedit Control or Browser Control (or its wrapping in dynamic documents) for the formatted output of non-tabular content. As before, accessibility must be guaranteed here.

## Hint

For simple console output, XML-based output streams can be used. An example of this is shown by the class [`CL_DEMO_OUTPUT_STREAM`](ABENCL_DEMO_OUTPUT.md). The class `CL_DEMO_OUTPUT` demonstrates possible applications of this class. It is used in programs in the [ABAP Example Library](ABENABAP_EXAMPLES.md).

## Bad Example

Executing the program `DEMO_CLASSICAL_REPORTING` produces a classic list output. However, according to the above rule, using classic lists in application programs is no longer recommended.

## Good Example

Executing the program `DEMO_ALV_REPORTING` produces ALV lists with the same content and the same functions as the classic lists in the previous example. ALV lists replace classic lists in those cases in which classic dynpros are still used.
