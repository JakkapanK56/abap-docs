---
title: "ABENABAP_DYNPROS_LISTBOX"
description: |
  ABENABAP_DYNPROS_LISTBOX - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPROS_LISTBOX.htm"
abapFile: "ABENABAP_DYNPROS_LISTBOX.html"
keywords: ["select", "do", "if", "internal-table", "ABENABAP", "DYNPROS", "LISTBOX"]
---

[Dropdown list boxes](ABENDROPDOWN_LISTBOX_GLOSRY.html), which contain a predefined set of proposal values, can be defined for input/output fields on dynpros. It is not possible to enter a value in this type of input field and a value must be copied from the proposal list instead. If a dropdown list box is assigned to a field, the input help key (`F4`) cannot be used.

A dropdown list box is a single-column list of text fields with a maximum length of 80 characters. Internally, each text field is linked with a key of up to 40 characters. When the user selects a line, the content of the text field is entered in the input field on the screen and the content of the key is passed to the dynpro field. This means that the content and length of the screen field and dynpro field are not generally identical.

If a function code is assigned to an input/output field with a dropdown list box, selecting a value raises PAI immediately and the function code is passed to the fields `sy-ucomm` and the OK field. If no function code is assigned, PAI must be raised as usual using a different screen element.

If a dropdown list box is linked with an input/output field, the attribute `Value List` of the screen element can be used to define how the texts in the dropdown list box are created. There are two options:

-   Value list from the input help (recommended)
-   If the attribute `Value List` is empty, the text field of the dropdown list box takes the first column of the [input help](ABENABAP_DYNPROS_VALUE_HELP.html) linked with the screen field. This input help should have two columns. The key of the dropdown list box is filled automatically from the second column.
-   Value list from PBO modules (not recommended)
-   If the attribute `Value List` has the value *A*, the value list must be filled using the function module `VRM_SET_VALUES` before the screen layout is sent. This is done by passing an internal table of the type `VRM_VALUES` of the type pool `VRM` to the import parameter `VALUES` of the function module. The line type is a structure consisting of two text fields, `KEY` and `TEXT`, with a length of 40 or 80 characters respectively. The table lines can combine values in the component `KEY` with any texts in the component `TEXT`. The associated input/output field is passed to the import parameter `ID`.

-   [List Box with Value List from Input Help](ABENDYNPRO_DROP1_ABEXA.html)
-   [List Box with Value List from PBO Module](ABENDYNPRO_DROP2_ABEXA.html)

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpros\_help.html