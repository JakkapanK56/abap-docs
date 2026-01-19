---
title: "ABENEXCEPTION_TEXTS_GUIDL"
description: |
  ABENEXCEPTION_TEXTS_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEXCEPTION_TEXTS_GUIDL.htm"
abapFile: "ABENEXCEPTION_TEXTS_GUIDL.html"
keywords: ["do", "if", "case", "class", "data", "ABENEXCEPTION", "TEXTS", "GUIDL"]
---

Each global exception class has a predefined [exception text](ABENEXCEPTION_TEXTS.html) that has the same name as the exception class. This text can be edited and further exception texts can be defined. The exception texts of an exception class can be created either by referencing [messages in the table `T100`](ABENEXCEPTION_TEXTS_T100.html) or by referencing [texts in Online Text Repository (OTR)](ABENEXCEPTION_TEXTS_INTERNAL.html).

For each exception text, Class Builder creates a static constant in the exception class with the same name as the exception text. When the exception is raised, this can be passed to the parameter `TEXTID` of the instance constructor to determine the exception text. If the parameter is not passed, the predefined exception text with the same name as the exception class is used.

From a technical perspective, the parameter `TEXTID` of the instance constructor can also be used to pass messages or texts from OTR as exception texts.

**Using Messages as Exception Texts**

Messages should be used as exception texts for exception classes in applications. OTR texts should be restricted to system classes. Only the associated texts can be used when an exception is raised.

The following guideline describes how to choose the text category:

From a technical perspective, it is possible to pass a data object to the input parameter `TEXTID` of the instance constructor when an exception is raised. This data object specifies either a message or an OTR text, depending on the text category. This approach is, however, absolutely not advisable. If the parameter `TEXTID` is used, an exception can only be raised with the texts specific to it. Only the associated constants of the exception class can be passed to the input parameter `TEXTID` of the instance constructor.

The following source code passes a [UUID](ABENUUID_GLOSRY.html) for an OTR text to the input parameter `TEXTID` of the instance constructor when an exception is raised. According to the rule above, however, only exception texts from the exception class can be passed, with each exception class containing the corresponding constants.

The following source code passes the constant for the associated OTR text to the input parameter `TEXTID` of the instance constructor when an exception is raised, as specified by the rule above.

-   [Messages](ABENEXCEPTION_TEXTS_T100.html) should be used as exception texts in all exception classes in application programming.
-   [OTR texts](ABENEXCEPTION_TEXTS_INTERNAL.html) should only be used in system classes, namely exception classes for system exceptions. OTR offers various benefits when compared with messages, such as no restriction to 73 characters and unlimited placeholders, but lacks full tool support. More specifically, [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) do not support OTR texts.

-   In cases where a class-based exception is used to wrap a [classic exception](ABENCLASS_EXCEPTION_GUIDL.html) and [`MESSAGE ... RAISING`](ABAPMESSAGE_RAISING.html) is used to associate this classic exception with a message text (or after a message is caught using [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html)), the class-based exception can use the same message text regardless of whether the program in question is a system program or application program. The system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html) and the addition [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html) of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) and of the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional exception](ABENCONDITIONAL_EXPRESSIONS.html) are used for these cases.
-   Classic exceptions are not associated with exception texts. If classic exceptions are required for reasons of downward compatibility, the statement [`MESSAGE ... RAISING`](ABAPMESSAGE_RAISING.html) gives the option of emulating exception texts here. Using `MESSAGE ...``RAISING` in cases in which non-class-based exceptions must still be used is preferable to using the statement `RAISE`, because it offers the option of providing additional text information with an exception.

... \\nDATA otr\_id TYPE sotr\_conc. \\notr\_id = '9753EBD0102AD0418D902B8D972083C4'. \\nRAISE EXCEPTION TYPE cx\_system\_exception \\n EXPORTING \\n textid = otr\_id. \\n... ... \\nRAISE EXCEPTION TYPE cx\_system\_exception \\n EXPORTING \\n textid = cx\_system\_exception=>cx\_system\_exception. \\n... abenabap.html abenabap\_reference.html abenabap\_pgl.html abenarchitecture\_gdl.html abenerror\_handling\_gdl.html