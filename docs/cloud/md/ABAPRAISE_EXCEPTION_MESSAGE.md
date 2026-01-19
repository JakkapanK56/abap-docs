---
title: "ABAPRAISE_EXCEPTION_MESSAGE"
description: |
  ABAPRAISE_EXCEPTION_MESSAGE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPRAISE_EXCEPTION_MESSAGE.htm"
abapFile: "ABAPRAISE_EXCEPTION_MESSAGE.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "ABAPRAISE", "EXCEPTION", "MESSAGE"]
---

`... \{ MESSAGE tn(id)              |\ \{ ID mid TYPE mtype NUMBER num \}\                [WITH dobj1 ... dobj4]\ \}\    |\ \{ USING MESSAGE \} ...`

[1. `... MESSAGE msg ...`](#ABAP_VARIANT_1@1@)

[2. `... USING MESSAGE ...`](#ABAP_VARIANT_2@1@)

The addition `MESSAGE` of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) and of the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html) passes the specification of a [message](ABENMESSAGE_GLOSRY.html) to the exception object.

The addition `tn(id)` or `ID mid TYPE mtype NUMBER num` is used to specify the [message type](ABENMESSAGE_TYPE_GLOSRY.html), the [message class](ABENMESSAGE_CLASS_GLOSRY.html), and the [message number](ABENMESSAGE_NUMBER_GLOSRY.html) of a message [`msg`](ABAPMESSAGE_MSG.html) for the table `T100`, statically or dynamically like in the statement [`MESSAGE`](ABAPMESSAGE.html). Also like in [`MESSAGE`](ABAPMESSAGE.html), the optional addition `WITH` can be used to provide the placeholders of a message with content. The exception class of the raised exception must implement one of the [system interfaces for messages](ABENMESSAGE_INTERFACES.html):

The addition `MESSAGE` fills the attributes of these interfaces with values. This assignment takes place after the instance constructor is executed. This overwrites any values that were assigned to these attributes when the exception object was constructed.

The attributes of the system interfaces are used to link the exception object to the message specified after `MESSAGE`. Using an object reference, the object can be used directly in the variant [`MESSAGE oref`](ABAPMESSAGE_MSG.html) of the [`MESSAGE` statement](ABAPMESSAGE.html) and the message texts can be read using the interface methods.

If the addition `MESSAGE` is used, the input parameter `TEXTID` of the constructor of the exception class must not be filled. This parameter is only intended for specifying a predefined [exception text](ABENEXCEPTION_TEXTS.html).

The full functionality of the addition `MESSAGE` is available only if the system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html) is implemented in the used exception class. This interface includes the system interface [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html) requested by the syntax check. If an exception class is used with the system interface `IF_T100_DYN_MSG`, the addition `MESSAGE` fills its attributes as follows after the instance constructor is executed:

Raising of the exception `CX_DEMO_DYN_T100` that implements the interface `IF_T100_DYN_MSG`. The addition `MESSAGE` is used to pass the properties of a message that determines the exception text.

If only the system interface [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html) is implemented, the addition `WITH` must not be used and only a restricted set of functions is available. When an exception class is used that implements only the system interface `IF_T100_MESSAGE`, the addition `MESSAGE` fills its attributes as follows after the instance constructor is executed:

System Interface `IF_T100_MESSAGE` for Exception with Message

This variant is a short form of the preceding variant of the `MESSAGE` addition. It can be used if the exception class of the raised exception implements the [system interface](ABENMESSAGE_INTERFACES.html)\\ [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html), and has the following effect:

... MESSAGE ID     sy-msgid \\n            TYPE   sy-msgty \\n            NUMBER sy-msgno \\n            WITH   sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4 ...

The addition `USING MESSAGE` implicitly passes the specification of the message that is stored during the execution of the statement in the system fields `sy-msgid`, `sy-msgty`\\ `sy-msgno`, and `sy-msgv1` to `sy-msgv4` to the exception class.

The short form is particularly suitable for converting classic exceptions that were raised in function modules or methods with the statement [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.html), or messages that were caught with [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html), into class-based exceptions.

Raising of the exception `CX_DEMO_DYN_T100` that implements the interface `IF_T100_DYN_MSG`. The addition `USING MESSAGE` implicitly passes the properties of a [status message](ABENSTATUS_MESSAGE_GLOSRY.html) that was previously output with the statement [`MESSAGE`](ABAPMESSAGE.html). In the restricted language scope, the message needs to be written in a string `msg`.

-   The addition `MESSAGE` cannot be specified after the variant [`RAISE EXCEPTION oref`](ABAPRAISE_EXCEPTION_CLASS.html).
-   The position behind `MESSAGE` is contained in the where-used list for the message specified.
-   See also [Exception Classes for Messages](ABENMESSAGE_EXCEPTIONS.html).

-   The message type specified after `MESSAGE` is assigned to the attribute `MSGTY` of the interface `IF_T100_DYN_MSG`.
-   The components of the structured attribute `T100KEY` of the component interface `IF_T100_MESSAGE` are filled as follows:

-   `MSGID` is assigned the message class specified after `MESSAGE`.
-   `MSGNO` is assigned the message number specified after `MESSAGE`.
-   `ATTR1` to `ATTR4` are assigned the names `IF_T100_DYN_MSG~MSGV1` to `IF_T100_DYN_MSG~MSGV4` of the interface attributes for the placeholders of the message. If the addition `WITH` is not specified, `ATTR1` to `ATTR4` remain initial.

-   The attributes `MSGV1` to `MSGV4` of the interface `IF_T100_DYN_MSG` are assigned the texts specified using `WITH`.

-   If `IF_T100_DYN_MSG` is used, the addition `MESSAGE` assigns the correct values to all required attributes of the exception class to link them to the message. More specifically, the attributes for the placeholders of the message are mapped to the structure `T100KEY` of the interface `IF_T100_MESSAGE` automatically.
-   In exception classes with the interface `IF_T100_DYN_MSG`, `MESSAGE` used together with the `EXPORTING` addition can produce unexpected results in the placeholder texts if the addition `WITH` is not specified. Implicit assignments of the input parameters specified after `EXPORTING` to the components `ATTR1` to `ATTR4` are intended for exception classes with the interface `IF_T100_MESSAGE` where `WITH` cannot be specified. Implicit assignments of the names of the input parameters or of initial values can be prevented by specifying `WITH` with a dummy value `space`.

-   [System Interface `IF_T100_DYN_MSG` in a Local Exception Class](ABENRAISE_MESSAGE_ABEXA.html)
-   [System Interface `IF_T100_DYN_MSG` for Exception `error_message`](ABENRAISE_ERROR_MESSAGE_ABEXA.html)

-   The specification of a message type has no effect.
-   The components of the structured attribute `T100KEY` of the component interface `IF_T100_MESSAGE` are filled as follows:

-   `MSGID` is assigned the message class specified after `MESSAGE`.
-   `MSGNO` is assigned the message number specified after `MESSAGE`.
-   `ATTR1` to `ATTR4` are assigned the names of the first four input parameters of the instance constructors specified after `EXPORTING` that can be converted to a character-like target field, in the specified order. Components that cannot be assigned input parameters are initialized.

-   It is recommended that the system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html) is used for exceptions raised using the addition `MESSAGE`.
-   The use of the addition `MESSAGE` for an exception class with [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html) is intended for cases where existing exception classes that cannot be switched to [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html) must be used.
-   The addition `MESSAGE` is suitable for existing exception classes with [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html) that already have a generic [exception text](ABENEXCEPTION_TEXTS.html) without semantic meaning. Previously, structures of the type `SCX_T100KEY`, filled in the program, had to be passed to such exceptions.
-   The use of the addition `MESSAGE` is not recommended for an exception class with [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html) whose exception texts all have a fixed semantic meaning.

-   [Converting the Exception `error_message` to a Class-Based Exception](ABENRAISE_ERROR_MESSAGE_SHRT_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTRY. \\n RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 \\n MESSAGE ID 'SABAPDEMOS' \\n TYPE 'I' \\n NUMBER '888' \\n WITH 'Message'. \\n CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref). \\n out->write( oref->get\_text( ) && \\n \`, \` && oref->msgty ). \\nENDTRY. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nMESSAGE ID 'SABAPDEMOS' TYPE 'S' \\n NUMBER '888' \\n WITH 'Message' \\n INTO FINAL(msg). \\nTRY. \\n RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 USING MESSAGE. \\n CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref). \\n out->write( oref->get\_text( ) && \\n \`, \` && oref->msgty ). \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html abapraise\_exception\_class.html