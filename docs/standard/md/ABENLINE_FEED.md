---
title: "Another pattern is"
description: |
  SPLIT text AT rn INTO TABLE DATA(text_table). For doing so, it must be checked If the code pages match. If the code page of the AS ABAP does not match the code page of the control characters in the text, field symbols must be used as shown above to represent the control characters of the
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLINE_FEED.htm"
abapFile: "ABENLINE_FEED.html"
keywords: ["do", "while", "if", "class", "data", "types", "field-symbol", "ABENLINE", "FEED"]
---

A line feed (`LF`) is a [control character](ABENCONTROL_CHARACTER_GLOSRY.html) that positions the cursor when writing an output. Other of such control characters are return (`CR` from carriage return) or a tabulator. There are also combinations possible as `CRLF` for return plus line feed. If a character string contains control characters, it depends on the framework handling the character string how these are interpreted. While, for example, most notepad applications or text editors handle control characters as such, HTML or XML browsers handle control characters as whitespace characters.

In ABAP, some control characters, especially the line feed character, can easily obtained by using the respective [string template](ABENSTRING_TEMPLATES_SEPARATORS.html):

There are also constants for control characters in `CL_ABAP_CHAR_UTILITIES` but those contain the same code as the respective string templates and there is no need to use them any more:

ASSERT cl\_abap\_char\_utilities=>newline        = |\\\\n|. \\nASSERT cl\_abap\_char\_utilities=>horizontal\_tab = |\\\\t|. \\nASSERT cl\_abap\_char\_utilities=>cr\_lf          = |\\\\r\\\\n|.

The actual code of a control character can be determined (as for all characters) as follows:

In an Unicode system this gives *0A00* which is the Unicode code for a line feed.

In another way around, any control character of any code page can be included in a character string, here again the Unicode line feed:

The line feed character and other control characters are needed when sending character strings to frameworks that can handle them. Examples are different output media or writing to files.

The following are examples for line feeds in common output media.

The text control of the [SAP GUI Control Framework](ABENCONTROL_FRAMEWORK_GLOSRY.html) handles control characters.

The first output is:

The second output is:

The first output of `string` handles its content as text and the line feeds are respected. The second output of `string` browses its content as an HTML file and the line feeds are handled as whitespace characters.

The following is an example for line feeds written to a file.

Writing text to a text file of the frontend computer.

Opening the file with a notepad editor shows that the line feeds are handled there. Here, `\\r\\n` is used, since `\\n` is not sufficient in Windows. The [ABAP File Interface](ABENABAP_LANGUAGE_FILES.html) or the above used class `CL_GUI_FRONTEND_SERVICES` offer further capabilities to handle control characters.

The line feed character and other control characters cannot be used in [classic lists](ABENCLASSIC_LIST_GLOSRY.html). The list processor does not recognize a control character and it does not handle it as a whitespace. It is an unknown character that is displayed as `#`. In classic lists, two (chained) [`WRITE`](ABAPWRITE-.html) statements are needed:

WRITE: |aaaa|, / |bbbbb|.

It is a common task to remove line feeds and other control characters from character strings that are received from outside of ABAP.

This can be easily done as follows:

REPLACE ALL OCCURRENCES OF |\\\\n| IN text\_with\_lf WITH \` \`.

Another pattern is

SPLIT text AT |\\\\r\\\\n| INTO TABLE DATA(text\_table).

For doing so, it must be checked If the code pages match. If the code page of the AS ABAP does not match the code page of the control characters in the text, field symbols must be used as shown above to represent the control characters of the code page of the text.

-   `|...\\n...|` for a linefeed among other content
-   `|\\n|` for a single line feed character

FIELD-SYMBOLS TYPE x. \\nDATA lf type c LENGTH 1. \\nlf = |\\\\n|. \\n\\ \\nASSIGN lf to casting. \\ncl\_demo\_output=>display( ). CONSTANTS lf TYPE x LENGTH 4 VALUE '0A00'. \\nFIELD-SYMBOLS TYPE c. \\n\\ \\nASSIGN lf TO CASTING. \\ncl\_demo\_output=>display( |aaa\\{ \\}bbb| ). cl\_demo\_text=>display\_string( \\n || && \\n | | && \\n | Hello!| && \\n | | && \\n || ). \\n\\ \\ncl\_demo\_text=>display\_string( \\n |\\\\n| && \\n | \\\\n| && \\n | Hello!\\\\n| && \\n | \\\\n| && \\n |\\\\n| ). Hello! \\n \\n Hello! \\n \\n FINAL(string) = \\n |\\\\n| && \\n | \\\\n| && \\n | Hello!\\\\n| && \\n | \\\\n| && \\n |\\\\n|. \\n\\ \\ncl\_demo\_output=>new( \\n )->write( string \\n )->write\_html( string \\n )->display( ). TYPES text TYPE TABLE OF string WITH EMPTY KEY. \\n\\ \\nDATA(text) = VALUE text( ( \\n |\\\\r\\\\n| && \\n | \\\\r\\\\n| && \\n | Hello!\\\\r\\\\n| && \\n | \\\\r\\\\n| && \\n |\\\\r\\\\n| ) ). \\n\\ \\ncl\_gui\_frontend\_services=>gui\_download( \\n EXPORTING filename = 'c:\\\\temp\\\\text.htm' \\n CHANGING data\_tab = text ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_oview.html