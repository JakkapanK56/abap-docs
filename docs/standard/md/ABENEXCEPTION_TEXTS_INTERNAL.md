---
title: "ABENEXCEPTION_TEXTS_INTERNAL"
description: |
  ABENEXCEPTION_TEXTS_INTERNAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEXCEPTION_TEXTS_INTERNAL.htm"
abapFile: "ABENEXCEPTION_TEXTS_INTERNAL.html"
keywords: ["select", "delete", "do", "if", "class", "data", "ABENEXCEPTION", "TEXTS", "INTERNAL"]
---

**This function is for internal use only. \\nDo not use it in application programs.**

If an exception class does not implement the interface `IF_T100_MESSAGE`, texts stored in OTR (Online Text Repository) are used as exception texts. These texts can be defined with any number of placeholders. Each placeholder is represented by the name of an attribute of the exception class, which is enclosed by the *&* characters. When the exception is raised, the placeholders are replaced by the content of the attributes. The maintenance of exception texts is only possible in one tool:

The input parameter `TEXTID` of the instance constructor has the data type `SOTR_CONC`. When an exception with these exception texts is raised, a UUID that identifies a text from OTR can be passed to the constructor. It is strongly recommended that only the constants that exist in the class for the predefined exception texts are passed, which selects a text defined for the exception. The attributes assigned to the placeholders of the text can be supplied with values using the input parameters of the same name of the instance constructor.

-   Any exception texts can be defined on the *Texts* tab in the [Class Builder](ABENCLASS_BUILDER_GLOSRY.html) in the ABAP Workbench. When saved, they are stored under a [UUID](ABENUUID_GLOSRY.html) in the OTR. For each exception text, the Class Builder creates an identically named constant with the data type `SOTR_CONC` from the ABAP Dictionary, which contains the UUID and generates an appropriate instance constructor.
-   The [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) do not support any exception texts from OTR. No exception texts can be defined for the OTR and no UUIDs are created.

-   From a technical perspective, any UUID that specifies any text from OTR can also be passed to the input parameter `TEXTID` of the instance constructor. This is strongly discouraged, however, because an exception should only be raised with specific texts.
-   An exception text from the OTR is visible and can be edited on the *Texts* tab of the Class Builder, but the actual reference of the class to the text is created by the UUID that is stored in the identically named constant.
-   OTR texts should only occur in predefined exception classes for system exceptions and should not be used in user-defined exception classes. One example are the predefined [exception classes for ABAP statements](ABENABAP_EXCEPTION_CLASSES.html).
-   If the implementation of the interface `IF_T100_MESSAGE` is deleted from an existing exception class using [messages as exception texts](ABENEXCEPTION_TEXTS_T100.html), the instance constructor can be modified using the function *Utilities -> Clean Up -> Constructor* in Class Builder in ABAP Workbench.

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html abenexceptions\_classes.html abenexception\_texts.html