---
title: "ABENEXCEPTION_TEXTS"
description: |
  ABENEXCEPTION_TEXTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEXCEPTION_TEXTS.htm"
abapFile: "ABENEXCEPTION_TEXTS.html"
keywords: ["if", "method", "class", "ABENEXCEPTION", "TEXTS"]
---

Each exception is assigned a text that can be parameterized by attributes and that describes the exception situation. This text is displayed in the [short dump](ABENSHORT_DUMP_GLOSRY.html) of the runtime error if the exception is not handled. If the exception is handled in the program, the text can be read using the method `GET_TEXT` of the interface `IF_MESSAGE`, which is implemented by every exception class. Any long text can be read using the method `GET_LONGTEXT`. A global exception class has a predefined exception text with the same name as the exception class. This predefined text can be edited and further exception texts can be defined.

From a technical perspective, each exception text is defined by an identically named static constant in the public visibility section of the exception class that defines its properties. The instance constructor of an exception class has an input parameter `TEXTID` to which such a constant can be passed when the exception is raised to determine the exception text. If the parameter is not passed, the predefined exception text with the same name as the exception class is used.

The exception texts of an exception class are usually defined by referring to [messages](ABENMESSAGE_GLOSRY.html) in the table `T100`. In predefined system classes, OTR (Online Text Repository) texts can also be used.

[Using Messages as Exception Texts](ABENEXCEPTION_TEXTS_GUIDL.html)

-   [Messages as Exception Texts](ABENEXCEPTION_TEXTS_T100.html)
-   [Exception Texts for System Classes](ABENEXCEPTION_TEXTS_INTERNAL.html)

-   The names of the exception texts or the associated constants should be understood as keys of the existing texts for an exception class. This means that when an exception is raised, only the constants of the exception class with the same name should be passed to the parameter `TEXTID` to determine the exception text.
-   The maintenance of the exception texts, that is, the associated constants and the instance constructor, depends largely on whether the [Class Builder](ABENCLASS_BUILDER_GLOSRY.html) in the ABAP Workbench or the source code editor in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) is used.

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html abenexceptions\_classes.html