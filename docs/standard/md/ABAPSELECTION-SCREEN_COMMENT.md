---
title: "ABAPSELECTION-SCREEN_COMMENT"
description: |
  ABAPSELECTION-SCREEN_COMMENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_COMMENT.htm"
abapFile: "ABAPSELECTION-SCREEN_COMMENT.html"
keywords: ["select", "loop", "do", "if", "case", "data", "ABAPSELECTION", "SCREEN", "COMMENT"]
---

[Short Reference](ABAPSELECTION-SCREEN_SHORTREF.html)

`SELECTION-SCREEN COMMENT [/][pos|POS_LOW|POS_HIGH](len)`\\ 
                         `\{text|\{[text] FOR FIELD sel\}\}`\\ 
                         `[VISIBLE LENGTH vlen]`\\ 
``\ [[`MODIF ID modid`](ABAPSELECTION-SCREEN_MODIF_ID.html)]``\\ 
``\ [[`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html)].``

[1. `... [/][pos|POS_LOW|POS_HIGH](len)`](#ABAP_ADDITION_1@3@)

[2. `... FOR FIELD sel`](#ABAP_ADDITION_2@3@)

[3. `... VISIBLE LENGTH vlen`](#ABAP_ADDITION_3@3@)

This statement creates an output field on the current [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) and produces the content of `text` as output in this field. `text` expects either the name of a text symbol of the program that can be specified in the form `text-idf`, where `idf` is the three-character ID for the text symbol, or a freely definable name with a maximum of eight characters. If a user-defined name is entered, the runtime framework generates an identically named global variable with type `c` and length 83. If the specified text symbol is not found, no text is produced as output field. The [`MODIF ID`](ABAPSELECTION-SCREEN_MODIF_ID.html) addition assigns the output field to the [modification group](ABENMODIFICATION_GROUP_GLOSRY.html)\\ `modid`.

The [`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html) can only be used in the selection include of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

The position of the output field must be specified with this addition. The syntax and the meaning are the same as when creating [horizontal lines](ABAPSELECTION-SCREEN_ULINE.html). In this case, `len` defines the length of the output field in the [dynpro](ABENDYNPRO_GLOSRY.html) of the selection screen. If an output field extends beyond position 83 or a [block](ABAPSELECTION-SCREEN_BLOCK.html) with a frame, the visible length is shortened accordingly and the content is displayed in the visible length.

If the addition `FOR FIELD` is used, the output field is linked with a [selection parameter](ABENSELPAR_GLOSRY.html) or [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html)\\ `sel` of the same program defined using [`PARAMETERS`](ABAPPARAMETERS.html) or [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html). The name `sel` must be specified directly. When this link is made, the field help or input help for `sel` is displayed when the user selects the output field using the function keys F1 and F4. It also means that the output field is assigned to the same [modification group](ABENMODIFICATION_GROUP_GLOSRY.html). The output field is also hidden if `sel` is made invisible using a [selection screen variant](ABENVARIANT_GLOSRY.html). If `FOR FIELD` is specified, `text` does not have to be specified. The output field is then filled either with the specified name `sel`, or, if it exists in the current [text pool](ABENTEXT_POOL_GLOSRY.html), with the corresponding selection text.

The addition `VISIBLE LENGTH` defines the visible length `vlen` of the output field. `vlen` must be specified directly as a positive integer. If `vlen` is greater than `len`, the visible length is set to `len`. If `vlen` is less than `len`, the output field is displayed in the length of `vlen` with movable content and a [tooltip](ABENTOOL_TIP_GLOSRY.html) of the whole content.

Output fields, horizontal lines, and empty lines on the [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) of an executable program. The first output field is highlighted in the display.

-   The addition `FOR FIELD` causes the output field output field to behave in exactly the same way as the output fields generated automatically by `PARAMETERS` or `SELECT-OPTIONS` in response to selection parameters or selection criteria. Automatically generated fields are not displayed in a line if multiple elements are included in the output and can thus be replaced by associated user-defined output fields.
-   The `FOR FIELD` addition is also important for creating accessible selection screens, since it assigns an accessible descriptor to an input field.

SELECTION-SCREEN COMMENT /1(50) comm1 MODIF ID mg1. \\nSELECTION-SCREEN ULINE. \\nSELECTION-SCREEN SKIP. \\n\\ \\nSELECTION-SCREEN COMMENT /1(30) comm2. \\nSELECTION-SCREEN ULINE /1(50). \\nPARAMETERS: r1 RADIOBUTTON GROUP rad1, \\n r2 RADIOBUTTON GROUP rad1, \\n r3 RADIOBUTTON GROUP rad1. \\nSELECTION-SCREEN ULINE /1(50). \\n\\ \\nAT SELECTION-SCREEN OUTPUT. \\n comm1 = 'Selection Screen'. \\n comm2 = 'Select one'. \\n LOOP AT SCREEN INTO DATA(screen\_wa). \\n IF screen\_wa-group1 = 'MG1'. \\n screen\_wa-intensified = '1'. \\n MODIFY SCREEN FROM screen\_wa. \\n ENDIF. \\n ENDLOOP. abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_layout.html