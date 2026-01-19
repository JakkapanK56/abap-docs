---
title: "ABENEXCEPTION_TEXTS_T100"
description: |
  ABENEXCEPTION_TEXTS_T100 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEXCEPTION_TEXTS_T100.htm"
abapFile: "ABENEXCEPTION_TEXTS_T100.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENEXCEPTION", "TEXTS", "T100"]
---

The exception texts of an exception class are usually defined by referencing [messages](ABENMESSAGE_GLOSRY.html) from the table `T100`. The exception class must implement the interface [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html) to use the messages as exception texts. Exception texts are assigned to messages using constant structures in the public visibility section of the exception class. Each statically predefined exception text has an identically named constant with the structured data type `SCX_T100KEY` from the ABAP Dictionary. The individual components represent the message class, the message number, and the attributes assigned to the placeholders.

The input parameter `TEXTID` of the instance constructor of the exception class has the same data type as the attribute `T100KEY` of the interface `IF_T100_MESSAGE`, which also refers to `SCX_T100KEY`. When an exception with messages as exception texts is raised, the constructor can be passed a structure with information about the message that is to be used as the exception text. It is strongly recommended that only the constants that exist in the class for the predefined exception texts are passed to `TEXTID`. This selects a predefined text for the exception. The attributes that are assigned to the placeholders *&1* to *&4* or *&* of a message can be supplied with values using the input parameters of the same name of the instance constructor. The placeholders are replaced by the content of the assigned attributes when the exception is raised.

-   In the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html), exception texts are maintained in the source code. An exception class is defined by inheriting from one of the superclasses `CX_STATIC_CHECK`, `CX_DYNAMIC_CHECK`, or `CX_NO_CHECK`. Such classes implement the interface `IF_T100_MESSAGE` by default and the constructor is generated accordingly. The code template `textIdExceptionClass` can be used to create a constant structure in the visibility section for each exception text, whose components define the properties of the message.

-   Exception texts that are linked to messages can be sent to the program user using the statement [`MESSAGE oref`](ABAPMESSAGE_MSG.html) when the exception is handled.
-   The system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html), which includes `IF_T100_MESSAGE`, can be used to link any message with an exception class. See [Exception Classes for Messages](ABENMESSAGE_EXCEPTIONS.html).
-   The method `GET_LATEST_T100_EXCEPTION` in the class `CL_MESSAGE_HELPER` returns the last object in a chain of exception objects, which was created using `PREVIOUS`, that has an exception text defined by a message.
-   From a technical perspective, any structure of type `SCX_T100KEY` whose components specify any message of table `T100` can be passed to the input parameter `TEXTID` of the instance constructor. This is strongly discouraged, however, because an exception should only be raised with specific texts when using the parameter `TEXTID`.
-   A where-used list for a message contains its usage as an exception text in an exception class. But it does not contain the positions, where the specification of the message is passed in a structure of type `SCX_T100KEY` to the instance constructor of an exception class.

-   See system interface `IF_T100_MESSAGE` in a global exception class.
-   See system interface `IF_T100_DYN_MSG` in a global exception class.
-   The exception classes of the package `SABAP_DEMOS_CAR_RENTAL_EXCPTNS`, which is part of a sample application created in the superpackage `SABAP_DEMOS_CAR_RENTAL`, use messages as exception texts. See `CX_DEMO_CR_CAR_MODIFY`, for example.

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html abenexceptions\_classes.html abenexception\_texts.html