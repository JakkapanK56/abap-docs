---
title: "ABENESCAPE_FUNCTIONS"
description: |
  ABENESCAPE_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENESCAPE_FUNCTIONS.htm"
abapFile: "ABENESCAPE_FUNCTIONS.html"
keywords: ["insert", "do", "if", "case", "method", "class", "data", "ABENESCAPE", "FUNCTIONS"]
---

``... escape( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html) format = format ) ...``

This [built-in function](ABENBUILT_IN_FUNCTIONS.html) returns the content of the character string in [`text`](ABENSTRING_FUNCTIONS_VAL.html), and escapes certain special characters with escape characters according to a rule specified in `format`.

The possible values of `format` are defined as constants with the prefix *E\_* in the class `CL_ABAP_FORMAT`. Each value defines which special characters are replaced, and how. There are rules for special characters in markup languages (XML and HTML), in URIs and URLs, in JSON, as well as in regular expressions and string templates. It is also important to prevent attacks using Cross Site Scripting (XSS) on Web applications.

`format` expects data objects of the type `i`. An invalid value for `format` raises an exception of the class `CX_SY_STRG_PAR_VAL`.

This function can be specified in [general](ABENGENERAL_EXPR_POSITION_GLOSRY.html) and [character-like expression positions](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). The return value has the type `string`.

Formats with *\_JS* in their name are intended for content with JavaScript components. The following table summarizes the replacement rules:

The first column contains the names of the formats from the class `CL_ABAP_FORMAT`. The remaining columns show the escape characters that replace the special characters in the first line. All other characters remain unchanged. *TAB*, *LF*, *CR*, *BS*, and *FF* are the [control characters](ABENCONTROL_CHARACTER_GLOSRY.html) for tabulator, Line Feed, Carriage Return, Backspace, and Form Feed, to which the codes *x09*, *x0A*, *x0D*, *x08*, and *x0C* are assigned in 7-Bit ASCII. *ctrl-char* stands for all [control characters](ABENCONTROL_CHARACTER_GLOSRY.html) with codes less than *x20* that are not covered by those characters listed explicitly. Some of these can be converted to *\\\\xhh*, where *hh* is the hexadecimal value of the code. If there is no value in a field (-), the special character remains unchanged.

The result of the following escaping is *IF a &lt; b*.

[String Functions, `escape` for HTML](ABENSTRING_FUNCTION_ESCAPE_ABEXA.html)

All characters with codes between *x00* and *7F* are converted to *%hh*, except for the characters listed in the following table, where *hh* is the hexadecimal value of the code. In *URI\_1* format, quotation marks are not converted to *%hh*, but are doubled.

All characters with codes from *x80* are converted to their [UTF-8](ABENUTF8_GLOSRY.html) representation. Depending on the character, one to four bytes are represented in the form *%hh*, where *hh* is the hexadecimal value of a byte.

The result of the following escaping is *Numbers%3A%201,%202*.

The special characters *"* and *\\\\* are prefixed with the escape character *\\\\*. [Control characters](ABENCONTROL_CHARACTER_GLOSRY.html) with the codes *x08*, *x09*, *x0A*, *x0C*, and *x0D* are escaped using *\\\\b*, *\\\\t*, *\\\\n*, *\\\\f*, and *\\\\r* respectively. All other characters with codes less than *x20* are converted to a four-character hexadecimal representation and prefixed by *\\\\u*. None of the other characters are affected.

The result of the following escaping is *This is a backslash: \\\\"\\\\\\\\\\\\"*.

There are different formats for the different flavors of [regular expression syntax](ABENREGEX_SYNTAX.html) supported by ABAP. The special characters of regular expressions are prefixed by the associated escape character *\\\\*. [Control characters](ABENCONTROL_CHARACTER_GLOSRY.html) with codes such as *x08*, *x09*, *x0A*, *x0B*, *x0C*, and *x0D* are replaced by the special characters as *\\\\b*, *\\\\t*, *\\\\n*, *\\\\v*, *\\\\f*, and *\\\\r* respectively.

The result of the following escaping is *"\\\\." matches one, "\\\\\*" matches many"*.

The special characters of [string templates](ABENSTRING_TEMPLATES.html) (*|*, *\\\\*, *\\{*, *\\}*) are prefixed by the associated escape character *\\\\*. [Control characters](ABENCONTROL_CHARACTER_GLOSRY.html) with the codes *x09*, *x0A*, and *x0D* are replaced by *\\\\t*, *\\\\n*, and *\\\\r* respectively.

The result of the following escaping is *Special characters: \\\\|, \\\\\\\\\\, \\\\\\\\{, \\\\\\\\}*.

The escaping prevents attacks using Cross Site Scripting ([XSS](ABENXSS_GLOSRY.html)) on Web applications. There are rules for XML/HTML content, JavaScript content, Cascading Style Sheets (CSS), and URL content.

The rules for XSS include all the rules for individual formats and go beyond these. They are particularly distinct from the rules for markup languages, including JavaScript (see above). These extended rules should be used to protect ABAP programs from Cross Site Scripting, when content is constructed from unsafe sources. The transformations listed above are replaced or enhanced as follows:

If the format from the class `CL_ABAP_FORMAT` has the additional ending *\_NU*, all characters with codes greater than *xFF* are converted to a four-character hexadecimal representation, which is identified differently depending on the type of the content. The additional ending *"\_7B"* means 7 bit and also affects characters with codes greater than *xFF*.

The result of the following escaping is *German&#x20;umlauts&#x3a;&#x20;&#x22;&#xe4;&#xf6;&#xfc;&#x22;*.

String Functions, `escape` for XSS

`CX_SY_CONVERSION_CODEPAGE_EX`

`CX_SY_STRG_PAR_VAL`

-   **Markup languages**: Format `E_XSS_ML`. All characters except *\[0-9\]*, *\[a-z\]*, *\[A-Z\]*, *,*, *\-*, *.*, *\_*, and [control characters](ABENCONTROL_CHARACTER_GLOSRY.html) are transformed to *&#xhh;* or *&#xhhhh;*, where *hh* or *hhhh* is the hexadecimal value of the code. All [control characters](ABENCONTROL_CHARACTER_GLOSRY.html) are transformed to *&#xfffd;*.
-   **JavaScript**: Format `E_XSS_JS`. All characters except *\[0-9\]*, *\[a-z\]*, *\[A-Z\]*, *,*, *.*, and *\_* are transformed to *\\\\xhh* or *\\\\uhhhh*, where *hh* or *hhhh* is the hexadecimal value of the code.
-   **URLs and URIs**: Format `E_XSS_URL`. All characters except *\[0-9\]*, *\[a-z\]*, *\[A-Z\]*, *\**, *\-*, *.*, and *\_* are transformed to *%hh*, where *hh* is the hexadecimal value of the code. All characters with codes from x80 are converted to their [UTF-8](ABENUTF8_GLOSRY.html) representation. Depending on the character, one to four bytes are represented in the form *%hh*, where *hh* is the hexadecimal value of a byte.
-   **CSS**: Format `E_XSS_CSS`. All characters except *\[0-9\]*, *\[a-z\]*, and *\[A-Z\]* are transformed to *\\\\hh* or *\\\\hhhh*, where *hh* or *hhhh* is the hexadecimal value of the code. A blank is inserted after *hh* or *hhhh* if the following character is a valid hexadecimal digit.

-   The class `CL_ABAP_DYN_PRG` contains methods `ESCAPE_XSS_...` that wrap calls of the built-in function `escape` with the formats `E_XSS_...`. It is generally advisable to use the built-in function directly.
-   `escape` used with rules for XSS is recommended as protection against cross site scripting, but might not be sufficient in some cases. For example, it may be best to use an include list to check an unsafe URL, so that phishing attacks can be detected in addition to XSS. To completely prevent code injections, JavaScript should never be created dynamically from unsafe sources.

-   *Cause:* A character cannot be converted in a conversion to UTF-8. This can only occur with characters from the [surrogate area](ABENSURROGATE_AREA_GLOSRY.html). The position and code of the character is specified in the exception object.
    *Runtime error:*\\ `CONVT_CHARACTER`

-   *Cause:* Invalid value in `format`.
    *Runtime error:*\\ `STRG_ILLEGAL_PAR`

cl\_demo\_output=>display( \\n escape( val = 'IF a < b.' \\n format = cl\_abap\_format=>e\_xml\_text ) ). cl\_demo\_output=>display( \\n escape( val = 'Numbers: 1, 2' \\n format = cl\_abap\_format=>e\_url\_full ) ). cl\_demo\_output=>display( \\n escape( val = 'This is a backslash: "\\\\"' \\n format = cl\_abap\_format=>e\_json\_string ) ). cl\_demo\_output=>display( \\n escape( val = '"." matches one, "\*" matches many"' \\n format = cl\_abap\_format=>e\_pcre ) ). cl\_demo\_output=>display( \\n escape( val = 'Special characters: |, \\\\, \\{, \\}' \\n format = cl\_abap\_format=>e\_string\_tpl ) ). cl\_demo\_output=>display( \\n escape( val = 'German umlauts: "äöü"' \\n format = cl\_abap\_format=>e\_xss\_ml ) ). **Format** **&** **<** **\>** **"** **'** **TAB** **LF** **CR** **BS** **FF** **\\\\** **ctrl-char** **Format** **Unconverted Characters** `E_XML_TEXT` *&amp;* *&lt;* - - - - - - - - - - `E_XML_ATTR` *&amp;* *&lt;* - *&quot;* *&apos;* *&#9;* *&#xA;* *&#xD;* - - - - `E_XML_ATTR_DQ` *&amp;* *&lt;* - *&quot;* - *&#9;* *&#xA;* *&#xD;* - - - - `E_XML_ATTR_SQ` *&amp;* *&lt;* - - *&apos;* *&#9;* *&#xA;* *&#xD;* - - - - `E_HTML_TEXT` *&amp;* *&lt;* *&gt;* - - - - - - - - - `E_HTML_ATTR` *&amp;* *&lt;* *&gt;* *&quot;* *&#39;* - - - - - - - `E_HTML_ATTR_DQ` *&amp;* *&lt;* *&gt;* *&quot;* - - - - - - - - `E_HTML_ATTR_SQ` *&amp;* *&lt;* *&gt;* - *&#39;* - - - - - - - `E_HTML_JS` - - - *\\\\"* *\\\\'* *\\\\t* *\\\\n* *\\\\r* *\\\\b* *\\\\f* *\\\\\\\\* *\\\\xhh* `E_HTML_JS_HTML` *&amp;* *&lt;* *&gt;* *&quot;* *&#39;* *\\\\t* *\\\\n* *\\\\r* *\\\\b* *\\\\f* *\\\\\\\\* *\\\\xhh* `E_URL` *\[0-9\]*, *\[a-z\]*, *\[A-Z\]*, *!*, *$*, *'*, *(*, *)*, *\**, *+*, *,*, *\-*, *.*, *\_*, *&*, */*, *:*, *;*, *\=*, *?*, *@* `E_URL_FULL` *\[0-9\]*, *\[a-z\]*, *\[A-Z\]*, *!*, *$*, *'*, *(*, *)*, *\**, *+*, *,*, *\-*, *.*, *\_* `E_URI` *\[0-9\]*, *\[a-z\]*, *\[A-Z\]*, *!*, *$*, *'*, *(*, *)*, *\**, *+*, *,*, *\-*, *.*, *\_*, *&*, */*, *:*, *;*, *\=*, *?*, *@*, *~*, *#*, *\[*, *\]* `E_URI_FULL` *\[0-9\]*, *\[a-z\]*, *\[A-Z\]*, *\-*, *.*, *\_*, *~* `E_URI_1` *\[0-9\]*, *\[a-z\]*, *\[A-Z\]*, *!*, *$*, *(*, *)*, *\**, *+*, *,*, *\-*, *.*, *\_*, *;*, *\=*, *@*, *~*, *\[*, *\]* abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenprocess\_functions.html