---
title: "ABENICF_MIME_PICTURES_ABEXA"
description: |
  ABENICF_MIME_PICTURES_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENICF_MIME_PICTURES_ABEXA.htm"
abapFile: "ABENICF_MIME_PICTURES_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENICF", "MIME", "PICTURES", "ABEXA"]
---

This example demonstrates how the MIME repository is accessed using a HTTP service in [ICF](ABENICF_GLOSRY.html).

If a path to a HTTP service from ICF is constructed in the same way in transaction `SICF` as the path to a MIME repository node and the handler class `CL_HTTP_EXT_WEBDAV_PUBLIC` is assigned to the service, the service can be used to access the MIME objects of this node directly.

The example contains the node `/sap/public/bc/abap/mime_demo` in both the transaction `SICF` and in the MIME repository. The image `ABAP_Docu_Logo.gif` is saved in the MIME repository under this node. The handler class `CL_HTTP_EXT_WEBDAV_PUBLIC` is assigned to the ICF node. The name of the image can be added to the URL of the service and used to access the image directly.

See also the [executable example](ABENMIME_PICTURES_ABEXA.html) for accessing objects from the `MIME` repository using the associated API.

\* Public class definition \\nCLASS cl\_demo\_picture\_from\_mime DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA icf\_node TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_picture\_from\_mime IMPLEMENTATION. \\n METHOD main. \\n\\ \\n IF icf\_node IS INITIAL. \\n RETURN. \\n ENDIF. \\n\\ \\n out->write\_html( \\n \`\` && \\n \`Picture from MIME Repository
\` && \\n \`![](` && icf_node \n                    && `/ABAP_Docu_Logo.gif?sap-client=` \n                    && sy-mandt \n                    && `)\` && \\n \`\` ). \\n\\ \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n CONSTANTS path TYPE string VALUE \`/sap/public/bc/abap/mime\_demo\`. \\n FINAL(location) = \\n cl\_http\_server=>get\_location( application = path ). \\n IF location IS NOT INITIAL. \\n icf\_node = location && path. \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_picture\_from\_mime DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA icf\_node TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_picture\_from\_mime IMPLEMENTATION. \\n METHOD main. \\n\\ \\n IF icf\_node IS INITIAL. \\n RETURN. \\n ENDIF. \\n\\ \\n out->write\_html( \\n \`\` && \\n \`Picture from MIME Repository
\` && \\n \`![](` && icf_node \n                    && `/ABAP_Docu_Logo.gif?sap-client=` \n                    && sy-mandt \n                    && `)\` && \\n \`\` ). \\n\\ \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n CONSTANTS path TYPE string VALUE \`/sap/public/bc/abap/mime\_demo\`. \\n FINAL(location) = \\n cl\_http\_server=>get\_location( application = path ). \\n IF location IS NOT INITIAL. \\n icf\_node = location && path. \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenicf.html