---
title: "ABENNEWS-620-OTHERS"
description: |
  ABENNEWS-620-OTHERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-620-OTHERS.htm"
abapFile: "ABENNEWS-620-OTHERS.html"
keywords: ["select", "insert", "loop", "do", "if", "try", "method", "class", "data", "internal-table", "field-symbol", "ABENNEWS", "620", "OTHERS"]
---

[1. Parameter `INITIAL SIZE` for Internal Tables](#ABAP_MODIFICATION_1@4@) 

[2\. Relevant Language Key in Dictionary Structures](#ABAP_MODIFICATION_2@4@)

[3\. New Functions in the Extended Program Check](#ABAP_MODIFICATION_3@4@)

[4. Handling `IMPORTING` Parameters with `CREATE`](#ABAP_MODIFICATION_4@4@)

[5\. Secondary Language Access for Text Elements](#ABAP_MODIFICATION_5@4@)

[6. System Field `sy-toccu` Obsolete](#ABAP_MODIFICATION_6@4@) 

[7\. Compatibility in Structure Typing](#ABAP_MODIFICATION_7@4@)

[8. Lengths Specified in the Statement `WRITE`](#ABAP_MODIFICATION_8@4@)

[9\. XML Serialization and XML Deserialization](#ABAP_MODIFICATION_9@4@)

[10\. Static Method Call from XSLT](#ABAP_MODIFICATION_10@4@)

[11. Addition `USER-COMMAND` After `PARAMETERS ... AS LISTBOX`](#ABAP_MODIFICATION_11@4@)

[12\. Wider Frame on Selection Screens](#ABAP_MODIFICATION_12@4@)

An internal table created as a data type in ABAP Dictionary can be assigned an [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html). This specification in the dictionary has the same effect as the [`INITIAL SIZE`](ABAPDATA_ITAB.html) addition in the ABAP source code. Therefore, all the information that describes a table, such as table category, key, line number, and type, are also available in the dictionary.

For error-free conversion of data that is swapped between [Unicode](ABENUNICODE_SYSTEM_GLOSRY.html) and non-Unicode systems, you can specify the structure components responsible for the relevant language key in ABAP Dictionary. If necessary, this information can be queried in the [remote function call](ABENRFC.html).

The following changes have been made to the extended program check:

Formal parameters of methods that were passed to the method using `IMPORTING` and referenced there using [`CREATE`](ABAPCREATE_OBJECT.html) can no longer be overwritten. This check, which was previously not executed till runtime, is now caught by the syntax check.

Secondary language access is now available for report titles, [list headers](ABENLIST_HEADER_GLOSRY.html), selection texts, text symbols, and texts specified dynamically of the form [`ASSIGN ('TEXT-nnn') TO <fs>`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html). If the text pool does not exist in the logon language, the system loads the text pool that matches the entry in the profile parameter `zcsa/second_language`.

Until now, text elements that were not available in the text pool for the language `lg` remained unaltered by the statement [`SET LANGUAGE lg`](ABAPSET_LANGUAGE.html). In the context of this change, these texts are now reset to their initial value.

In the statements `READ TABLE`, `LOOP AT itab`, and `DESCRIBE TABLE`, the system field `sy-toccu` is no longer filled.

If structures are passed to formal parameters and function modules typed using `STRUCTURE`, or assigned to similarly typed field symbols, closing alignment gaps are now also respected by the type check.

As of ABAP release 6.20, the output length can be specified using the variants [`WRITE AT (*)`](ABAPWRITE-.html) and [`WRITE AT (**)`](ABAPWRITE-.html), as well as using numeric data objects.

Objects and data references can now also be serialized and deserialized in [XML](ABENXML_GLOSRY.html) serialization and XML deserialization.

It is now also possible to call public [static methods](ABENSTATIC_METHOD_GLOSRY.html) from [XSLT programs](ABENXSL_TRANSFORMATION_GLOSRY.html).

The addition `USER-COMMAND` can be specified for the statement [`PARAMETERS`](ABAPPARAMETERS.html) together with the addition [`AS LISTBOX`](ABAPPARAMETERS_SCREEN.html).

The standard maximum width of a frame around a block created using [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN_BLOCK.html) is now 120 columns. It was previously 83 columns.

-   Errors in included [type pools](ABAPTYPE-POOLS.html) are no longer displayed.
-   An [`INSERT itab`](ABAPINSERT_ITAB.html) outside a loop causes a warning.
-   All characters in the ABAP source code, especially special characters that do not comply with the [naming conventions](ABENTYPE_NAMES.html), raise a warning.
-   All [structure enhancements](ABENDDIC_STRUCTURES_ENH_CAT.html) whose ABAP source code indicate potential runtime errors or changed program behavior raise a warning.

1.  Objects are only serialized if the class implements the interface `IF_SERIALIZABLE_OBJECT`.
2.  Data references can only be serialized if the referenced type is not anonymous.

abenabap.html abennews.html abennews-6.html abennews-620.html