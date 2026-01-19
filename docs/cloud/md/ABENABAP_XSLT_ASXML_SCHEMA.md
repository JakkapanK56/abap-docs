---
title: "ABENABAP_XSLT_ASXML_SCHEMA"
description: |
  ABENABAP_XSLT_ASXML_SCHEMA - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_XSLT_ASXML_SCHEMA.htm"
abapFile: "ABENABAP_XSLT_ASXML_SCHEMA.html"
keywords: ["insert", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABENABAP", "XSLT", "ASXML", "SCHEMA"]
---

In addition to the [XML schema data types](http://www.w3.org/TR/xmlschema-2/) required for [mapping elementary ABAP types](ABENABAP_XSLT_ASXML_ELEMENTARY.html), there are additional XML schema data types for which there is no direct equivalent in the form of built-in ABAP types. To enable type-friendly deserialization of these external types to ABAP data objects, a special [DDIC domain](ABENDOMAIN_GLOSRY.html) is implemented in the ABAP Dictionary for each required XML schema data type. The name of the domain starts with `XSD`. Any elementary ABAP data objects whose data type is defined using a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html) that refers to such a DDIC domain are mapped to the associated XML schema data type, both when serialized and when deserialized. The required conversions are performed internally. This applies to both [XSL transformations](ABENABAP_XSLT.html) and [simple transformations](ABENABAP_ST.html).

The following table provides a summary of the XML schema data types supported by domains and additionally supported types (`UUID`, `currCode`, and `unitCode`).

The following sections describe the domains and their mappings in more detail.

The following applies to all domains:

The domain `XSDBOOLEAN` has the data type `CHAR` with length 1 and therefore supports the usual ABAP representation of a [truth value](ABENTRUTH_VALUE_GLOSRY.html) using *X* for true and blank for false. These values are entered as [fixed values](ABENFIXED_VALUE_GLOSRY.html) for the domain and are checked when an ABAP data object linked to this domain is serialized. The serialization creates the values *true* and *false* in XML. A deserialization also accepts the non-canonical XML values *1* and *0*. Any other values raise the exception `CX_SY_CONVERSION_NO_BOOLEAN`. An empty element creates the value blank in deserializations.

The XML schema data type `date` for dates is supported by both the built-in ABAP type [`d`](ABENABAP_XSLT_ASXML_ELEMENTARY.html) and the domain `XSDDATE_D`. This domain has the data type `DATS`. When data is serialized and deserialized, the validity of the date is also checked, which is not the case with the built-in ABAP type `d`. An empty element creates the value *00000000* in deserializations.

By specifying [`noError`](ABENST_OPTION_FORMAT.html) in the attribute [`option`](ABENST_OPTION.html) of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html), an exception for an invalid date in serialization can be prevented again.

The XML schema data type `dateTime` supports the representation of dates and times in a field, based on ISO 8601. An XML value of this type is either in UTC format, contains a time zone, or represents a local time. Five domains are assigned to this schema data type:

Invalid values raise the exception `CX_SY_CONVERSION_NO_DATE_TIME`.

[Time stamp fields with time stamp type](ABENUTCLONG.html) are mapped to the format `yyyy-mm-ddThh:mm:ss.fffffffZ` by default.

Serialization and deserialization of a time stamp field of the type `utclong` and an UTC time stamp in a packed number of the type `XSDDATETIME_LONG_Z`. The generated XML is as follows:

The element `<TS>` and element `<TSP>` can be deserialized in both time stamp fields and in packed numbers of the type `XSDDATETIME_LONG_Z`.

The domain `XSDQNAME` has the data type `STRING`. The XML schema data type `QName` represents qualified names. In XML, a qualified name can have a prefix that is separated by a colon. A prefix of this type must be linked with a URI in a namespace declaration of the current element or a higher-level element. In ABAP, a name of this type is represented as the content of a string in the form *\\{URI\\}name*.

When an ABAP object of the type `XSDQNAME` is serialized, the URI specified in curly brackets is used to create the associated prefix. If there is no namespace declaration for the URI in the right context, it is inserted in the current element, with the resulting namespaces being given the names *n0*, *n1*, ... If the URI is linked with the default namespace, no prefix is created. If no URI is specified in curly brackets, no prefix is created either. This latter case is possible only if the default namespace is not used simultaneously in the current element. Otherwise, the exception `CX_ST_INVALID_XML` is raised, which can occur only in Simple Transformations.

When a value with a prefix is deserialized to an ABAP data object of the type `XSDQNAME`, the URI is searched for in a linked namespace declaration. If no URI is found, the exception `CX_SY_CONVERSION_NO_QNAME` is raised. If a value without prefix is deserialized, the URI of the default namespace is used (if available) or only the name is placed in the string.

An initial data object of the type `XSDQNAME` creates an empty element when serialized and vice versa when deserialized. In both serializations and deserializations, the correctness of the specified name with respect to the valid naming conventions is checked. If violated, an exception of the class `CX_SY_CONVERSION_NO_QNAME` is raised.

The class `CL_ABAP_XSDTYPE_HELPER` contains the methods `TO_XSDQNAME` and `FROM_XSDQNAME` for the conversion of URIs and names to the type `XSDQNAME` and vice versa.

[asXML, Mapping of Qualified Names](ABENASXML_QNAMES_ABEXA.html)

The XML schema data type `time` for times is supported by both the built-in ABAP type [`t`](ABENABAP_XSLT_ASXML_ELEMENTARY.html) and the domain `XSDTIME_T`. This domain has the data type `TIMS`. When data is serialized and deserialized, the validity of the time is also checked, which is not the case with the built-in ABAP type `t`. An empty element creates the value *000000* in deserializations.

Specifying [`noError`](ABENST_OPTION_FORMAT.html) in the attribute [`option`](ABENST_OPTION.html) of the ST statement[`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html) again prevents an exception due to an invalid time in serializations.

The domains have the following meaning:

A serialization creates the hexadecimal XML schema representation from data objects of these types, with hyphens and lowercase letters. Deserializations accept uppercase letters as well. A character-like UUID of type `XSDUUID_CHAR` can contain only uppercase letters in serializations. Invalid UUIDs raise the exception `CX_SY_CONVERSION_NO_UUID`. An empty element creates byte strings or character strings filled with hexadecimal zeros or blanks in deserializations.

UUIDs can be generated in ABAP data objects by the class `CL_SYSTEM_UUID`.

Serialization of a 16-byte [UUID](ABENUUID_GLOSRY.html) in [base64](ABENBASE64_GLOSRY.html) format.

[asXML, Mapping of UUIDs](ABENABAP_XSLT_MAPPING_ABEXA.html)

The domain `XSDLANGUAGE` has the data type [`LANG`](ABENDDIC_BUILTIN_TYPES.html) with length 1. It allows mappings of one-character internal language codes to the associated two-character external ISO codes and vice versa. The rule for the mapping is specified in the columns `SPRAS` (single-character code) and `LAISO` (two-character code) of the database table `T002`. In serializations, the single-character code is searched for in the table `T002` and the associated two-character code is used as an XML value. The opposite happens in deserializations. In deserializations, lowercase letters are transformed to uppercase letters first. If no code is found in the table `T002`, the following relationship is evaluated:

Y = ( X2 - 0x20 ) + ( X1 - 0x20 ) \* ( 0x80 - 0x20 ) + 0xAC00

Here, `Y` is the 16-bit Unicode value of the single-character code and `X1` and `X2` are the 7-bit ASCII values of the two characters in the two-character code.

Specifying [`noError`](ABENST_OPTION_FORMAT.html) in the attribute [`option`](ABENST_OPTION.html) of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html) again prevents an exception due to an unknown language in serializations. In this case, no conversion is performed.

Serializes a language code with transformation ID in accordance with table `T002`.

The domain `XSDCURRCODE` has the data type [`CUKY`](ABENDDIC_BUILTIN_TYPES.html) with length 5. It allows mappings of SAP-specific currency codes to external ISO currency codes and vice versa. The rule for the mapping is specified in the columns `WAERS` (SAP code) and `ISOCD` (ISO code) of the database table `TCURC`. In serializations, the SAP code is searched for in the table `TCURC` and the associated ISO code is used as an XML value and vice versa in deserializations. If a code is not found in the table `TCURC`, the exception `CX_SY_CONVERSION_UNKNOWN_CURR` is raised.

Specifying [`noError`](ABENST_OPTION_FORMAT.html) in the attribute [`option`](ABENST_OPTION.html) of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html) again prevents an exception due to an unknown SAP code in serializations. In this case, no conversion is performed.

Serializes a currency code with transformation in accordance with table `TCURC`.

The domain `XSDUNITCODE` has the data type [`UNIT`](ABENDDIC_BUILTIN_TYPES.html) with length 3. It allows mappings of SAP-specific unit codes to external ISO unit codes and vice versa. The rule for the mapping is specified in the columns `MSEHI` (SAP code) and `ISOCODE` (ISO code) of the database table `T006`. In serializations, the SAP code is searched for in the table `T006` and the associated ISO code is used as an XML value and vice versa in deserializations. If a code is not found in the table `T006`, the exception `CX_SY_CONVERSION_UNKNOWN_UNIT` is raised.

By specifying [`noError`](ABENST_OPTION_FORMAT.html) in the attribute [`option`](ABENST_OPTION.html) of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html), an exception for an unknown SAP code in serialization can be avoided. In this case, no conversion is performed.

Serializes a unit of measurement with transformation in accordance with table `T006`.

The domain `XSDGEO` has the data type [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html). Using the domain `XSDGEO`, it is possible to serialize spatial data in the [Extended Well-Known Binary (EWKB)](ABENDDIC_GEO_DATA.html) representation to the [GeoJSON format](https://datatracker.ietf.org/doc/html/rfc7946) and deserialize spatial data in the GeoJSON format to the EWKB representation.

Serializes the EWKB representation to the GeoJSON format using the transformation ID.

-   in deserializations of an empty XML element in an ABAP data object, which is typed with reference to this type of domain, the initial value of the associated elementary ABAP type is assigned as usual.
-   The transformation option [`initial_components`](ABAPCALL_TRANSFORMATION_OPTIONS.html) for suppressing initial values in serializations has the same effect as for regular data types. This can lead to unexpected behavior in deserializations, if the transformation option [`clear`](ABAPCALL_TRANSFORMATION_OPTIONS.html) is not used with the value *all*.

-   By specifying [`format`](ABENST_OPTION_FORMAT.html) in the attribute [`option`](ABENST_OPTION.html) of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html), many of the formats here can also be applied to ABAP data objects that are not typed with a domain of this type.
-   By specifying [`regime`](ABENST_OPTION_FORMAT.html) in the attribute [`option`](ABENST_OPTION.html) of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html), the effect of the domains shown here is disabled.
-   Exceptions that occur when mapping the domains shown here can in some cases be suppressed by specifying [`noError`](ABENST_OPTION_FORMAT.html) in the attribute [`option`](ABENST_OPTION.html) of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html).
-   Exceptions from mappings cannot be handled directly. Instead, the exception `CX_TRANSFORMATION_ERROR` (or one of its subclasses) from statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html) can be handled. The attribute `PREVIOUS` then contains a reference to the original exception.
-   Apart from `XSDQNAME`, all domains are also supported in [transformations for JSON](ABENABAP_JSON_TRAFOS.html).

-   By specifying [`noError`](ABENST_OPTION_FORMAT.html) in the attribute [`option`](ABENST_OPTION.html) of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html), an exception for invalid ABAP values in serialization can be avoided. All values except blank are then interpreted as true.
-   The transformation option [`initial_components`](ABAPCALL_TRANSFORMATION_OPTIONS.html) suppresses components of type `XSDBOOLEAN` in serializations, if the components contain the value blank for *false*. Therefore, this option should be used carefully.
-   The return value of the Boolean function [`xsdbool`](ABENBOOLE_FUNCTIONS.html) has the type `XSDBOOLEAN`.

-   The domains `XSDDATETIME_Z` and `XSDDATETIME_LONG_Z` have the data types `DEC` with length 15 or 21. `XSDDATETIME_Z` has no decimal places and `XSDDATETIME_LONG_Z` has seven decimal places. These domains support the long and short form of [time stamps in packed numbers](ABENTIME_STAMPS_PACKED.html), which is always interpreted as the current [UTC](ABENUTC_GLOSRY.html) reference time. The serialization generates values in the UTC format (`yyyy-mm-ddThh:mm:ss.fffffffZ`) in XML. Only significant decimal places are written to XML. A deserialization accepts XML values in UTC format (closed by `Z`) or with time zones (closed by `\{+|-\}hh:mm`). The time zones are converted to the associated UTC value. No precision may be lost in deserializations. This means that only XML values with a maximum of seven decimal places can be deserialized. An empty element creates the value 0 in deserializations.
-   The domain `XSDDATETIME_OFFSET` has the data type `CHAR` with length 18. It allows mappings to XML values in which a time zone is specified (`yyyy-mm-ddThh:mm:ss\{+|-\}hh:mm`). The predefined format for an ABAP data object of type `XSDDATETIME_OFFSET` is `yyyymmddhhmmss\{+|-\}mmm`. In a deserialization, the time zone of the XML value specified in hours and minutes is converted to a three-digit number of minutes and vice versa in serializations. An empty element creates a string filled with blanks in deserializations.
-   The domain `XSDDATETIME_LOCAL` has the data type `CHAR` with length 14. The domain `XSDDATETIME_LOCAL_DT` has the data type `NUMC` with length 14. They enable mappings to XML values that specify a local time (`yyyy-mm-ddThh:mm:ss`). This means that they do not exist in UTC format and no time zone is specified. The predefined format for an ABAP data object of type `XSDDATETIME_LOCAL` or `XSDDATETIME_LOCAL_DT` is `yyyymmddhhmmss`. The main differences between the two data types are their initial values. An empty element creates a string filled with blanks or zeros in deserializations.

-   `XSDUUID_RAW` has the data type `RAW` with length 16 for 16-byte [UUIDs](ABENUUID_GLOSRY.html) in binary format.
-   `XSDUUID_CHAR` has the data type `CHAR` with length 32 for 16-byte [UUIDs](ABENUUID_GLOSRY.html) in hexadecimal format.
-   `XSDUUID_BASE64` has the data type `CHAR` with length 22 for 16-byte [UUIDs](ABENUUID_GLOSRY.html) in [base64](ABENBASE64_GLOSRY.html) format.

-   In serializations, an attempt is made to create a two-character code that satisfies this relationship. If this is not possible, the exception `CX_SY_CONVERSION_UNKNOWN_LANGU` is raised.
-   In deserializations, the single-character code is calculated in accordance with this formula. The exception `CX_SY_CONVERSION_UNKNOWN_LANGU` is raised if the XML value is longer than two characters (except when the third character is a hyphen, in which case only the first two characters are used) or if the 7-bit ASCII values of the characters are less than `0x20` or greater than or equal to `0x80`.

-   By specifying the [`format`](ABENST_OPTION_FORMAT.html) value in the [`option`](ABENST_OPTION.html) attribute of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html), the conversion between EWKB and the GeoJSON format is defined. The spatial reference ID (SRID) can be specified as follows:

-   `format(geo=0)` is the same as `format(geometry)`. This is the default spatial reference system.
-   `format(geo=4326)` is the same as `format(geography)` and defines the spatial reference system as WGS 84 standard.
-   `format(geo=3857)` defines the spatial reference system as WGS 84 / Pseudo-Mercator standard.
-   Any available SRID can be used.

-   It is not possible to run a simple transformation in XML mode when using `option` to specify a spatial reference system.
-   If `XSDGEO` is used for conversions with the [transformation ID](ABAPCALL_TRANSFORMATION.html), the SRID must be assigned to the data field. The SRID of the EWKB value must be the same as defined in the annotated value. Otherwise, the exception `CX_XSDGEO_ERROR` is raised. For more information, refer to [DDIC - Spatial Reference System](ABENDDIC_DATABASE_TABLES_SPTLRF.html).
-   The exception `CX_XSDGEO_ERROR` is raised if the EWKB value or the GeoJSON value has a format error.

\\ \\n \\ \\n 2019-04-15T11:22:10.1230000Z\\ \\n 2019-04-15T11:22:10.123Z\\ \\n \\ \\n DATA(ts) = \\n CONV utclong( '2019-04-15 11:22:10,123' ). \\nDATA(tsp) = \\n CONV xsddatetime\_long\_z( cl\_abap\_tstmp=>utclong2tstmp( ts ) ). \\n\\ \\nCALL TRANSFORMATION id \\n SOURCE ts = ts \\n tsp = tsp \\n RESULT XML FINAL(xmlstr). \\n\\ \\nCALL TRANSFORMATION id \\n SOURCE XML xmlstr \\n RESULT ts = ts \\n tsp = ts. \\n\\ \\nCALL TRANSFORMATION id \\n SOURCE XML xmlstr \\n RESULT ts = tsp \\n tsp = tsp. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA uuid TYPE xsduuid\_base64. \\nTRY. \\n uuid = cl\_uuid\_factory=>create\_system\_uuid( )->create\_uuid\_c22( ). \\n CATCH cx\_uuid\_error. \\n ... \\nENDTRY. \\n\\ \\nCALL TRANSFORMATION id SOURCE uuid = uuid \\n RESULT XML FINAL(xml). \\n\\ \\nout->write\_xml( xml ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA language TYPE xsdlanguage VALUE 'x'. \\ncl\_demo\_input=>request( CHANGING field = language ). \\nTRY. \\n CALL TRANSFORMATION id SOURCE language = language \\n RESULT XML FINAL(xml). \\n out->write\_xml( xml ). \\n CATCH cx\_transformation\_error INTO FINAL(exc\_trafo). \\n out->write( exc\_trafo->get\_text( ) ). \\n IF exc\_trafo->previous IS NOT INITIAL. \\n out->write( exc\_trafo->previous->get\_text( ) ). \\n ENDIF. \\nENDTRY. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA currcode TYPE xsdcurrcode VALUE 'EUR'. \\ncl\_demo\_input=>request( CHANGING field = currcode ). \\nTRY. \\n CALL TRANSFORMATION id SOURCE currcode = currcode \\n RESULT XML FINAL(xml). \\n out->write\_xml( xml ). \\n CATCH cx\_transformation\_error INTO FINAL(exc\_trafo). \\n out->write( exc\_trafo->get\_text( ) ). \\n IF exc\_trafo->previous IS NOT INITIAL. \\n out->write( exc\_trafo->previous->get\_text( ) ). \\n ENDIF. \\nENDTRY. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA unitcode TYPE xsdunitcode VALUE 'TON'. \\ncl\_demo\_input=>request( CHANGING field = unitcode ). \\nTRY. \\n CALL TRANSFORMATION id SOURCE unitcode = unitcode \\n RESULT XML FINAL(xml). \\n out->write\_xml( xml ). \\n CATCH cx\_transformation\_error INTO FINAL(exc\_trafo). \\n out->write( exc\_trafo->get\_text( ) ). \\n IF exc\_trafo->previous IS NOT INITIAL. \\n out->write( exc\_trafo->previous->get\_text( ) ). \\n ENDIF. \\nENDTRY. \\n\\ \\nout->display( ). TYPES town TYPE demo\_xsdgeo. \\n\\ \\nFINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(town) = VALUE town( name = 'Walldorf' \\n location = '0101000020E6100000E561A1D634A748400D71AC8BDB482140' ). \\n\\ \\nDATA(json\_writer) = cl\_sxml\_string\_writer=>create( \\n if\_sxml=>co\_xt\_json ). \\n\\ \\nTRY. \\n CALL TRANSFORMATION id \\n SOURCE root = town \\n RESULT XML json\_writer. \\n CATCH cx\_xsdgeo\_error. \\nENDTRY. \\n\\ \\nDATA(geo\_json) = cl\_abap\_codepage=>convert\_from( \\n json\_writer->get\_output( ) ). \\n\\ \\nout->display( geo\_json ). **XML Schema Type** **XML Representation** **Domain** **ABAP Representation**\\ `xsd:boolean` *true*, *false* `XSDBOOLEAN` *X*, blank `xsd:date` *2007-10-01* `XSDDATE_D` *20071001*\\ `xsd:time` *11:55:00* `XSDTIME_T` *115500*\\ `xsd:dateTime` *2006-07-27T17:03:34Z* `XSDDATETIME_Z`, `XSDDATETIME_LONG_Z`, `XSDDATETIME_OFFSET`, `XSDDATETIME_LOCAL`, `XSDDATETIME_LOCAL_DT` *20060727170334*\\ `xsd:QName` *prefix:name* `XSDQNAME` *\\{URI\\}name*\\ `UUID` *00505691‑3e2f‑1ed5‑b8ba‑87b9ac1248c9* `XSDUUID_RAW`, `XSDUUID_CHAR`, `XSDUUID_BASE64` *005056913E2F1ED5B8BA87B9AC1248C9*,\\
*051MaJul7jMukeUvh198oG*\\ `xsd:language` *EN*, *DE* `XSDLANGUAGE` *D*, *E*\\ `currCode` *EUR*, *USD* `XSDCURRCODE` *EUR*, *USD*\\ `unitCode` *KMT*, *SMI* `XSDUNITCODE` *KM*, *MI*\\ `xsd:base64Binary` *AQEAACDmEAAA5WGh1jSnSEANcayL20ghQA==* `XSDGEO` *0101000020E6100000E561A1D634A748400D71AC8BDB482140* abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html