---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENPRED_FUNCTION_MATCHES_ABEXA.htm"
abapFile: "ABENPRED_FUNCTION_MATCHES_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENPRED", "FUNCTION", "MATCHES", "ABEXA"]
---

This example demonstrates the predicate function [`matches`](ABENMATCHES_FUNCTIONS.html).

The class checks the formal correctness of an entered e-mail address by comparing it with regular expressions.

The first regular expression checks for standard e-mail addresses without special characters, whereas the second regular expression performs a more lenient syntax check in accordance with RFC 822.

Even the second check, which uses a relatively simple regular expression for the example, is not always compatible with all e-mail addresses that would be possible in accordance with RFC 822.

The class `CL_DEMO_VALIDATE_RFC_822_ADDR` uses a regular expression taken from the Internet, which is designed to recognize all e-mail addresses allowed by RFC 822. The regular expression here was written originally for Perl and has more than 6000 characters. The class is therefore an example of how not to use regular expressions in ABAP.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_matches DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_matches IMPLEMENTATION. \\n METHOD main. \\n DATA email TYPE string VALUE \`abc.def@ghi.jkl\`. \\n cl\_demo\_input=>new( )->request( CHANGING field = email ). \\n IF matches( val = email \\n regex = \`\\\\w+(\\\\.\\\\w+)\*@(\\\\w+\\\\.)+((\[a-z\]|\[A-Z\])\\{2,4\\})\` ) \\n ##REGEX\_POSIX. \\n out->write( 'Format OK' ). \\n ELSEIF matches( \\n val = email \\n pcre = \`\[\[:alnum:\],!#\\\\$%&'\\\\\*\\\\+/=\\\\?\\\\^\_\`\`\\\\\\\\{\\\\|\\}~-\]+\` & \\n \`(\\\\.\[\[:alnum:\],!#\\\\$%&'\\\\\*\\\\+/=\\\\?\\\\^\_\`\`\\\\\\\\{\\\\|\\}~-\]+)\*\` & \\n \`@\[\[:alnum:\]-\]+(\\\\.\[\[:alnum:\]-\]+)\*\` & \\n \`\\\\.(\[\[:alpha:\]\]\\{2,\\})\` ). \\n out->write( 'Syntax OK but unusual' ). \\n ELSE. \\n out->write( 'Wrong format!' ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_matches DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_matches IMPLEMENTATION. \\n METHOD main. \\n DATA email TYPE string VALUE \`abc.def@ghi.jkl\`. \\n cl\_demo\_input=>new( )->request( CHANGING field = email ). \\n IF matches( val = email \\n regex = \`\\\\w+(\\\\.\\\\w+)\*@(\\\\w+\\\\.)+((\[a-z\]|\[A-Z\])\\{2,4\\})\` ) \\n ##REGEX\_POSIX. \\n out->write( 'Format OK' ). \\n ELSEIF matches( \\n val = email \\n pcre = \`\[\[:alnum:\],!#\\\\$%&'\\\\\*\\\\+/=\\\\?\\\\^\_\`\`\\\\\\\\{\\\\|\\}~-\]+\` & \\n \`(\\\\.\[\[:alnum:\],!#\\\\$%&'\\\\\*\\\\+/=\\\\?\\\\^\_\`\`\\\\\\\\{\\\\|\\}~-\]+)\*\` & \\n \`@\[\[:alnum:\]-\]+(\\\\.\[\[:alnum:\]-\]+)\*\` & \\n \`\\\\.(\[\[:alpha:\]\]\\{2,\\})\` ). \\n out->write( 'Syntax OK but unusual' ). \\n ELSE. \\n out->write( 'Wrong format!' ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html abenpredicate\_functions.html abenpredicate\_functions\_strgs.html