---
title: "ABENEXCEPTION_TEXTS_INTERNAL"
description: |
  ABENEXCEPTION_TEXTS_INTERNAL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEXCEPTION_TEXTS_INTERNAL.htm"
abapFile: "ABENEXCEPTION_TEXTS_INTERNAL.html"
keywords: ["select", "do", "if", "class", "data", "ABENEXCEPTION", "TEXTS", "INTERNAL"]
---

**This function is for internal use only. \\nDo not use it in application programs.**

If an exception class does not implement the interface `IF_T100_MESSAGE`, texts stored in OTR (Online Text Repository) are used as exception texts. These texts can be defined with any number of placeholders. Each placeholder is represented by the name of an attribute of the exception class, which is enclosed by the *&* characters. When the exception is raised, the placeholders are replaced by the content of the attributes. The maintenance of exception texts is only possible in one tool:

The input parameter `TEXTID` of the instance constructor has the data type `SOTR_CONC`. When an exception with these exception texts is raised, a UUID that identifies a text from OTR can be passed to the constructor. It is strongly recommended that only the constants that exist in the class for the predefined exception texts are passed, which selects a text defined for the exception. The attributes assigned to the placeholders of the text can be supplied with values using the input parameters of the same name of the instance constructor.

-   The [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) do not support any exception texts from OTR. No exception texts can be defined for the OTR and no UUIDs are created.

-   From a technical perspective, any UUID that specifies any text from OTR can also be passed to the input parameter `TEXTID` of the instance constructor. This is strongly discouraged, however, because an exception should only be raised with specific texts.

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html abenexceptions\_classes.html abenexception\_texts.html