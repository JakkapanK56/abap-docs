---
title: "ABAPMESSAGE_MSG"
description: |
  ABAPMESSAGE_MSG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMESSAGE_MSG.htm"
abapFile: "ABAPMESSAGE_MSG.html"
keywords: ["select", "do", "if", "case", "catch", "method", "class", "data", "types", "field-symbol", "ABAPMESSAGE", "MSG"]
---

[Short Reference](ABAPMESSAGE_SHORTREF.html)

`... \{ tn \}`\\ 
  `|\ \{ tn(id) \}`\\ 
  `|\ \{ ID mid TYPE mtype NUMBER num \}`\\ 
  `|\ \{ oref [TYPE mtype]\ \}`\\ ` ...`

[1. `... tn ...`](#ABAP_ALTERNATIVE_1@2@)

[2. `... tn(id) ...`](#ABAP_ALTERNATIVE_2@2@)

[3. `... ID mid TYPE mtype NUMBER num ...`](#ABAP_ALTERNATIVE_3@2@)

[4. `... oref [TYPE mtype] ...`](#ABAP_ALTERNATIVE_4@2@)

`msg` specifies a [message](ABENMESSAGE_GLOSRY.html) from the database table [`T100`](ABENABAP_MESSAGES_STORING.html) either by specifying the message key consisting of `id` and `n` directly or by using the content of the data objects `mid` and `num` for the message class and the message number. Alternatively, an object reference variable `oref` is specified whose [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) implements the interface [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html).

The [message type](ABENMESSAGE_TYPE_GLOSRY.html) that controls the [behavior](ABENABAP_MESSAGES_TYPES.html) of the message must be specified directly in `t` or as content of the data object `mtype`. The following message types are possible: *A*, *E*, *I*, *S*, *W*, or *X*. An invalid type produces a syntax error or runtime error.

If the specified message is not found for the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) of the current user, a search is made in the [secondary language](ABENSECONDARY_LANGUAGE_GLOSRY.html) in AS ABAP and then in English. If it is still not found, the specified message type, message class, and message number are used as short text in uppercase letters and separated by a colon *:*.

The system fields of the statement `MESSAGE` are always supplied with the specified values.

`t` and `n` are used to specify the single-character message type and the three-digit message number directly one after another (static short form). The message class must be specified with the addition `MESSAGE-ID` in the statement that introduces the program.

Display of the short text of the message with the number 014 from the message class `SABAPDOCU` as an [information message](ABENINFORMATION_MESSAGE_GLOSRY.html).

The same applies to `t` and `n` as to the static short form. In the static long form, the message class is specified directly in parentheses using `id`.

Specifying the message class explicitly overrides the addition `MESSAGE-ID` of the statement that introduces the program. Specifying the message class in parentheses does not mean here that the content of `id` is used. Instead, the message class is used that has the name that was specified directly with `id`.

As in the example for alternative 1, with the message class specified explicitly.

The message class, the message type, and the message number are specified as content of the data objects `mid`, `mtype`, and `num` (dynamic form). `mid` and `mtype` expect character-like data objects that must contain the message class or the message type in uppercase letters. Invalid message types raise an uncatchable exception. `num` expects a data object of the type `n` and length 3.

Specifying the message class explicitly overrides the addition `MESSAGE-ID` of the statement that introduces the program.

As in the example for alternative 2, with the message and the message type specified dynamically.

For `oref`, an object reference variable can be specified which, when the statement `MESSAGE` is executed, points to an object whose class implements the system interface [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html). This in turn contains the [component interface](ABENCOMPONENT_INTERFACE_GLOSRY.html)\\ `IF_MESSAGE`. `oref` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). If `oref` is specified, the addition [`WITH`](ABAPMESSAGE.html) and the variant with [`INTO`](ABAPMESSAGE_INTO.html) are not allowed.

The statement `MESSAGE` evaluates the components of the structured attribute `T100KEY` of the interface [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html) in the referenced object:

The message type is either specified explicitly or determined implicitly.

Sending of a messages using an object of the class `cls` created using the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) that implements the system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html). The message is specified completely by interface attributes of the object.

-   The maximum length of a message is 269 and is determined from the short text of the message in the database table [`T100`](ABENABAP_MESSAGES_STORING.html) with a maximum of 73 characters) including up to four single-character placeholders `&`. These placeholders can be replaced by strings with a maximum of 50 characters using the addition [`WITH`](ABAPMESSAGE.html).
-   The [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) checks the existence of statically specified messages.

-   The message class is taken from the component `MSGID` and the message number from the component `MSGNO`. If the message is not found, a short text is generated that lists the message class and message number used plus the placeholder texts.
-   The names of attributes of the object are taken from the components `ATTR1` to `ATTR4`. The placeholders *&1* to *&4* and *&* of the short text or *&V1&* to *&V4&* of the message long text are replaced with the content of these attributes in accordance with rules of the addition [`WITH`](ABAPMESSAGE.html). If an attribute does not exist or an attribute cannot be converted to a placeholder text, the character *&* is added to the start and the end of the attribute name and used as a placeholder text. Initial components `ATTR1` to `ATTR4` produce initial placeholder texts.

-   The type is specified explicitly using `TYPE mtype`, where `mtype` expects a character-like data object containing a valid message type in uppercase letters.
-   If `oref` points to an object that implements the system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html) and this is known statically, the addition `TYPE` can be omitted and the message type in `MSGTY` is used.

-   If field symbols or formal parameters of the generic type `any` or `data` are specified for `oref`, the variant [`MESSAGE text`](ABAPMESSAGE_TEXT.html) is used, which has identical syntax.
-   This variant is mainly intended to be used with [exception objects](ABENEXCEPTION_OBJECT_GLOSRY.html). If a global [exception class](ABENEXCEPTION_CLASS_GLOSRY.html) implements the interface `IF_T100_MESSAGE`, the components of the structure `T100KEY` are filled in accordance with the definition of the associated exception text when a corresponding exception is raised in the interface method `GET_TEXT`, which is itself implemented in the superclass `CX_ROOT`. In local exception classes, the components must be filled manually. To do this, the interface method `GET_TEXT` should not be redefined and the instance constructor should be used instead.
-   The system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html) includes `IF_T100_MESSAGE` and objects from classes that implement `IF_T100_DYN_MSG` can be used accordingly. `IF_T100_MESSAGE` is intended to be used on its own for statically predefined [exception texts](ABENEXCEPTION_TEXTS.html) of exception classes and `IF_T100_DYN_MSG` enables exception objects to be linked with [messages](ABENMESSAGE_EXCEPTIONS.html).
-   If the `TYPE` addition is omitted for an object with the system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html), the addition `TYPE oref->if_t100_dyn_msg~msgty` is added implicitly.
-   For compatibility reasons, this variant can still be used for classes that only implement the interface `IF_MESSAGE`. In this case, the interface methods `GET_TEXT` and `GET_LONGTEXT` are called automatically in the referenced object and their return value is used as the short text or long text of the message. In this case, the system fields `sy-msgid` and `sy-msgno` are not filled specifically. The root class of all [exception classes](ABENEXCEPTION_CLASS_GLOSRY.html)\\ `CX_ROOT` implements the interface `IF_MESSAGE`. In exception classes that do not implement the interface `IF_T100_MESSAGE`, the interface methods `GET_TEXT` and `GET_LONGTEXT` get the exception texts of exception objects stored in OTR (Online Text Repository ), which then can be displayed as a message using the variant of the `MESSAGE` statement.

-   [System Interface `IF_T100_MESSAGE` in a Regular Class](ABENIF_T100_MESSAGE_ABEXA.html)
-   [System Interface `IF_T100_MESSAGE` in a Local Exception Class](ABENMESSAGE_INTERFACE_ABEXA.html)
-   [System Interface `IF_T100_MESSAGE` in a Global Exception Class](ABENMESSAGE_INTERFACE_GLOBAL_ABEXA.html)

REPORT rep MESSAGE-ID sabapdemos. \\n... \\nMESSAGE i014. REPORT ... \\n... \\nMESSAGE i014(sabapdemos). DATA: mid TYPE sy-msgid VALUE 'SABAPDEMOS', \\n mtype TYPE sy-msgty VALUE 'I', \\n num TYPE sy-msgno VALUE '014'. \\n\\ \\nMESSAGE ID mid TYPE mtype NUMBER num. CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES if\_t100\_dyn\_msg. \\n ALIASES: \\n t100\_key FOR if\_t100\_message~t100key, \\n msgty FOR if\_t100\_dyn\_msg~msgty. \\n METHODS constructor \\n IMPORTING msgid TYPE symsgid \\n msgno TYPE symsgno \\n msgty TYPE symsgty. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD constructor. \\n me->t100\_key-msgid = msgid. \\n me->t100\_key-msgno = msgno. \\n me->msgty = msgty. \\n ENDMETHOD. \\n METHOD if\_message~get\_text. \\n result = cl\_message\_helper=>get\_text\_for\_message( me ). \\n ENDMETHOD. \\n METHOD if\_message~get\_longtext. \\n result = cl\_message\_helper=>get\_longtext\_for\_message( me ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nSTART-OF-SELECTION. \\n MESSAGE NEW cls( msgid = 'SABAPDEMOS' \\n msgno = '001' \\n msgty = 'I' ) DISPLAY LIKE 'S'. abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abapmessage.html