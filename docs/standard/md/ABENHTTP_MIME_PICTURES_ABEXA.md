---
title: "ABENHTTP_MIME_PICTURES_ABEXA"
description: |
  ABENHTTP_MIME_PICTURES_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENHTTP_MIME_PICTURES_ABEXA.htm"
abapFile: "ABENHTTP_MIME_PICTURES_ABEXA.html"
keywords: ["if", "method", "class", "data", "ABENHTTP", "MIME", "PICTURES", "ABEXA"]
---

This example demonstrates how the MIME repository is accessed using an HTTP service in [ICF](ABENICF_GLOSRY.html).

The HTTP service `/sap/bc/abap/demo_mime` can be called with different content of the form field `mime_access` of the URL:

-   If the form field has the value *icf*, the handler class `CL_HTTP_EXT_MIME_DEMO` creates an HTML file. This file points to an image in the `MIME` repository (as described in a different executable [example](ABENICF_MIME_PICTURES_ABEXA.html)).
-   If the form field has the value *api*, the handler class `CL_HTTP_EXT_MIME_DEMO` creates the HTML file and also the image that is referenced in the HTML file. The image is loaded and forwarded using MIME API.

\* Public class definition \\nCLASS cl\_demo\_http\_mime DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA icf\_node TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_http\_mime IMPLEMENTATION. \\n METHOD main. \\n IF icf\_node IS INITIAL. \\n RETURN. \\n ENDIF. \\n\\ \\n FINAL(url) = icf\_node \\n && \`?sap-client=\` \\n && sy-mandt \\n && \`&sap-language=\` \\n && cl\_i18n\_languages=>sap1\_to\_sap2( sy-langu ). \\n FINAL(url\_icf) = url && \`&mime\_access=icf\`. \\n FINAL(url\_api) = url && \`&mime\_access=api\`. \\n\\ \\n out->write\_html( \\n || && \\n || && \\n |Link to HTTP-Service getting picture from ICF:
| && \\n |[\\{ \\n url\_icf \\}](\{ url_icf \})
| && \\n |Link to HTTP-Service getting picture from API:
| && \\n |[\\{ \\n url\_api \\}](\{ url_api \})
| && \\n || && \\n || ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n CONSTANTS path TYPE string VALUE \`/sap/bc/abap/demo\_mime\`. \\n FINAL(location) = \\n cl\_http\_server=>get\_location( application = path ). \\n IF location IS NOT INITIAL. \\n icf\_node = location && path. \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_http\_mime DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA icf\_node TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_http\_mime IMPLEMENTATION. \\n METHOD main. \\n IF icf\_node IS INITIAL. \\n RETURN. \\n ENDIF. \\n\\ \\n FINAL(url) = icf\_node \\n && \`?sap-client=\` \\n && sy-mandt \\n && \`&sap-language=\` \\n && cl\_i18n\_languages=>sap1\_to\_sap2( sy-langu ). \\n FINAL(url\_icf) = url && \`&mime\_access=icf\`. \\n FINAL(url\_api) = url && \`&mime\_access=api\`. \\n\\ \\n out->write\_html( \\n || && \\n || && \\n |Link to HTTP-Service getting picture from ICF:
| && \\n |[\\{ \\n url\_icf \\}](\{ url_icf \})
| && \\n |Link to HTTP-Service getting picture from API:
| && \\n |[\\{ \\n url\_api \\}](\{ url_api \})
| && \\n || && \\n || ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n CONSTANTS path TYPE string VALUE \`/sap/bc/abap/demo\_mime\`. \\n FINAL(location) = \\n cl\_http\_server=>get\_location( application = path ). \\n IF location IS NOT INITIAL. \\n icf\_node = location && path. \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenicf.html