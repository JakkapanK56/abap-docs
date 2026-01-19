---
title: "ABENNEWS-71-XML"
description: |
  ABENNEWS-71-XML - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-XML.htm"
abapFile: "ABENNEWS-71-XML.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "ABENNEWS", "XML"]
---

In ABAP release 7.0, EhP2 the interface between ABAP and XML has been enhanced as follows:

[1\. Access to ABAP Objects from Simple Transformations](#ABAP_MODIFICATION_1@4@)

[2\. Mapping of XML Schema Data Types](#ABAP_MODIFICATION_2@4@)

[3\. Lengths Specified in Simple Transformations](#ABAP_MODIFICATION_3@4@)

[4\. Validation of Values in Simple Transformations](#ABAP_MODIFICATION_4@4@)

[5. New Values for Transformation Option `value_handling`](#ABAP_MODIFICATION_5@4@)

[6. New Values for Transformation Option `data_refs`](#ABAP_MODIFICATION_6@4@)

[7. New Value for Transformation Option `initial_components`](#ABAP_MODIFICATION_7@4@)

[8. New Transformation Option `technical_types`](#ABAP_MODIFICATION_8@4@)

[9. New Transformation Option `clear`](#ABAP_MODIFICATION_9@4@)

The following new ST statements can be used to call methods of global classes and create objects of these classes in ST programs:

For addressing objects, a new addition `tt:ref-type` of the statements `tt:parameter` and `tt:variable` has been introduced that makes it possible to create parameters and variables from ST programs explicitly as reference variables. Another new statement `tt:cast` also enables a [downcast](ABENDOWN_CAST_GLOSRY.html) of reference variables in ST programs.

See the [ST Statement Overview](ABENST_STATEMENTS.html).

Previously, [asXML](ABENASXML_GLOSRY.html) allowed only mappings of the elementary [built-in ABAP types](ABENBUILTIN_ABAP_TYPE_GLOSRY.html) to XML schema data types and back. But this did not cover all XML schema data types. Special [DDIC domains](ABENDOMAIN_GLOSRY.html) named `XSD...` have been introduced that allow [mapping of further XML schema data types](ABENABAP_XSLT_ASXML_SCHEMA.html).

In the ST statements `tt:value`, `tt:write` and `tt:read` can be used to make length specifications in order to provide a minimum length for serialization of character and type strings and a maximum length for deserialization.

An XML schema type and further restrictions can now be specified in the ST statements `tt:value`, `tt:write`, and `tt:read`, to validate a value with respect to a value range.

The new values *accept\_decimal\_loss* and *reject\_illegal\_characters* can be selected for the transformation option [`value_handling`](ABAPCALL_TRANSFORMATION_OPTIONS.html) of the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html).

The new values `heap-or-error` and `heap-or-create` can be selected for the transformation option [`data_refs`](ABAPCALL_TRANSFORMATION_OPTIONS.html) of the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html), to control the handling of [stack references](ABENSTACK_REFERENCE_GLOSRY.html).

This change was transported back as far as ABAP release 6.20 (in ABAP release 7.0, from SP6).

The new value `suppress_boxed` can be selected for the transformation option [`initial_components`](ABAPCALL_TRANSFORMATION_OPTIONS.html) of the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html), to control the handling of [boxed components](ABENBOXED_COMPONENT_GLOSRY.html). The new value is also the new default setting.

`error` or `ignore` can be selected for the new transformation option [`technical_types`](ABAPCALL_TRANSFORMATION_OPTIONS.html) of the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html), to control the handling of data reference variables with unknown dynamic types.

This change was transported back as far as ABAP release 6.20 (in ABAP release 7.0, from SP6).

`all`, `supplied`, or `none` can be selected for the new transformation option [`clear`](ABAPCALL_TRANSFORMATION_OPTIONS.html) of the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html), to control the initialization of the ABAP target fields in deserializations.

-   `tt:call-method` calls static methods or instance methods.
-   `tt:create-object` creates an instance of a global class.

-   This change was introduced in ABAP release 7.0, SP14.
-   The domain `XSDQNAME` is available from ABAP release 7.0, EhP1.

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html