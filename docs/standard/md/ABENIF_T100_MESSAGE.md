---
title: "ABENIF_T100_MESSAGE"
description: |
  ABENIF_T100_MESSAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENIF_T100_MESSAGE.htm"
abapFile: "ABENIF_T100_MESSAGE.html"
keywords: ["do", "while", "if", "try", "catch", "method", "class", "data", "ABENIF", "T100", "MESSAGE"]
---

The interface `IF_T100_MESSAGE` associates classes with [messages](ABENMESSAGE_GLOSRY.html). Classes that implement this interface can be used to access and send messages. To do this, `IF_T100_MESSAGE` contains a structured attribute `T100KEY` of the type `SCX_T100KEY`. In a class that implements the interface, the content of this structure specifies a [message](ABENMESSAGE_GLOSRY.html) in the database table `T100`:

Using an implementing class, the message text can be accessed as follows:

To do this, the statement `MESSAGE` or the class `CL_MESSAGE_HELPER` evaluates the content of the structure `T100KEY` as follows:

Raising of an exception of the class `CX_DEMO_T100`, which implements the interface `IF_T100_MESSAGE` by using [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html).

-   The content of component `MSGID` is the [message class](ABENMESSAGE_CLASS_GLOSRY.html).
-   The content of component `MSGNO` is the [message number](ABENMESSAGE_NUMBER_GLOSRY.html).
-   The content of components `ATTR1` to `ATTR4` is the names of attributes of the implementing class whose content is used as placeholder texts for the possible placeholders in the texts of the message.

-   The interface `IF_T100_MESSAGE` includes the interface `IF_MESSAGE`, which should not be used as a standalone interface. This interface contains the methods `GET_TEXT` and `GET_LONGTEXT`, which can be implemented by a class with the interface `IF_T100_MESSAGE` so that they return the short text and long text of the current message. To do this, the corresponding methods of the class `CL_MESSAGE_HELPER` can be used.
-   In the variant [`MESSAGE oref`](ABAPMESSAGE_MSG.html) of the statement [`MESSAGE`](ABAPMESSAGE.html), an [interface reference variable](ABENINTERFACE_REF_VARIABLE_GLOSRY.html) of the type `IF_T100_MESSAGE` or a [class reference variable](ABENCLASS_REFERENCE_VARIABL_GLOSRY.html) of a class that implements this interface can be specified to output the message that is specified by the content of the structure `T100KEY`.

-   In database table `T100`, a message is searched for whose message class and message number correspond to the components `MSGID` and `MSGNO` of the structure `T100KEY`. If a message is found, its texts are used. If not, a short text is generated that lists the message class and message number as well as the placeholder texts from the class attributes that are specified in the structure.
-   The possible placeholders *&1* to *&4* and *&* of the short text or *&V1&* to *&V4&* of the long text of the message are replaced by the content of the class attributes specified in the components `ATTR1` to `ATTR4` of structure `T100KEY` in accordance with the rules of the addition [`WITH`](ABAPMESSAGE.html) of the statement [`MESSAGE`](ABAPMESSAGE.html). If an attribute specified in the components `ATTR1` to `ATTR4` does not exist or if the content of an attribute cannot be converted to a placeholder text, the character *&* is added to the start and the end of the attribute name and the resulting string is used as the placeholder text. If one of the components `ATTR1` to `ATTR4` is initial, the corresponding placeholder text is initialized.

-   The interface `IF_T100_MESSAGE` is mainly intended for use with [exception texts](ABENEXCEPTION_TEXTS.html) in [exception classes](ABENEXCEPTION_CLASS_GLOSRY.html). If the interface is implemented in regular classes and in local exception classes, the filling of the interface structure `T100KEY` must be programmed here explicitly. For global exception classes, however, the implementation of the interface methods `GET_TEXT` and `GET_LONGTEXT` is already contained in the superclass `CX_ROOT` and alias names are declared for these methods here. When creating global exception classes, tool support is provided for filling the structure `T100KEY` and for mapping attributes to placeholders. This is done using structured constants that can be specified when an exception is raised.
-   It should be noted that with interface `IF_T100_MESSAGE` there is a double indirection for the possible placeholders of a message. The text for a placeholder is taken from an attribute of the implementing class whose name is itself contained in a component of structure `T100KEY`.
-   The method `GET_LATEST_T100_EXCEPTION` in the class `CL_MESSAGE_HELPER` can be used to return the last object in a chain of exception objects that are chained by the attribute `PREVIOUS` that has an [exception text](ABENEXCEPTION_TEXTS.html) defined by a message.
-   The interface `IF_T100_MESSAGE` does not have any attributes for the message type.
-   The interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html) adds predefined attributes for the message type and the placeholders of the message to the interface `IF_T100_MESSAGE`. While `IF_T100_MESSAGE` is intended for static [exception texts](ABENEXCEPTION_TEXTS.html) of exception classes, `IF_T100_DYN_MSG` can [associate](ABENMESSAGE_EXCEPTIONS.html) any messages with exception classes.

-   [System Interface `IF_T100_MESSAGE` in a Regular Class](ABENIF_T100_MESSAGE_ABEXA.html)
-   [System Interface `IF_T100_MESSAGE` in a Local Exception Class](ABENMESSAGE_INTERFACE_ABEXA.html)
-   [System Interface `IF_T100_MESSAGE` in Global Exception Class](ABENMESSAGE_INTERFACE_GLOBAL_ABEXA.html)
-   [System Interface `IF_T100_MESSAGE` for Exception with Message](ABENMESSAGE_INTERFACE_REUSE_ABEXA.html)

DATA col TYPE c LENGTH 1. \\n\\ \\n... \\n\\ \\nTRY. \\n FINAL(color) = COND string( \\n WHEN col = 'R' THEN 'red' \\n WHEN col = 'B' THEN 'blue' \\n WHEN col = 'G' THEN 'green' \\n ELSE THROW cx\_demo\_t100( \\n textid = cx\_demo\_t100=>demo \\n text1 = 'Illegal value:' \\n text2 = CONV #( col ) ) ). \\n CATCH cx\_demo\_t100. \\n ... \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenmessage\_interfaces.html