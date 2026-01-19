---
title: "ABENDYNP_FIELD_MESSAGES"
description: |
  ABENDYNP_FIELD_MESSAGES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNP_FIELD_MESSAGES.htm"
abapFile: "ABENDYNP_FIELD_MESSAGES.html"
keywords: ["do", "if", "ABENDYNP", "FIELD", "MESSAGES"]
---

If the statement [`FIELD`](FIELD.html) in the event block for [PAI](ABENPAI_GLOSRY.html) is [linked](FIELD_MODULE.html) with a `MODULE` statement, the statement controls the handling of [warnings](ABENWARNING_GLOSRY.html) and [error messages](ABENERROR_MESSAGE_GLOSRY.html), which are sent in the called module using the statement [`MESSAGE`](ABAPMESSAGE.html).

If `FIELD` is specified outside a processing chain introduced using [`CHAIN`](CHAIN.html), and if a warning or an error message is sent in the dialog module specified after [`MODULE`](FIELD_MODULE.html), PAI processing is interrupted and the [screen layout](ABENSCREEN_GLOSRY.html) is displayed again without raising the event [PBO](ABENPBO_GLOSRY.html). The input field belonging to `dynp_field` is the only field ready for input on the current screen and can be overwritten by the user. If the value in the input field is changed by the user, PAI processing is continued after a user action with the first `FIELD` statement or `CHAIN` statement linked with the [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html)\\ `dynp_field`. If the value in the input field is not changed by the user, PAI processing is continued again with the current `FIELD` statement. Previous statements of the PAI event block are not executed again.

If `FIELD` is specified within a processing chain, introduced by [`CHAIN`](CHAIN.html), and if a warning or an error message was sent within a module called within the processing chain, PAI processing is interrupted and the screen displayed again without raising the event PBO. All input fields of the dynpro fields are ready for input that are specified within the processing chain after `FIELD` statements. If the value of at least one of these input fields is changed by the user, PAI processing continues after a user action at the first `FIELD` or `CHAIN` statement that linked with one of the changed dynpro fields. If none of the input fields is changed by the user, the PAI processing continues again directly at the `CHAIN` statement of the current processing chain. Previous statements of the PAI event block are not processed again.

-   If an error message occurs after user input, the user must correct the input values until no error message is sent, whereas after a warning, the input values can be confirmed unchanged. The warning is not sent again when the [`MESSAGE`](ABAPMESSAGE.html) statement is executed again.
-   If warnings or error messages are sent in modules without reference to `FIELD` or `CHAIN`, PAI processing is interrupted and the screen layout is displayed again without raising the event PBO and without a field on the screen layout being ready for input. In the event of an error message, the user must terminate the processing. To do this, an appropriate option must be created on the user interface, otherwise the program can only be terminated from outside.
-   User actions linked with function codes that set the [OK field](ABENOK_FIELD_GLOSRY.html) also count as changes to input fields. A prerequisite for this is that the OK field is defined in the dynpro and that function codes are not evaluated exclusively by the system field `sy-ucomm`.

-   [Automatic Input Checks](ABENDYNPRO_AUTO_CHECK_ABEXA.html)
-   [Input Checks in Dialog Modules](ABENDYNPRO_FIELD_CHAIN_ABEXA.html)

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_dynpro\_statements.html dynpfield.html