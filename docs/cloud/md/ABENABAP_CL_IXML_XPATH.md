---
title: "ABENABAP_CL_IXML_XPATH"
description: |
  ABENABAP_CL_IXML_XPATH - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_CL_IXML_XPATH.htm"
abapFile: "ABENABAP_CL_IXML_XPATH.html"
keywords: ["do", "if", "method", "class", "data", "internal-table", "ABENABAP", "IXML", "XPATH"]
---

The class `CL_IXML_XPATH` provides XPath evaluations only.

Method of interface `IF_IXML_XPATH` that evaluates an XPath expression.

`CL_IXML_XPATH` can be used in ABAP for Cloud Development and Standard ABAP.

The example demonstrates the evaluation of the expression `f1:flight/f1:seat` within a namespace context.

-   `EXPRESSION` of type `STRING`
-   Contains an [XPath](ABENXPATH_REGEX_GLOSRY.html) expression.
-   `NSDECLARATIONS` of type `TT_NSDECLARATION` with the property `OPTIONAL`
-   Internal table whose lines contain information about namespaces. The components of the lines are as follows:

-   `PREFIX`
-   Prefix of a namespace.
-   `URI`
-   URI of a namespace.

-   `RVAL` of type `REF TO if_ixml_xpath`

-   `NODE` of type `REF TO if_ixml_node`
-   `PARAMETERS` of type `sxsltepars` with the property `OPTIONAL`
-   `IDS_ARE_ORDERED` of type `abap_bool`

-   `NODES` of type `REF TO if_ixml_node_collection`

DATA xml\_string TYPE string. \\nDATA xml\_xstring TYPE xstring. \\n\\ \\nxml\_string = \`\` && \\n \`\` && \\n \`83\` && \\n \`\`. \\n\\ \\nCALL TRANSFORMATION id \\n SOURCE XML xml\_string \\n RESULT XML xml\_xstring. \\n\\ \\nFINAL(ixml) = cl\_ixml\_core=>create( ). \\nFINAL(document) = ixml->create\_document( ). \\nFINAL(stream\_factory) = ixml->create\_stream\_factory( ). \\n\\ \\nFINAL(istream) = stream\_factory->create\_istream\_xstring( xml\_xstring ). \\nFINAL(parser) = ixml->create\_parser( document = document \\n istream = istream \\n stream\_factory = stream\_factory ). \\n\\ \\nparser->parse( ). \\n\\ \\nFINAL(xpath) = cl\_ixml\_xpath=>create( expression = 'f1:flight/f1:seat' \\n nsdeclarations = VALUE #( ( \\n prefix = 'f1' \\n uri = 'http://f1.docu/f' ) ) \\n ). \\n\\ \\nFINAL(node\_list) = xpath->evaluate\_expression( node = document ). \\n\\ \\nFINAL(count) = node\_list->get\_length( ). \\nFINAL(node) = node\_list->get\_item( 0 ). \\nFINAL(name) = node->get\_name( ). \\nFINAL(node\_value) = node->get\_value( ). abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html