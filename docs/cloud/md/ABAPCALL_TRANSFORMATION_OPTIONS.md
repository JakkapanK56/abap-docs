---
title: "ABAPCALL_TRANSFORMATION_OPTIONS"
description: |
  ABAPCALL_TRANSFORMATION_OPTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCALL_TRANSFORMATION_OPTIONS.htm"
abapFile: "ABAPCALL_TRANSFORMATION_OPTIONS.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "ABAPCALL", "TRANSFORMATION", "OPTIONS"]
---

`... OPTIONS [clear              = val]\              [data_refs          = val]\              [initial_components = val]\              [technical_types    = val]\              [value_handling     = val]\              [exceptions         = val]\              [xml_header         = val] ...`

[1. `... clear`](#ABAP_ADDITION_1@3@)

[2. `... data_refs`](#ABAP_ADDITION_2@3@)

[3. `... initial_components`](#ABAP_ADDITION_3@3@)

[4. `... technical_types`](#ABAP_ADDITION_4@3@)

[5. `... value_handling`](#ABAP_ADDITION_5@3@)

[6. `... exceptions`](#ABAP_ADDITION_6@3@)

[7. `... xml_header`](#ABAP_ADDITION_7@3@)

The addition `OPTIONS` enables predefined transformation options to be specified, to which specific values can be assigned to control transformations. The values must be specified in data objects `val` of type `c` or `string`. Each transformation option may only be specified once. Multiple values separated by blanks can be specified for a transformation option in `val`. If an invalid value is specified for a transformation option, a catchable exception of class `CX_SY_TRANS_OPTION_ERROR` is raised.

The transformations apply to XML and to [JSON](ABENJSON_GLOSRY.html), if applicable.

The transformation option `clear` controls how the ABAP target fields are initialized when deserializing from XML or JSON to ABAP.

Using the default setting (`none`) can become critical when nonexistent or empty elements are deserialized to data objects. In the case of nonexistent elements, all data objects keep their original values. In the case of empty elements, structures keep their values. In cases like this, it is advisable to use `clear` with the value *all*.

The transformation option `data_refs` specifies the output of [data references](ABENDATA_REFERENCE_GLOSRY.html) if the transformation is from ABAP to XML or JSON.

The exception `CX_REFERENCE_NOT_SERIALIZABLE` cannot be caught by specifying it directly. It can only be caught by specifying `CX_XSLT_SERIALIZATION_ERROR`.

For information about the differences between serializing to `heap` and embedded elements, see [Serializations to Heap or Embedded](ABENSERIALIZE_REF_HEAP_EMBED_ABEXA.html).

The transformation option `initial_components` controls the output of initial structure components when transforming from ABAP to XML or JSON.

The transformation option `technical_types` controls the behavior if no type description can be serialized when serializing data references to [asXML](ABENASXML_REFERENCE_VARIABLE.html) or [asJSON](ABENABAP_ASJSON_REFERENCE_VAR.html). This is the case when the [technical type properties](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html) of the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) of the data reference variable are known, but the type does not have a name (or it only has a technical name).

The transformation option `value_handling` controls the tolerance of conversions when [mapping elementary ABAP types](ABENABAP_XSLT_ASXML_ELEMENTARY.html).

If `value_handling = 'reject_illegal_characters'` is specified, for example, an exception is raised if, in the XML header of XML data in the Latin-1 character set, `encoding="utf-8"` is specified and the XML data contains characters other than those of the 7-bit ASCII character set.

The transformation option `exceptions` controls the behavior of exceptions packed in `CX_TRANSFORMATION_ERROR` or its subclasses.

If the transformation option `exceptions = 'resumable'` is specified, an exception of the class `CX_ST_DESERIALIZATION_ERROR`, that wraps an original exception behaves as if it were raised as a resumable exception.

Resumable raising of an exception in the deserialization of a character that does not represent a number to a numeric target field. The attribute `RESULT_REF_FOR_RESUME` points to the target field `field1`, to which a negative value is assigned to demonstrate that the deserialization did not work. The deserialization is then resumed using [`RESUME`](ABAPRESUME.html) and `field2` is given the value 2 from the XML file.

The transformation option `xml_header` controls the output of the XML header when transforming to XML and writing to a data object of type `c`, `string`, or to an internal table.

The `xml_header` is not possible for `SOURCE JSON src_json`.

`CX_SY_TRANS_OPTION_ERROR`

-   The suppression of initial components in serializations reduces the data volume. However, this option should be used with caution and only if there is complete control over deserializations. If the option `clear` is not used with the value *all* in serializations, any suppressed components in ABAP data objects are ignored and the target fields keep their values. Deserialization in external systems can cause problems if a suppressed component is expected.
-   The suppression of initial components also affects structure components that are typed with the domains for [XML schema data types](ABENABAP_XSLT_ASXML_SCHEMA.html). For example, a component typed with the domain `XSDBOOLEAN` is not created as output if it has the value `abap_false`. This can also cause unwanted results.

-   The exception `CX_REFERENCE_NOT_SERIALIZABLE` cannot be caught by specifying it directly. It can only be caught by specifying `CX_XSLT_SERIALIZATION_ERROR`.
-   Data types without names are [bound data types](ABENBOUND_DATA_TYPE_GLOSRY.html) or data types constructed using [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html).

-   The exceptions mentioned cannot be caught by specifying them directly by `CALL TRANSFORMATION` but are packed into `CX_TRANSFORMATION_ERROR` or its subclasses.
-   If a value is specified that is not supported in the specified direction however, the directly catchable exception `CX_SY_TRANS_OPTION_ERROR` is raised.

-   When the resumable exception is handled, the target field can also be given a different value using the attribute `RESULT_REF_FOR_RESUME` before processing is resumed using [`RESUME`](ABAPRESUME.html).
-   If an exception of the class `CX_ST_DESERIALIZATION_ERROR` is raised by an exception that is itself raised in an ABAP method called during the transformation, the transformation option `exceptions = 'resumable'` alone is not sufficient to resume at the position where the exception was raised. To do this, the exception must be declared using [`RAISING RESUMABLE`](ABAPMETHODS_GENERAL.html) and raised using [`RAISE RESUMABLE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html).

-   *Cause:* Invalid transformation option or invalid value.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTRY. \\n CALL TRANSFORMATION demo\_two\_values \\n SOURCE field1 = 'x' \\n field2 = '2' \\n RESULT XML FINAL(xml). \\n\\ \\n out->write\_xml( xml ). \\n\\ \\n DATA: field1 TYPE i, \\n field2 TYPE i. \\n TRY. \\n CALL TRANSFORMATION demo\_two\_values \\n SOURCE XML xml \\n RESULT field1 = field1 \\n field2 = field2 \\n OPTIONS exceptions = 'resumable'. \\n CATCH BEFORE UNWIND cx\_st\_deserialization\_error INTO FINAL(exc1). \\n exc1->result\_ref\_for\_resume->\* = -1. \\n RESUME. \\n ENDTRY. \\n\\ \\n out->write( |\\{ field1 \\}, \\{ field2 \\}| ). \\n\\ \\n CATCH cx\_st\_invalid\_xml INTO FINAL(exc2). \\n out->write( exc2->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). **Possible Values** **Meaning** **Possible Values** **Meaning** **Possible Values** **Meaning** **Possible Values** **Meaning** **Possible Values** **Meaning** **Possible Values** **Meaning** **Possible Values** **Meaning** `all` All target fields specified after `RESULT` are initialized before calling the transformation. This is the recommended setting. `supplied` In ST, the target fields which have a root node assigned to them in the ST program are initialized before calling the transformation. In XSLT, target fields for which a root node exists in the XML data are initialized before importing the nodes. Other target fields keep their value. `none` Default, the target fields specified after `RESULT` are not initialized, except for internal tables `no` Default in ST; no data references are produced. `heap` Default in XSLT and only possible there; data referenced using [heap references](ABENHEAP_REFERENCE_GLOSRY.html) is output as subelements of the [asXML](ABENASXML_GLOSRY.html) elements `asx:heap` or the asJSON object `%heap`. Data objects referenced using [stack references](ABENSTACK_REFERENCE_GLOSRY.html) are not serialized. `heap-or-error` Only possible in XSLT. Like `heap`, but the exception `CX_REFERENCE_NOT_SERIALIZABLE` is raised if the data to be serialized contains [stack references](ABENSTACK_REFERENCE_GLOSRY.html). `heap-or-create` Only possible in XSLT. Like `heap`, but data objects referenced using [stack references](ABENSTACK_REFERENCE_GLOSRY.html) are handled like data objects referenced using [heap references](ABENHEAP_REFERENCE_GLOSRY.html). `embedded` Only possible in XSLT. Referenced data objects are output with the reference. It is not possible to deserialize XML data created in this way, since the identity of the objects is lost when serialized. `include` Initial components of structures are output. `suppress_boxed` Default; does not output initial [boxed components](ABENBOXED_COMPONENT_GLOSRY.html) of structures; initial components of all other structures are output. `suppress` Initial components of structures are not output. `error` Default in XSLT and only possible there. The serialization of a data reference variable with a dynamic type without a name raises the exception `CX_REFERENCE_NOT_SERIALIZABLE`. `ignore` Only possible in XSLT. A data reference variable with a dynamic type without a name is ignored in serializations. `default` Default setting; in serializations, an invalid value in a field of type `n` raises the exception `CX_SY_CONVERSION_NO_NUMBER`. When deserializing, the exception `CX_SY_CONVERSION_DATA_LOSS` is raised if target fields of the types `c`, `n`, or `x` are too short or the exception `CX_SY_CONVERSION_LOST_DECIMALS` is raised if target fields of the type `p` have too few decimal places. `move` Only possible in serializations. Invalid values in a field of type `n` are copied to XML or JSON without being changed. `accept_data_loss` Only possible in deserializations. If target fields of types `c`, `n`, or `x` are too short, surplus data for `c` and `x` is cut off on the right and surplus data for `n` is cut off on the left. `accept_decimals_loss` Only possible in deserializations. If target fields of the type `p` have too few decimal places, they are rounded up to the available decimal places. `reject_illegal_characters` Only possible in deserializations. If a value to be deserialized contains characters that do not match the encoding of the XML data or JSON data, nor the current code page of AS ABAP, an exception of the type `CX_SY_CONVERSION_CODEPAGE` is raised. If the XML or JSON data is passed as an iXML input stream, the setting of the iXML parser overrides the encoding of the XML or JSON data. `resumable` Only in deserializations with ST. Exceptions of the class `CX_ST_DESERIALIZATION_ERROR` are raised as [resumable exceptions](ABENRESUMABLE_EXCEPTION_GLOSRY.html) of the class. If they are handled using [`CATCH BEFORE UNWIND`](ABAPCATCH_TRY.html), the target field for which the exception was raised is given its type-dependent initial value and the attribute `RESULT_REF_FOR_RESUME` of the exception object contains a data reference to this target field. The terminated transformation can be resumed using [`RESUME`](ABAPRESUME.html). `no` No XML header is output. `without_encoding` An XML header is output without specifying the encoding. `full` Default; an XML header is output and encoding is specified. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abapcall\_transformation.html