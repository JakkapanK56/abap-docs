---
title: "ABAPCALL_TRANSFORMATION"
description: |
  ABAPCALL_TRANSFORMATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCALL_TRANSFORMATION.htm"
abapFile: "ABAPCALL_TRANSFORMATION.html"
keywords: ["do", "if", "case", "catch", "method", "class", "data", "types", "internal-table", "ABAPCALL", "TRANSFORMATION"]
---

`CALL TRANSFORMATION ID`\\ 
                  `| trans|(name)`\\ 
                    `[PARAMETERS \{p1 = e1 p2 = e2 ...\}|(ptab)]`\\ 
                    ``[[`OPTIONS options`](ABAPCALL_TRANSFORMATION_OPTIONS.html)]``\\ 
                    `SOURCE \{XML src_xml\}\                           |\ \{JSON src_json\}\                           |\ \{\{bn1 = e1 bn2 = e2 ...\}|(stab)\}`\\ 
                    `RESULT \{XML rslt_xml\}\                           |\ \{JSON rslt_json\}\                           |\ \{\{bn1 = f1 bn2 = f2 ...\}|(rtab)\}.`

[1. `... ID ...`](#ABAP_ALTERNATIVE_1@2@)

[2. `... trans|(name) ...`](#ABAP_ALTERNATIVE_2@2@)

[1a. `... SOURCE \{XML src_xml\}|\{JSON src_json\}|\{\{bn1 = e1 bn2 = e2 ...\}|(stab)\}`](#ABAP_ADDITION_1a@3a@)

[1b. `... RESULT \{XML rslt_xml\}|\{JSON rslt_json\}\ |\{\{bn1 = f1 bn2 = f2 ...\}|(rtab)\}`](#ABAP_ADDITION_1b@3b@)

[2. `... PARAMETERS \{\{p1 = e1 p2 = e2 ...\}|(ptab)\}`](#ABAP_ADDITION_2@3@)

This statement calls the specified [XSL transformation](ABENXSL_TRANSFORMATION_GLOSRY.html) (XSLT) or a [Simple Transformation](ABENSIMPLE_TRANSFORMATION_GLOSRY.html) (ST). The source of the transformation is specified behind `SOURCE` and the result is stored as specified behind `RESULT`. `PARAMETERS` can be used to pass parameters to the transformation. The addition [`OPTIONS`](ABAPCALL_TRANSFORMATION_OPTIONS.html) can be used to specify transformation options `options`. The possible transformation types are:

[JSON-XML](ABENJSON_XML_GLOSRY.html), which maps [JSON](ABENJSON_GLOSRY.html) data to XML, can be used to execute all categories of transformations for JSON that are also possible for XML. For more information, see [Transformations for JSON](ABENABAP_JSON_TRAFOS.html).

Specifies the [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` directly. This transformation exists as an XSL transformation in the repository but is executed by the runtime framework in an optimized ID engine, depending on the transformation source or target. For more information, see:

[Executable Example of an Identity Transformation](ABENXSLT_ABEXA.html)

Specifies any transformation. The transformation addition can be specified either statically or dynamically:

The specified transformation must exist as an [XSLT program](ABENXSLT_PROGRAM_GLOSRY.html) or as a [Simple Transformation](ABENSIMPLE_TRANSFORMATION_GLOSRY.html) in the [repository](ABENREPOSITORY_GLOSRY.html). If a dynamically specified transformation is not found, an exception of the class `CX_INVALID_TRANSFORMATION` is raised.

[Executable Example of a Simple Transformation](ABENST_PROGRAM_ABEXA.html)

Specifying the source.

**Transformation of XML Data**

When `XML src_xml` is specified, the [XML](ABENXML_GLOSRY.html) data contained in `src_xml` is transformed. `src_xml` can exist in the following forms:

**Transformation of JSON Data**

When `JSON src_json` is specified, the [JSON](ABENJSON_GLOSRY.html) data contained in `src_json` is transformed. `src_json` can exist in the following forms:

**Transformation of ABAP Data**

`bn1 = e1 ...` or `(stab)` is used to specify the ABAP data `e1 e2 ...` to be transformed.

Instead of using a static parameter list, the data objects can be passed dynamically as value pairs in the columns of an internal table `stab` that has the type `abap_trans_srcbind_tab` from the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `ABAP`.

Serializations convert the elementary components of the ABAP data objects to [asXML](ABENASXML_GLOSRY.html) or [asJSON](ABENASJSON_GLOSRY.html), in accordance with the [mappings for built-in ABAP types](ABENABAP_XSLT_ASXML_ELEMENTARY.html) or for [further XML schema data types](ABENABAP_XSLT_ASXML_SCHEMA.html). This can raise the exceptions described there, some of which can be bypassed by using [transformation options](ABAPCALL_TRANSFORMATION_OPTIONS.html).

The case of the names in the XML data or JSON data depends on how they are specified in the ABAP runtime framework. If specified statically (`b1`, `b2`, ...), uppercase is used and if specified dynamically in `stab`, the case used there is used.

When a Simple Transformation is called, the serialization always creates an internal [XML writer](ABENXML_WRITER_GLOSRY.html), which can be addressed using the interface `IF_SXML_WRITER` from [sXML](ABENABAP_SXML_LIB.html) Library. The object is accessed using attributes of the ST statement [`tt:call-method`](ABENST_TT_CALL-METHOD_STATIC.html).

Specifying the target.

**Transformation to XML Data**

When `XML rslt_xml` is specified, a transformation to [XML](ABENXML_GLOSRY.html) data takes place and this data is passed to `rslt_xml`. `rslt_xml` can exist in the following forms:

If HTML data containing JavaScript is created using the output method `html` of an XSL transformation, the syntax characters `<`, blank, *&*, *"*, and *'* in the JavaScript parts are not transformed to their [XML notation](ABENXML_OVIEW.html). To prevent cross site scripting (XSS) in HTML data that contains dynamic JavaScript parts, appropriate measures must be taken. These measures are best applied in the XSL transformation that creates the data.

**Transformation to JSON Data**

When `JSON rslt_json` is specified, a transformation to [JSON](ABENJSON_GLOSRY.html) data takes place and this data is passed to `rslt_json`. `rslt_json` can exist in the following forms:

**Transformation to ABAP Data**

`bn1 = f1 ...` or `(rtab)` are used to specify the ABAP target fields `f1 f2 ...` into which the XML data is to be transformed.

Instead of using a static parameter list, the data objects can be passed dynamically as value pairs to the columns of the internal table `rtab` that has the type `abap_trans_resbind_tab` from the [type pool](ABENTYPE_POOL_GLOSRY.html) ABAP.

Deserialization converts the elementary XML or JSON values to elementary ABAP data types in accordance with the [mappings for built-in ABAP types](ABENABAP_XSLT_ASXML_ELEMENTARY.html) or for [further XML schema data types](ABENABAP_XSLT_ASXML_SCHEMA.html). This can raise the exceptions described there, some of which can be bypassed by using [transformation options](ABAPCALL_TRANSFORMATION_OPTIONS.html).

The case used in the XML or JSON data must match exactly the case in the ABAP runtime framework. If specified statically (`b1`, `b2`, ...), uppercase is used and if specified dynamically in `rtab`, the case used there is used.

When deserializing from a canonical representation, if no corresponding asXML element or asJON object component exists for an ABAP object, the data object retains its previous value. If an empty XML element or an empty JSON array is assigned to an elementary or tabular ABAP data object, the ABAP data object is set to its type-dependent initial value. If an empty XML element or empty JSON object is assigned to a structure, this has the same effect as non-existent elements on the structure components. The structure components retain their previous values. The transformation option [`clear`](ABAPCALL_TRANSFORMATION_OPTIONS.html) with the value *all* can be used to initialize all data objects that have nonexistent or empty elements assigned to them.

In the case of the deserialization of internal tables with non-unique [table keys](ABENITAB_KEY.html), the order of the duplicate lines in relation to these keys is not retained.

When a Simple Transformation is called, deserialization always creates an internal [XML reader](ABENXML_READER_GLOSRY.html) object, which can be addressed using the interface `IF_SXML_READER` from the [sXML Library](ABENABAP_SXML_LIB.html). The object is accessed using attributes of the ST statement [`tt:call-method`](ABENST_TT_CALL-METHOD_STATIC.html).

This addition can be used to bind ABAP data objects `e1 e2 ...` to the parameters `p1 p2 ...` of an [XSL transformation](ABENXSL_TRANSFORMATION_GLOSRY.html) or a [Simple Transformation](ABENSIMPLE_TRANSFORMATION_GLOSRY.html). All elementary data objects and object references are allowed.

Instead of using a static parameter list, the parameters can be specified dynamically as value pairs in the columns of the internal table `ptab` that has one of the following types from the [type pool](ABENTYPE_POOL_GLOSRY.html) ABAP:

**Parameter Passing to XSL Transformations**

The specified parameters must be defined as input parameters in an XSL transformation as follows:

`<xsl:param name="..." sap:type="..." />`

The parameter name must be specified for the attribute `name`. Before a binding can take place, the case used in the XML document must match exactly the case specified in the ABAP runtime framework. If specified statically (`b1`, `b2`, ...), uppercase is used and if specified dynamically in `rtab`, the case used there is used.

For the optional attribute `type`, one of the type names `string`, `number`, `boolean`, `nodeset`, `xstring`, or `object(...)` can be specified, with a global ABAP class specified in parentheses behind `object`. The namespace before `type` must be defined as `xmlns:sap="http://www.sap.com/sapxsl"`, with the prefix `sap` proposed as a convention.

If no type is specified in the transformation, the data types of elementary parameters are mapped to XSL types in accordance with the following table.

If the XSL types shown in the table above are specified explicitly in the XSL transformation, appropriate elementary ABAP parameters must be specified that can be converted to the XSL type:

If a parameter does not match the XSL type, an uncatchable exception is raised. If a parameter defined in the XSL transformation is not passed, it is set to a default value in the transformation. Any specified parameters that are not defined in the XSL transformation are ignored.

Two calls of the following simple transformation:

The result depends on the parameter passed to the transformation.

[XSL Transformations Using Parameters](ABENXSLT_PARAMETERS_ABEXA.html)

**Parameter Passing to ST Programs**

In an ST program, the parameters must be defined as follows as parameters of the main template outside of a template:

`<tt:parameter name="..." [kind="..."]\ \ [[s-val="..."][d-val="..."]]|[val="..."] />`

When an ST program is called, output parameters and input/output parameters are supported as well as input parameters. The type of the parameter is defined using `kind` in the ST program, where *in*, *out*, and *inout* can be specified. *inout* is the default. The `val` attributes can be used to define replacement values.

`CX_TRANSFORMATION_ERROR`

**Subclasses of `CX_ST_ERROR`**

`CX_ST_CALL_ERROR`

`CX_ST_CALL_METHOD_ERROR`

`CX_ST_CONDITION`

`CX_ST_CONSTRAINT_ERROR`

`CX_ST_DESERIALIZATION_ERROR`

`CX_ST_FORMAT_ERROR`

`CX_ST_INVALID_XML`

`CX_ST_MATCH`

`CX_ST_REF_ACCESS`

`CX_ST_RUNTIME_ERROR`

`CX_ST_SERIALIZATION_ERROR`

`CX_ST_VALIDATION_ERROR`

**Subclasses of `CX_XSLT_EXCEPTION`**

`CX_XSLT_ABAP_CALL_ERROR`

`CX_XSLT_DESERIALIZATION_ERROR`

`CX_XSLT_FORMAT_ERROR`

`CX_XSLT_RUNTIME_ERROR`

`CX_XSLT_SERIALIZATION_ERROR`

**Other exception classes**

`CX_SY_STRING_SIZE_TOO_LARGE`

-   from XML to XML (for XSLT only)
-   from XML to JSON (for XSLT and Simple Transformations only)
-   from XML to ABAP (for XSLT and Simple Transformations only)
-   from JSON to XML (for XSLT and Simple Transformations only)
-   from JSON to ABAP
-   from ABAP to XML (for XSLT and Simple Transformations only)
-   from ABAP to JSON
-   from ABAP to ABAP (for XSLT only)

-   The characters *<*, *\>*, *&*, *"*, and *'*, which have a separate meaning in XML syntax, are handled automatically for XML data. When XML data is written, the required XML notation *&lt;*, *&gt;*, *&amp;*, *&quot;*, or *&apos;* is automatically created in values of elements or attributes. When XML data is read, the XML notation is transformed to the corresponding characters. It is not usually necessary to apply the escape character function [`escape`](ABENESCAPE_FUNCTIONS.html) or a similar method to character-like XML results of the statement `CALL TRANSFORMATION` and would produce incorrect results. An exception to this rule is creating HTML data with XSLT if it contains JavaScript parts.
-   When JSON data is written, [special characters](ABENJSON_OVIEW.html) in character-like values are prefixed automatically with the escape character *\\\\*. Conversely, the escape character is removed from character-like values when JSON data is read.
-   When a transformation is performed, methods from the [class libraries for XML](ABENABAP_XML_LIBS.html) are used internally.

-   In the case of XSLT, a [DOM](ABENDOM_GLOSRY.html) is always needed as a source. This DOM is constructed and processed using the [iXML Library for ABAP Cloud](ABENABAP_IXML_LIB_CLOUD.html). In the case of the [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID`, the [iXML Library for ABAP Cloud](ABENABAP_IXML_LIB_CLOUD.html) is used only if the corresponding objects are specified as source or target.

-   The library that is used affects the character set that is supported. The iXML Library supports [UCS-2](ABENUCS2_GLOSRY.html) and the sXML Library supports [UTF](ABENUTF_GLOSRY.html).

-   [Identity transformation](ABENABAP_XSLT_ID.html)
-   [Identity Transformation for JSON](ABENABAP_JSON_TRAFO_ID.html)

-   `trans`
-   If static, the transformation is specified directly as `trans`.
-   `(name)`
-   If dynamic, the transformation is specified as the uppercase content of a parenthesized character-like data object `name`.

-   As a data object with the type `string` or as a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with a [flat](ABENFLAT_GLOSRY.html) character-like line type, which can contain the following data:

-   Character-like [XML](ABENXML_GLOSRY.html) data in XML 1.0 format.
-   Character-like [JSON](ABENJSON_GLOSRY.html) data. When any transformation `trans|(name)` is used, the JSON data is converted to the associated [JSON XML format](ABENJSON_XML_GLOSRY.html) and passed to this transformation. The predefined [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ [`ID`](ABENABAP_JSON_TRAFO_ID.html) handles the JSON data directly.

-   As a data object with the type `xstring` or as a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with a [flat](ABENFLAT_GLOSRY.html) byte-like line type, which can contain the following data:

-   Byte-like representation of the characters in [XML](ABENXML_GLOSRY.html) data in XML 1.0 format, in accordance with a code page such as UTF-8.
-   [XML](ABENXML_GLOSRY.html) data in [Binary XML](ABENBINARY_XML_GLOSRY.html) format.
-   Byte-like representation of the characters in [JSON](ABENJSON_GLOSRY.html) data, in accordance with a code page such as UTF-8. When any transformation `trans|(name)` is used, the JSON data is converted to the associated [JSON XML format](ABENJSON_XML_GLOSRY.html) and passed to this transformation in this way. The predefined [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ [`ID`](ABENABAP_JSON_TRAFO_ID.html) handles the JSON data directly.

-   As an interface reference variable for objects in the [iXML Library for ABAP Cloud](ABENABAP_IXML_LIB_CLOUD.html) (XSLT only):

-   Interface reference variable with the type `IF_IXML_ISTREAM_CORE` that points to an [input stream](ABENABAP_IXML_LIB_C_INPUT_OUTPUT.html) that reads XML data.
-   Interface reference variable with the type `IF_IXML_NODE` that points to a node or an entire XML document in [DOM representation](ABENABAP_IXML_LIB_C_DOM_ACCESS.html).

-   As a reference variable of the type `IF_SXML_READER` for [XML Reader](ABENXML_READER_GLOSRY.html) in the [sXML Library](ABENABAP_SXML_LIB.html). The transformation moves the reader by one node and processes the entire matching subtree. If the transformation is successful, the reader is located at the end of the processed data. Any valid reader can be specified:

-   XML readers for [XML](ABENXML_GLOSRY.html) data in XML 1.0 format.
-   XML readers for [XML](ABENXML_GLOSRY.html) data in [Binary XML](ABENBINARY_XML_GLOSRY.html) format.
-   XOP readers for [XML](ABENXML_GLOSRY.html) data in [XOP](ABENXOP_GLOSRY.html) format.
-   JSON readers for [JSON data](ABENJSON_GLOSRY.html). When any transformation `trans|(name)` is used, the JSON reader returns the JSON data in [JSON-XML](ABENJSON_XML_GLOSRY.html) format. When a predefined [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ [`ID`](ABENABAP_JSON_TRAFO_ID.html) is used, the JSON data is handled directly.

-   The interface `IF_SXML_READER` is part of the API of the [sXML Library](ABENABAP_SXML_LIB.html), whose objects can be accessed using `CALL TRANSFORMATION`.
-   Transformations of XML data in [XOP format](ABENXOP_GLOSRY.html) are only possible with an XOP reader in the sXML Library. All other formats can be also specified in appropriate strings or internal tables.
-   When XML data is specified in strings or internal tables, it is best to use byte strings or byte-like line types and the UTF-8 code page for the representation. If the encoding is defined using a [user-defined transformation](ABENABAP_XSLT_SELF_WRITTEN.html) and the XML data is specified in strings or internal tables, there is no effect on the XML result encoding.
-   The methods `CONVERT` of the interfaces `IF_ABAP_CONV_IN` and `IF_ABAP_CONV_OUT` of objects created using the class `CL_ABAP_CONV_CODEPAGE` can be used to transform character-like XML data or JSON data to a byte-like representation in accordance with a code page and vice versa.
-   The interfaces `IF_IXML_ISTREAM_CORE` and `IF_IXML_NODE` are part of the API of the [iXML Library for ABAP Cloud](ABENABAP_IXML_LIB_CLOUD.html), whose objects can be accessed using `CALL TRANSFORMATION`.

-   As a data object with the type `string`.
-   As a data object with the type `xstring`.
-   As a reference variable of the type `IF_JSON_READER`.

-   When the [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` is called, the ABAP data is either serialized to the [canonical XML format](ABENABAP_XSLT_ASXML.html)\\ [asXML](ABENASXML_GLOSRY.html) or to the [canonical JSON format](ABENABAP_ASJSON.html)\\ [asJSON](ABENASJSON_GLOSRY.html), depending on the target.
-   When an XSLT program is called, the ABAP data is serialized to the [canonical XML representation](ABENABAP_XSLT_ASXML.html), which is then used as the source of the XSL transformation. `bn1 bn2 ...` is used to specify the names of the XML elements that represent the ABAP data objects in the canonical XML representation.
-   When a Simple Transformation is called, the transformation has read-only access to the ABAP data using the names `bn1 bn2 ...`.

-   For deserializations of ABAP data from an XML reader in the sXML Library, see [sXML-Library, Transformation from XML Reader](ABENSXML_TRAFO_FROM_READER_ABEXA.html).

-   As a variable with the type `string` or as a standard table with a flat character-like line type. The XML data returned by the transformation is stored in XML 1.0 format as a character string in the string or in the table. Here, a byte order mark (BOM) is used as a prefix.
-   As a variable with the type `xstring` or as a standard table with a flat byte-like line type. The XML data returned by the transformation is stored in XML 1.0 format as a byte string in the string or table. The byte string represents the characters of the XML data in accordance with the code page UTF-8. A byte order mark (BOM) is not used as a prefix.
-   As an inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable with the type `xstring` is created.
-   As an interface reference variable for objects in the [iXML Library for ABAP Cloud](ABENABAP_IXML_LIB_CLOUD.html) (XSLT only):

-   Interface reference variable with the type `IF_IXML_OSTREAM_CORE` that points to an [output stream](ABENABAP_IXML_LIB_C_INPUT_OUTPUT.html) that writes XML data.
-   Interface reference variable with the type `IF_IXML_DOCUMENT` that points to an [XML document](ABENABAP_IXML_LIB_C_INPUT_OUTPUT.html) in [DOM](ABENDOM_GLOSRY.html) representation.

-   As a reference variable with the type `IF_SXML_WRITER` for [XML](ABENXML_WRITER_GLOSRY.html) writers in the [sXML](ABENABAP_SXML_LIB.html) Library. The result of the transformation is added to the current element of the writer as a subtree. Any valid writer can be specified:

-   XML writers for [XML](ABENXML_GLOSRY.html) data in XML 1.0 format.
-   XML writers for [XML](ABENXML_GLOSRY.html) data in [Binary XML](ABENBINARY_XML_GLOSRY.html) format.
-   XOP writers for [XML](ABENXML_GLOSRY.html) data in [XOP](ABENXOP_GLOSRY.html) format.
-   JSON writers for [JSON](ABENJSON_GLOSRY.html) data. A transformation `trans|(name)` must create XML data in [JSON-XML](ABENJSON_XML_GLOSRY.html) format. The predefined [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ [`ID`](ABENABAP_JSON_TRAFO_ID.html) creates the appropriate data directly.

-   The interface `IF_SXML_WRITER` is part of the API of the [sXML Library](ABENABAP_SXML_LIB.html), whose objects can be accessed using `CALL TRANSFORMATION`.
-   Transformations to formats other than XML 1.0 are only possible with the corresponding writers in the [sXML Library](ABENABAP_SXML_LIB.html).
-   When XML data is stored in strings or internal tables, it is best to use byte strings or byte-like line types and the UTF-8 code page for the representation.
-   XML data that is written to [Unicode systems](ABENUNICODE_SYSTEM_GLOSRY.html) as character-like data cannot be processed as character-like data in a non-Unicode system due to the byte order mark (BOM) that is predefined by the XML standard.
-   The methods `CONVERT` of the interfaces `IF_ABAP_CONV_OUT` and `IF_ABAP_CONV_IN` of objects created using the class `CL_ABAP_CONV_CODEPAGE` can be used to transform character-like XML data or JSON data to a byte-like representation in accordance with a code page.
-   The interfaces `IF_IXML_OSTREAM_CORE` and `IF_IXML_DOCUMENT` are part of the API of the [iXML Library for ABAP Cloud](ABENABAP_IXML_LIB_CLOUD.html), whose objects can be accessed using `CALL TRANSFORMATION`.

-   As a variable with the type `string`.
-   As a variable with the type `xstring`.
-   As a reference variable with the type `IF_JSON_WRITER`.

-   When the [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` is called, the source must either be a [canonical XML representation](ABENABAP_XSLT_ASXML.html) or a [canonical JSON representation](ABENABAP_ASJSON.html) of ABAP data. The canonical representation is deserialized into the ABAP data objects. `bn1 bn2 ...` is used to specify the names of the XML elements that represent the ABAP data objects in the canonical XML representation, and `f1 f2 ...` is used to specify ABAP data objects that are appropriate to the data type into which they are deserialized.
-   When an XSLT program is called, the result of the XSL transformation must represent a [canonical XML representation](ABENABAP_XSLT_ASXML.html) that is deserialized into the ABAP data objects, as with the identity transformation.
-   When a Simple Transformation is called, the transformation performs writes on the ABAP data using the names `bn1 bn2 ...`.

-   For transformations of XML data to the DOM representation in the iXML Library for ABAP Cloud, see [iXML Library, DOM Representation](ABENIXML_C_DOM_ABEXA.html).

-   For transformations of ABAP data to an XML writer in the sXML Library, see [sXML Library, Transformation to XML Writer](ABENSXML_TRAFO_INTO_WRITER_ABEXA.html).
-   For deserializations of missing or empty asXML elements or asJSON object components, see:

-   [Deserializing Missing Elements](ABENABAP_DESERL_NO_ELEM_ABEXA.html)
-   [Deserializing Empty Elements](ABENABAP_DESERL_NO_ELEM_ABEXA.html)

-   For transformations of syntax characters to XML targets, see [Transformation of Syntax Characters](ABENCALL_TRAFO_ESCAPING_ABEXA.html).

-   `abap_trans_parmbind_tab` for specifying strings,
-   `abap_trans_objbind_tab` for specifying object references (for XSLT only),
-   `abap_trans_parm_obj_bind_tab` for specifying data references (for XSLT only).

-   The XSL type `boolean` expects ABAP parameters of the type `c` with the length one. A blank is interpreted as *false* and any other character as *true*.
-   The XSL type `xstring` expects ABAP parameters of the type `x` or `xstring` and the content is represented as hexadecimal.
-   The XSL types `nodeset` and `object` expect an object reference variable that points to an instance of a class. The type `nodeset` expects appropriate object properties.

-   The XSL types `string`, `number`, `boolean`, and `nodeset` are standard XSL types, where `xstring` and `object` represent special SAP enhancements. The type `xstring` enables byte strings to be represented in hexadecimal instead of base 64. The type `object` enables ABAP methods to be called from the XSLT program.

-   *Cause:* Common superclass of all transformation-specific exception classes for `CALL TRANSFORMATION`. The direct subclasses are `CX_ST_ERROR` for Simple Transformations and `CX_XSLT_EXCEPTION` for XSL transformations. When the statement `CALL TRANSFORMATION` is executed, exceptions of the class `CX_TRANSFORMATION_ERROR` and almost all its subclasses can be handled. The resumability of an exception of the subclass `CX_ST_DESERIALIZATION_ERROR` can be defined using the transformation option [`exceptions = 'resumable'`](ABAPCALL_TRANSFORMATION_OPTIONS.html).
-   In addition, the following exceptions may be raised when a transformation is executed:

-   Exceptions like those raised in [mappings from ABAP data types to asXML](ABENABAP_XSLT_ASXML_NAMED.html) cannot be handled directly. These exceptions raise exceptions of the class `CX_TRANSFORMATION_ERROR` (or its subclasses) and can be handled using these.
-   Exceptions raised in ABAP methods called in transformations, such as transformations of objects using the methods [`SERIALIZE_HELPER`](ABENASXML_CLASS_INSTANCES.html) and [`DESERIALIZE_HELPER`](ABENASXML_CLASS_INSTANCES.html) or when [accessing ABAP Objects from ST](ABENST_ABAP_OBJECTS.html), raise exceptions of the class `CX_TRANSFORMATION_ERROR` (or its subclasses), if they are declared in the interface of the method [`RAISING`](ABAPMETHODS_GENERAL.html). The [resumability](ABENRESUMABLE_EXCEPTION_GLOSRY.html) of the original exception is applied here. Non-declared exceptions, on the other hand, raise the exception [`CX_SY_NO_HANDLER`](ABENEXCEPTIONS_PROCEDURES.html), which cannot be handled using `CX_TRANSFORMATION_ERROR` (or its subclasses).
-   The exception `CX_SY_STRING_SIZE_TOO_LARGE` can also occur but does not raise an exception of the class `CX_TRANSFORMATION_ERROR`. It must be handled directly (see below).

-   The attribute `PREVIOUS` of the associated exception object always contains a reference to the original exception. If an exception of this type is not handled, the [short dump](ABENSHORT_DUMP_GLOSRY.html) shows the original exception.

-   *Cause:* Error when calling the transformation

-   *Cause:* Exception in an ABAP method called from the transformation

-   *Cause:* Error in a transformation condition

-   *Cause:* Data object to be serialized or deserialized is too long.

-   *Cause:* Error in the deserialization

-   *Cause:* Format error in a node

-   *Cause:* A serialization would produce invalid XML.

-   *Cause:* Deserialization match failed

-   *Cause:* Error in data node access

-   *Cause:* Error in execution of the transformation

-   *Cause:* Error in the serialization

-   *Cause:* Failed validation with the attribute `xsd-type` in the ST statements [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html), [`tt:write`](ABENST_TT_WRITE.html), or [`tt:read`](ABENST_TT_READ.html). This exception cannot be caught directly.

-   *Cause:* Error when calling an ABAP method from XSLT
    *Runtime error:*\\ `XSLT_METH_ERROR`

-   *Cause:* Error in the deserialization
    *Runtime error:*\\ `XML_NOT_SUPPORTED`

-   *Cause:* Document is not in asXML format
    *Runtime error:*\\ `XML_FORMAT_ERROR`

-   *Cause:* Error in XSLT processor
    *Runtime error:*\\ `UNCAUGHT_EXCEPTION`

-   *Cause:* Error in the serialization
    *Runtime error:*\\ `XML_NOT_SUPPORTED`

-   *Cause:* During a transformation, an operation with a string exceeds its [maximum size](ABENMEMORY_CONSUMPTION_2.html). This exception does not raise an exception of the class `CX_TRANSFORMATION_ERROR` but must be handled directly.
-   It can be handled for all kinds of transformations in the following cases:

-   The target specified behind `RESULT` is of type `xstring` or `string`.
-   The target specified behind `RESULT` is a reference variable that points to an object of the class `CL_SXML_STRING_WRITER`.

-   It cannot be handled in the following cases:
-   In these cases, a runtime error always occurs.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nCALL TRANSFORMATION demo\_st\_parameter SOURCE num = 111 \\n RESULT XML DATA(xml). \\n\\ \\nout->write\_xml( xml ). \\n\\ \\nCALL TRANSFORMATION demo\_st\_parameter SOURCE num = 111 \\n RESULT XML xml \\n PARAMETERS para = 1. \\n\\ \\nout->write\_xml( xml ). \\n\\ \\nout->display( ). **ABAP Data Type** **XSL Parameter Type**\\ `c`, `d`, `n`, `string` `string`\\ `i` (`b`, `s`), `f`, `p` `number`\\ `x`, `xstring` `string`, where the content is represented in [Base 64](ABENBASE64_GLOSRY.html). abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html