---
title: "ABENNEWS-640-OTHERS"
description: |
  ABENNEWS-640-OTHERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-640-OTHERS.htm"
abapFile: "ABENNEWS-640-OTHERS.html"
keywords: ["update", "do", "while", "if", "case", "try", "method", "class", "data", "types", "ABENNEWS", "640", "OTHERS"]
---

[1. `VALUE` Addition for All `DATA` Statements](#ABAP_MODIFICATION_1@4@) 

[2. `LEAVE TO CURRENT TRANSACTION`](#ABAP_MODIFICATION_2@4@)

[3. `INTO` Addition for the `CLEANUP` Statement](#ABAP_MODIFICATION_3@4@) 

[4. `IF FOUND` Addition for the `INCLUDE` Statement](#ABAP_MODIFICATION_4@4@) 

[5. Data Compression with `GZIP`](#ABAP_MODIFICATION_5@4@)

[6\. Random Number Generator](#ABAP_MODIFICATION_6@4@)

[7. New Method in `CL_SYSTEM_TRANSACTION_STATE`](#ABAP_MODIFICATION_7@4@)

[8.  Variant `MESSAGE oref` for Messages](#ABAP_MODIFICATION_8@4@) 

[9. Behavior of Error Messages in `LOAD-OF-PROGRAM`](#ABAP_MODIFICATION_9@4@)

[10\. Revision of ABAP Keyword Documentation](#ABAP_MODIFICATION_10@4@)

The addition `VALUE` can now be used in all variants of the statement [`DATA`](ABAPDATA.html) and in all related statements, like [`CONSTANTS`](ABAPCONSTANTS.html). Previously, the addition could not be used when creating bound table types. It is now also possible to create constants with bound table types.

If the new addition `CURRENT TRANSACTION` is specified after [`LEAVE TO TRANSACTION,`](ABAPLEAVE_TO_TRANSACTION.html) the current [transaction](ABENTRANSACTION_GLOSRY.html) is called using the transaction code used to call `CALL TRANSACTION` or `LEAVE TO TRANSACTION`. Except in the case of a [parameter transaction](ABENPARAMETER_TRANSACTION_GLOSRY.html) or [variant transactions](ABENVARIANT_TRANSACTION_GLOSRY.html), this is the same transaction code as in the `sy-tcode` system field. For parameter or variant transactions it is their transaction code, while `sy-tcode` contains the name of the implicitly called [dialog transaction](ABENDIALOG_TRANSACTION_GLOSRY.html). The transaction code for the current transaction can also be obtained using the new static method `GET_CURRENT_TRANSACTION` of class `CL_DYNPRO`.

This change was also transported back to ABAP release 6.20.

The new addition `INTO` of the statement [`CLEANUP`](ABAPCLEANUP.html) is used to make a reference to the exception object in the specified reference variable.

This change was also transported back to ABAP release 6.20.

The new addition `IF FOUND` can be used to prevent syntax errors in the statement [`INCLUDE`](ABAPINCLUDE_PROG.html) if the specified program cannot be found.

System classes with methods for compressing character chains and byte chains with `GZIP` were introduced (see [classes for compressing data](ABENCL_ABAP_GZIP.html)).

This change was also transported back to ABAP release 6.20.

System classes for creating pseudo random numbers were introduced (see [classes for mathematical operations](ABENCL_ABAP_MATH.html)).

In class `CL_SYSTEM_TRANSACTION_STATE` there is a new method `GET_SAP_LUW_KEY` for determining the update key.

If the variant [`MESSAGE oref`](ABAPMESSAGE_MSG.html) is used, only one object reference variable can be specified whose dynamic type implements the system interface `IF_T100_MESSAGE` for `oref`. The attributes of the interface identify the message to be sent in table `T100`. The use of classes (introduced in ABAP release 6.20) that only implement the interface `IF_MESSAGE` is obsolete and only allowed for compatibility reasons.

From ABAP release 6.40, a program is terminated with the runtime error `SYSTEM_LOAD_OF_PROGRAM_FAILED` if the event block for `LOAD-OF-PROGRAM` contains an [error message](ABENERROR_MESSAGE_GLOSRY.html). Before ABAP release 6.40, the system behaved according to the context where the program was loaded.

The ABAP keyword documentation has been completely revised. An alphabetical [quick reference](ABENABAP_SHORTREF.html), an [ABAP glossary](ABENABAP_GLOSSARY.html), and an alphabetic [ABAP index](ABENABAP_INDEX.html) have been added. F1 Help in ABAP Editor and Screen Painter analyzes the index and the glossary.

The color code in the hyperlinks has been changed as follows:

-   [Link](ABENABAP.html) in the keyword documentation
-   [Link](ABENABAP_GLOSRY.html) to a glossary entry
-   Link to a program in the current AS ABAP.

abenabap.html abennews.html abennews-6.html abennews-640.html