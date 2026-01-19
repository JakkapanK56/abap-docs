---
title: "ABAPSUPPRESS"
description: |
  ABAPSUPPRESS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSUPPRESS.htm"
abapFile: "ABAPSUPPRESS.html"
keywords: ["while", "if", "ABAPSUPPRESS"]
---

[Short Reference](ABAPSUPPRESS_DIALOG_SHORTREF.html)

`SUPPRESS DIALOG.`

If this statement is specified during [PBO](ABENPBO_GLOSRY.html) processing, the current [dynpro](ABENDYNPRO_NUMBER_GLOSRY.html) is processed without displaying the [screen layout](ABENSCREEN_GLOSRY.html), while the screen layout of the previous dynpro remains visible. After PBO processing, the system raises the event [PAI](ABENPAI_GLOSRY.html) in the same way as if a user had pressed *Enter*. The function code assigned to this key in the current GUI status is then transported to `sy-ucomm` and to the OK field. Outside of PBO processing, this statement is ignored.

If the statement [`MESSAGE`](ABAPMESSAGE.html) is used to send either a [termination message](ABENTERMINATION_MESSAGE_GLOSRY.html), [error message](ABENERROR_MESSAGE_GLOSRY.html), [information message](ABENINFORMATION_MESSAGE_GLOSRY.html), or a [warning](ABENWARNING_GLOSRY.html) during PAI processing, the screen of the current dynpro is displayed together with the message.

The statement `SUPPRESS DIALOG` can be used to display lists while dynpros are being processed without displaying the screen of the dynpro where the list is created.

MODULE call\_list OUTPUT. \\n SUPPRESS DIALOG. \\n SET PF-STATUS space. \\n WRITE 'Basic List'. \\n LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0. \\nENDMODULE. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html