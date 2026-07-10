---
title: "Exception Texts - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_texts_guidl.htm"
abapFile: "abenexception_texts_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Architecture](ABENARCHITECTURE_GUIDL.md) →  [Error Handling](ABENERROR_HANDLING_GUIDL.md) → 

Exception Texts

Background

Each global exception class has a predefined [exception text](ABENEXCEPTION_TEXTS.md) that has the same name as the exception class. This text can be edited and further exception texts can be defined. The exception texts of an exception class can be created either by referencing [messages in the table T100](ABENEXCEPTION_TEXTS_T100.md) or by referencing [texts in Online Text Repository (OTR)](ABENEXCEPTION_TEXTS_INTERNAL.md).

For each exception text, Class Builder creates a static constant in the exception class with the same name as the exception text. When the exception is raised, this can be passed to the parameter TEXTID of the instance constructor to determine the exception text. If the parameter is not passed, the predefined exception text with the same name as the exception class is used.

From a technical perspective, the parameter TEXTID of the instance constructor can also be used to pass messages or texts from OTR as exception texts.

Rule

Using Messages as Exception Texts

Messages should be used as exception texts for exception classes in applications. OTR texts should be restricted to system classes. Only the associated texts can be used when an exception is raised.

Details

The following guideline describes how to choose the text category:

-   [Messages](ABENEXCEPTION_TEXTS_T100.md) should be used as exception texts in all exception classes in application programming.

-   [OTR texts](ABENEXCEPTION_TEXTS_INTERNAL.md) should only be used in system classes, namely exception classes for system exceptions. OTR offers various benefits when compared with messages, such as no restriction to 73 characters and unlimited placeholders, but lacks full tool support. More specifically, [ABAP Development Tools (ADT)](ABENADT_GLOSRY.md "Glossary Entry") do not support OTR texts.

From a technical perspective, it is possible to pass a data object to the input parameter TEXTID of the instance constructor when an exception is raised. This data object specifies either a message or an OTR text, depending on the text category. This approach is, however, absolutely not advisable. If the parameter TEXTID is used, an exception can only be raised with the texts specific to it. Only the associated constants of the exception class can be passed to the input parameter TEXTID of the instance constructor.

Notes

-   In cases where a class-based exception is used to wrap a [classic exception](ABENCLASS_EXCEPTION_GUIDL.md "Guideline") and [MESSAGE ... RAISING](ABAPMESSAGE_RAISING.md) is used to associate this classic exception with a message text (or after a message is caught using [error\_message](ABAPCALL_FUNCTION_PARAMETER.md)), the class-based exception can use the same message text regardless of whether the program in question is a system program or application program. The system interface [IF\_T100\_DYN\_MSG](ABENIF_T100_DYN_MSG.md) and the addition [MESSAGE](ABAPRAISE_EXCEPTION_MESSAGE.md) of the statement [RAISE EXCEPTION](ABAPRAISE_EXCEPTION_CLASS.md) and of the addition [THROW](ABENCONDITIONAL_EXPRESSION_RESULT.md) in a [conditional exception](ABENCONDITIONAL_EXPRESSIONS.md) are used for these cases.

-   Classic exceptions are not associated with exception texts. If classic exceptions are required for reasons of downward compatibility, the statement [MESSAGE ... RAISING](ABAPMESSAGE_RAISING.md) gives the option of emulating exception texts here. Using MESSAGE ... RAISING in cases in which non-class-based exceptions must still be used is preferable to using the statement RAISE, because it offers the option of providing additional text information with an exception.

Bad Example

The following source code passes a [UUID](ABENUUID_GLOSRY.md "Glossary Entry") for an OTR text to the input parameter TEXTID of the instance constructor when an exception is raised. According to the rule above, however, only exception texts from the exception class can be passed, with each exception class containing the corresponding constants.

...
DATA otr\_id TYPE sotr\_conc.
otr\_id = '9753EBD0102AD0418D902B8D972083C4'.
RAISE EXCEPTION TYPE cx\_system\_exception
   EXPORTING
      textid = otr\_id.
...

Good Example

The following source code passes the constant for the associated OTR text to the input parameter TEXTID of the instance constructor when an exception is raised, as specified by the rule above.

...
RAISE EXCEPTION TYPE cx\_system\_exception
   EXPORTING
      textid = cx\_system\_exception=>cx\_system\_exception.
...
