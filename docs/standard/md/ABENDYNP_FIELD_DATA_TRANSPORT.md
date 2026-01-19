---
title: "ABENDYNP_FIELD_DATA_TRANSPORT"
description: |
  ABENDYNP_FIELD_DATA_TRANSPORT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNP_FIELD_DATA_TRANSPORT.htm"
abapFile: "ABENDYNP_FIELD_DATA_TRANSPORT.html"
keywords: ["insert", "loop", "do", "if", "data", "ABENDYNP", "FIELD", "DATA", "TRANSPORT"]
---

If the statement [`FIELD`](FIELD.html) is used in the event block at [PAI](ABENPAI_GLOSRY.html), the statement controls the data transport for the specified [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html). By default, all dynpro fields are transported to the ABAP program directly at the event PAI and before the processing of the corresponding event block. If one or more `FIELD` statements are used, only those dynpro fields are transported directly at the event PAI that are not specified after a `FIELD` statement.

The transport of the content of a dynpro field `dynp_field` specified after `FIELD` to the identically named global ABAP data object takes place when the corresponding `FIELD` statement is executed. If a dynpro field is specified in more than one `FIELD` statement, its value is passed when the first corresponding `FIELD` statement is executed. There are the following exceptions:

-   The statement `FIELD` is ignored by the OK field. The OK field is always transported directly at the event PAI.
-   A field whose content is empty at [PBO](ABENPBO_GLOSRY.html) and which is not changed by the user is not transported by the `FIELD` statement. This applies to the entire line in the [`LOOP`](LOOP.html) statements for [table controls](ABENTABLE_CONTROL_GLOSRY.html) and [step loops](ABENSTEP_LOOP_GLOSRY.html).

-   The effect of the statement `FIELD` on the data transport at the event PAI is independent from its association with a `MODULE` statement.
-   If an empty field that has not been modified by the user is filled with a value in a PAI module before the `FIELD` statement is executed, this value is not overwritten by the `FIELD` statement using the [initial value](ABENINITIAL_VALUE_GLOSRY.html).
-   A dynpro field must not be used in a PAI module, before it is passed by the dynpro. Otherwise, the ABAP field contains the same value as at the end of the previous dialog step.
-   When dynpro fields are defined with reference to [flat structures](ABENFLAT_STRUCTURE_GLOSRY.html) in the ABAP Dictionary, the identically named global data objects of the ABAP program must be declared with the statement `TABLES` as [interface work areas](ABENINTERFACE_WORK_AREA_GLOSRY.html). Otherwise, no data transport takes place, neither with nor without `FIELD`.
-   If a dynpro field is defined with reference to a data element in the ABAP Dictionary, and an obsolete field exit is assigned to this field in a customer system, the function module of the field exit can be executed during the transport. This usually changes the value of the dynpro field.
-   Any dynpro fields, except fields of type `STRING` or `SSTRING`, are empty if they contain nothing but blanks in the screen display. Dynpro fields of type `STRING` or `SSTRING` are empty if they do not contain any characters. An initial time field with the characters `000000` or a numeric field with the value *0* are, for example, not empty and are transported by `FIELD`. [`CLEAR ... WITH space`](ABAPCLEAR.html) can be used to insert blanks in character-like fields.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_dynpro\_statements.html dynpfield.html