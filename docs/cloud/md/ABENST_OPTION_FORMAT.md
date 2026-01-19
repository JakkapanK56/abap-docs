---
title: "ABENST_OPTION_FORMAT"
description: |
  ABENST_OPTION_FORMAT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_OPTION_FORMAT.htm"
abapFile: "ABENST_OPTION_FORMAT.html"
keywords: ["insert", "do", "if", "case", "try", "data", "types", "ABENST", "OPTION", "FORMAT"]
---

`... option="[format(fmt)][,decimals(dec)][,regime(num|char|bin)][,noError]"`

[1. `... format(fmt) ...`](#ABAP_ADDITION_1@3@)

[2. `... decimals(dec) ...`](#ABAP_ADDITION_2@3@)

[3. `... regime(num|char|bin) ...`](#ABAP_ADDITION_3@3@)

[4. `... noError ...`](#ABAP_ADDITION_4@3@)

Specifies mapping rules for elementary types.

The `format` option can be used to do the following:

The following table shows the possible formats `fmt`, the ABAP types and representations where they can be used, and the associated XML representations and [JSON](ABENABAP_JSON.html) representations.

The following formats match the XML schema data types listed under [Mapping Additional XML Schema Data Types](ABENABAP_XSLT_ASXML_SCHEMA.html) or other data types. For more details, see

In addition to the time stamp type `utclong`, packed numbers corresponding to the ABAP Dictionary data types `TIMESTAMP` or `TIMESTAMPL` can also be used as ABAP types for `dateTimeOffset` and `dateTimeLocal`. For `dateTimeOffset`, the value 0 is then used for the offset in the XML or JSON representation of time stamps. For `boolean`, `language`, `currCode`, and `unitCode`, `noError` can be specified to prevent an exception being raised in the event of invalid values.

The other formats have the following meaning:

In JSON, the values are produced in accordance with the XML representation, except for `qName`, which is not supported in JSON. In JSON, the format `boolean` creates real [Boolean JSON values](ABENJSON_OVIEW.html).

If the data type or the content do not match of if the current node is typed using [`tt:type`](ABENST_TT_TYPE.html), the option `format` is ignored or an exception is raised.

The option `format` can also be used to map ABAP data objects to XML schema data types that are not typed using a dedicated [domain](ABENABAP_XSLT_ASXML_SCHEMA.html).

[Formatting Options](ABENST_FORMAT_OPTION_ABEXA.html)

The `decimals` option sets the decimal places of numeric values and of time stamps in serializations. It can be applied to all [numeric ABAP types](ABENBUILTIN_TYPES_NUMERIC.html) and to the [time stamp type](ABENTIMESTAMP_TYPE_GLOSRY.html)\\ [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html) and works in mainly the same way as the formatting option [`DECIMALS`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) for [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) in [string templates](ABENSTRING_TEMPLATES.html). The `decimals` option is ignored in deserializations.

Suitable literal integer values can be specified for `dec`. These values can also be negative for numeric types. Only the values 0 to 7 are allowed for the time stamp type `utclong`. If `dec` is not specified (empty parentheses), the option is ignored.

If `decimals` is used for time stamps of the type `utclong`, surplus decimal places are cut off in serializations instead of being rounded and are padded to seven decimal places using zeros. The following applies to [time stamps in packed numbers](ABENTIME_STAMPS_PACKED.html) of the types `TIMESTAMP` and `TIMESTAMPL`:

In these cases, the result of `decimals` must be a valid time stamp.

[Option for Decimal Places](ABENST_DECIMALS_OPTION_ABEXA.html)

The addition `regime` specifies that the ABAP source type in serializations or the ABAP target type in deserializations is overridden by one of the regimes `num`, `char`, or `bin`. `num` specifies numeric handling, `char` specifies character-like handling, and `bin` specifies binary handling of the data by the transformation. The `regime` option deactivates the effect of all [special domains](ABENABAP_XSLT_ASXML_SCHEMA.html), but can be combined with the `format` options, where a `fmt` format specified with `format` must be suitable for handling with `regime` for handling. The `num` regime can also be combined with `decimals`.

The `num`, `char`, and `bin` regimes have the following effect on the possible ABAP types:

[Option for Regime](ABENST_REGIME_OPTION_ABEXA.html)

Prevents exceptions that would be raised in the event of invalid values occurring in serializations of certain ABAP types and with certain formats specified using `format`. The following table shows to which ABAP types and formats `noError` is applied:

[Option for Invalid Values](ABENST_NOERROR_OPTION_ABEXA.html)

-   `format` can be used to specify different formats `fmt`.
-   `decimals` can be used to affect the decimal places of numeric values and of UTC time stamps.
-   `regime` can be used to force numeric, character-like, or byte-like handling.
-   `noError` can be used to prevent exceptions for invalid values for some ABAP types and for some of the formats.

-   Specify formats `fmt` based on XML schema data types to create the corresponding XML representation or JSON representation from ABAP-specific representations of specific elementary values and vice versa.
-   Specify other formats `fmt` to convert ABAP data to framework-specific representations that do not comply with the standard [asXML](ABENABAP_XSLT_ASXML.html) representation and vice versa.

-   `boolean` for truth values
-   `dateTime`, `dateTimeOffset`, `dateTimeLocal` for date/time values
-   `guid` for UUIDs
-   `qName` for qualified names
-   `language` for ISO language codes
-   `currCode` for ISO currency codes
-   `unitCode` for ISO unit codes
-   `geometry`, `geography`, and `geo=SRID` for spatial data

-   The format `hex` means that byte-like content is mapped to a hexadecimal format and not to [base64](ABENBASE64_GLOSRY.html).
-   The format `duration` is based on the XML schema data type with the same name.
-   The formats `ticks` and `ticksOffset` are used for JSON representations of UNIX time stamps (or ticks), which are based on the number of milliseconds since 01.01.1970,00:00:00, for OData. These formats only have special support in JSON. In XML, the regular date format or the associated time stamp formats are used. If `ticksOffset` is used for the UTC time stamp type `utclong` or for packed numbers that correspond to the data types `TIMESTAMP` or `TIMESTAMPL`, the value 0 is used for the offset in the XML or JSON representation.
-   The formats `uri` and `uriFull` mask special characters like the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html) in serializations with the format `E_URI` or `E_URI_FULL`. In deserializations, the escape symbols are transformed to the respective characters.
-   The format `uri1` is used to represent literal values in URIs for OData.

-   Content of the ABAP types `c` and `string` is enclosed in quotation marks. Special characters are handled with the format `E_URI_1`, like the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).
-   Content of the ABAP types `x` and `xstring` is mapped as with the format `hex`. The XML and JSON representations are enclosed in quotation marks and prefixed with `binary`.
-   Content of the ABAP type `t` is mapped as with the format `duration`. The XML and JSON representations are enclosed in quotation marks and prefixed with `time`.
-   Content of time stamp fields of type `utclong` or of packed numbers that have the dictionary types `TIMESTAMP` and `TIMESTAMPL` is mapped in the same way as with the format `datetime`. The XML and JSON representations are enclosed in quotation marks and prefixed with `datetimeoffset`. Colons `:` are replaced by the escape symbols `%3A`. The prefix `datetimeoffset` identifies a UTC time stamp in OData.

-   The format `uri2` is used to represent additional literal values in URIs for OData.

-   Content of the ABAP types `x` with length 16 and `c` with length 32 is mapped as with the format `guid`. The XML and JSON representations are enclosed in quotation marks and prefixed with `guid`.
-   Content of the ABAP type `d` is handled like a corresponding time stamp of dictionary type `TIMESTAMP`, in which the time part has the value *00:00:00*.
-   Content of time stamp fields of type `utclong` or of packed numbers that have the dictionary types `TIMESTAMP` and `TIMESTAMPL` is mapped in the same way as with the format `uri1`. Here, however, the format of a local time stamp with the prefix `datetime` is used.

-   The format `currency=CURRCODE` formats the values of numeric ABAP types in serializations in accordance with a currency code specified in `CURRCODE`. For `CURRCODE`, visible character-like data roots of the ST program with a length no greater than 5 can be specified at this position. If the content of `CURRCODE` is initial, and in deserializations, the format is ignored. The formatting corresponds essentially to the way the function module `CURRENCY_AMOUNT_SAP_TO_IDOC` works.
-   The format `unit=UNITCODE` formats the values of decimal numbers in serializations in accordance with a unit code specified in `UNITCODE`. For `UNITCODE`, visible character-like data roots of the ST program with a length no greater than 3 can be specified at this position. The format is ignored in deserializations.
-   The format `alpha` formats strings like the formatting option [`ALPHA`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) for [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) in [string templates](ABENSTRING_TEMPLATES.html):

-   In serializations, leading zeros are removed as with `alpha = out`.
-   In deserializations, leading zeros are inserted as with `alpha = in`.

-   `decimals` can be combined with the `format` option for these numbers. In this case, the `decimals` option is applied first, then `format` with a `fmt` format provided for time stamps.
-   Packed numbers that are typed with one of the [special domains](ABENABAP_XSLT_ASXML_SCHEMA.html)\\ `XSDDATETIME_...` are first handled with `decimals` and then formatted as time stamps.

-   `num` regime
-   Forces a numeric handling of the current node.

-   Apart from deactivating the effect of [special domains](ABENABAP_XSLT_ASXML_SCHEMA.html), the `num` regime is ignored by [numeric types](ABENBUILTIN_TYPES_NUMERIC.html).
-   All other data types are [converted](ABENCONVERSION_ELEMENTARY.html) to the [`decfloat34`](ABENBUILTIN_TYPES_NUMERIC.html) type before the actual transformation in serializations, and then further processed as such. Source values of types `n`, `d`, and `t` must be valid. In deserializations, a value is created for `decfloat34` and assigned [without loss](ABAPMOVE_EXACT.html) to the target type.

-   `char` regime
-   Forces a character-like handling of the current node.

-   Apart from deactivating the effect of [special domains](ABENABAP_XSLT_ASXML_SCHEMA.html), the `char` regime is ignored by [numeric types](ABENBUILTIN_TYPES_NUMERIC.html), which means that the standard XSD representation of [asXML](ABENABAP_XSLT_ASXML_ELEMENTARY.html) is used.
-   Apart from deactivating the effect of [special domains](ABENABAP_XSLT_ASXML_SCHEMA.html), the `char` regime is ignored by [character-like data types](ABENBUILTIN_TYPES_CHARACTER.html).
-   [Byte-like data types](ABENBUILTIN_TYPES_BYTE.html) are handled as with the formatting option `format(hex)`, that is, representation is in hexadecimal format.
-   [Date and time types](ABENBUILTIN_TYPES_DATE_TIME.html) are handled like the `c` type of corresponding length, with invalid values accepted.

-   `bin` regime
-   Forces a byte-like handling of the current node.

-   [Numeric types](ABENBUILTIN_TYPES_NUMERIC.html) are [converted](ABENNUMERIC_SOURCE_FIELDS.html) to the `xstring` type before the actual transformation in serializations, and further processed as such. In deserializations, a value is created for `xstring` and [converted](ABENBYTE_SOURCE_FIELDS.html) to the target type.
-   Source fields of the [character-like data types](ABENBUILTIN_TYPES_CHARACTER.html)\\ `c` and `string` are [converted](ABENCHARACTER_SOURCE_FIELDS.html)\\ [without loss](ABAPMOVE_EXACT.html) to `xstring` in serializations and then processed further. A source field of type `n` is checked for valid content and also [converted](ABENCONVERSION_TYPE_N.html) to `xstring`. In deserializations, a value is created for `xstring` and [converted](ABENBYTE_SOURCE_FIELDS.html) to the target type. There must be no overflow for type `n`.
-   Apart from deactivating the effect of [special domains](ABENABAP_XSLT_ASXML_SCHEMA.html), the `bin` regime is ignored by [byte-like data types](ABENBUILTIN_TYPES_BYTE.html).
-   Source fields of the [date and time types](ABENBUILTIN_TYPES_DATE_TIME.html) are checked for valid values in serializations, [converted](ABENDATE_TIME_SOURCE_FIELDS.html) to `xstring` and then processed further. The source fields are checked for valid content. In deserializations, a value is created for `xstring` and [converted](ABENBYTE_SOURCE_FIELDS.html) to the target type. There must be no overflow.

**`fmt`** **ABAP Type** **ABAP Representation** **XML Representation** **JSON Representation**\\ `boolean` `c`, length 1 `X`, blank `true`, `false` `true`, `false`\\ `hex` `x`, `xstring` `0123456789ABCDEF` `0123456789ABCDEF` `0123456789ABCDEF`\\ `duration` `t` `125814` `PT12H58M14S` \\ `PT11H24M22S`\\ `dateTime` `utclong`,\\
`TIMESTAMP`,\\
`TIMESTAMPL` `2014-12-12 11:24:22.7717230`,\\
`20141212112422`,\\
`20141212112422.7717230` \\ `2014‑12‑12T11:27:22.7717230Z`,\\
`2014‑12‑12T11:27:22Z`,\\
`2014‑12‑12T11:27:22.771723Z` \\ `2014‑12‑12T11:27:22.7717230Z`,\\
`2014‑12‑12T11:27:22Z`,\\
`2014‑12‑12T11:27:22.771723Z`\\ `dateTimeOffset` `c`, length 18 \\ `20141212113855+180` `2014‑12‑12T11:38:55+03:00` `2014‑12‑12T11:38:55+03:00`\\ `dateTimeOffset` `utclong`,\\
`TIMESTAMP`,\\
`TIMESTAMPL` `2014-12-12 11:24:22.7717230`,\\
`20141212112422`,\\
`20141212112422.7717230` \\ `2014‑12‑12T11:27:22.7717230+00:00`, \\
`2014‑12‑12T11:27:22+00:00`,\\
`2014‑12‑12T11:27:22.771723+00:00` `2014‑12‑12T11:27:22.7717230+00:00`, \\
`2014‑12‑12T11:27:22+00:00`,\\
`2014‑12‑12T11:27:22.771723+00:00`\\ `dateTimeLocal` `c`, length 14 \\ `20141212114245` \\ `2014‑12‑12T11:42:45` `2014‑12‑12T11:42:45`, `dateTimeLocal` `utclong`,\\
`TIMESTAMP`,\\
`TIMESTAMPL` `2014-12-12 11:24:22.7717230`,\\
`20141212112422`,\\
`20141212112422.7717230` \\ `2014‑12‑12T11:42:45.7717230`,\\
`2014‑12‑12T11:42:45`\\
`2014‑12‑12T11:42:45.771723` `2014‑12‑12T11:42:45.7717230`,\\
`2014‑12‑12T11:42:45`,\\
`2014‑12‑12T11:42:45.771723`\\ `ticks` `d` `20141212` `2014‑12‑12` `/Date(1418342400000)/`\\ `ticks` `utclong`,\\
`TIMESTAMP`,\\
`TIMESTAMPL` `2014-12-12 11:50:38.9922080`,\\
`20141212115038`,\\
`20141212115038.9922080` \\ `2014‑12‑12T11:50:38.9922080Z`,\\
`2014‑12‑12T11:50:38Z`,\\
`2014‑12‑12T11:50:38.992208Z` \\ `/Date(1418383462771)/`,\\
`/Date(1418383462000)/`,\\
`/Date(1418383462771)/`\\ `ticksOffset` `c`, length 18 \\ `20141212115254+180` `2014‑12‑12T11:52:54+03:00` \\ `/Date(1418383462000+0180)/`\\ `ticksOffset` `utclong`,\\
`TIMESTAMP`,\\
`TIMESTAMPL` `2014-12-12 11:24:22.7717230`,\\
`20141212112422`,\\
`20141212112422.7717230` \\ `2014‑12‑12T11:27:22.7717230+00:00`,\\
`2014‑12‑12T11:27:22+00:00`,\\
`2014‑12‑12T11:27:22.771723+00:00` \\ `/Date(1418383462771+0000)/`,\\
`/Date(1418383462000+0000)/`,\\
`/Date(1418383462771+0000)/`\\ `guid` `x`, length 16; `c`, length 32,\\
`c`, length 22 `0050569181751ED4A0BED3E86422E104`, \\
`051MaO5r7jIWljFeP2BX10` `00505691‑8175‑1ed4‑a0be‑d3e86422e104` \\ `00505691‑8175‑1ed4‑a0be‑d3e86422e104`\\ `qName` `string` `\{uri\}name` `<... xmlns:...="uri">...:name</...>` `\{uri\}name`\\ `uri` `c`, `string` `:;<=>?[\\]^_``\{|\}~` `:;%3C=%3E?[%5C]%5E_%60%7B%7C%7D~` \\ `:;%3C=%3E?[%5C]%5E_%60%7B%7C%7D~`\\ `uriFull` `c`, `string` `:;<=>?[\\]^_``\{|\}~` `%3A%3B%3C%3D%3E%3F%5B%5C%5D%5E_%60%7B%7C%7D~` \\ `%3A%3B%3C%3D%3E%3F%5B%5C%5D%5E_%60%7B%7C%7D~`\\ `uri1` `c`, `string` `Rock'n'Roll & Blues` `'Rock''n''Roll%20%26%20Blues'` `'Rock''n''Roll%20%26%20Blues'`\\ `uri1` `x`, `xstring` `0123456789ABCDEF` `binary'0123456789ABCDEF'` `binary'0123456789ABCDEF'`\\ `uri1` `t` `125814` `time'PT12H58M14S'` `time'PT12H58M14S'`\\ `uri1` `utclong`,\\
`TIMESTAMP`,\\
`TIMESTAMPL` `2014-12-12 11:24:22.7717230`, \\
`20141212112422`,\\
`20141212112422.7717230` `datetimeoffset'2014‑12‑12T11%3A27%3A22.7717230Z'`,\\
`datetimeoffset'2014‑12‑12T11%3A27%3A22Z'`,\\
`datetimeoffset'2014‑12‑12T11%3A27%3A22.771723Z'` `datetimeoffset'2014‑12‑12T11%3A27%3A22.7717230Z'`,\\
`datetimeoffset'2014‑12‑12T11%3A27%3A22Z'`,\\
`datetimeoffset'2014‑12‑12T11%3A27%3A22.771723Z'`\\ `uri2` `x`, length 16; `c`, length 32 `0050569181751ED4A0BED3E86422E104` `guid'00505691‑8175‑1ed4‑a0be‑d3e86422e104'` `guid'00505691‑8175‑1ed4‑a0be‑d3e86422e104'`\\ `uri2` `d` `20141212` `datetime'2014‑12‑12T00%3A00%3A00'` `datetime'2014‑12‑12T00%3A00%3A00'`\\ `uri2` `utclong`,\\
`TIMESTAMP`,\\
`TIMESTAMPL` `2014-12-12 11:24:22.7717230`, \\
`20141212112422`,\\
`20141212112422.7717230` `datetime'2014‑12‑12T11%3A27%3A22.7717230'`,\\
`datetime'2014‑12‑12T11%3A27%3A22'`,\\
`datetime'2014‑12‑12T11%3A27%3A22.771723'` `datetime'2014‑12‑12T11%3A27%3A22.7717230'`,\\
`datetime'2014‑12‑12T11%3A27%3A22'`,\\
`datetime'2014‑12‑12T11%3A27%3A22.771723'`\\ `language` `c`, length 1 `E`, `D`, ... `EN`, `DE`, ... `EN`, `DE`, ... `currCode` `c`, length 5 `EUR`, `USD`, ... `EUR`, `USD`, ... `EUR`, `USD`, ... `unitCode` `c`, length 3 `KM`, `MI`, ... `KMT`, `SMI`, ... `KMT`, `SMI`, ... `currency=CURRCODE` [Numeric types](ABENBUILTIN_TYPES_NUMERIC.html) `123456`,\\
`123,456` `123456`,\\
`123,456` `123456`,\\
`123,456` \\ `unit=UNITCODE` `p`, `decfloat16`, `decfloat34` `123,000`,\\
`123,456` `123`,\\
`123,456` `123`,\\
`123,456`\\ `alpha` `c`, `string`, `n` `0000123456` `123456` `123456`\\ `geometry`,\\
`geography`,\\
`geo=SRID` `xstring` `010100002000000000E561A1D634A748400D71AC8BDB482140`,\\
`0101000020E6100000E561A1D634A748400D71AC8BDB482140`,\\
... `AQEAACAAAAAA5WGh1jSnSEANcayL20ghQA==`,\\
`AQEAACDmEAAA5WGh1jSnSEANcayL20ghQA==`,\\
... `\{"type":"Point","coordinates":[49.3063,8.6423]\}` **Type** **Format** **Effect**\\ [`n`](ABENABAP_XSLT_ASXML_ELEMENTARY.html) - Leading and trailing blanks are ignored. [`p`](ABENABAP_XSLT_ASXML_ELEMENTARY.html) - An invalid value in the final byte is ignored and interpreted as a plus sign. [`XSDBOOLEAN`](ABENABAP_XSLT_ASXML_SCHEMA.html) `boolean` Other values apart from *X* and blank are accepted and return `true`. [`XSDDATE_D`](ABENABAP_XSLT_ASXML_SCHEMA.html) - Invalid dates are accepted and formatted as a date. [`XSDTIME_T`](ABENABAP_XSLT_ASXML_SCHEMA.html) - Invalid times are accepted and formatted as a time. [`XSDLANGUAGE`](ABENABAP_XSLT_ASXML_SCHEMA.html) `language` An invalid language is accepted with no conversion taking place. [`XSDCURRCODE`](ABENABAP_XSLT_ASXML_SCHEMA.html) `currCode` An invalid currency code is ignored with no conversion taking place. [`XSDUNITCODE`](ABENABAP_XSLT_ASXML_SCHEMA.html) `unitCode` An invalid unit key is ignored with no transformation taking place. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html abenst\_tt\_value\_elementary.html abenst\_option.html