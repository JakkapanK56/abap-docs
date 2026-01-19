---
title: "ABENXSS_SCRTY"
description: |
  ABENXSS_SCRTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENXSS_SCRTY.htm"
abapFile: "ABENXSS_SCRTY.html"
keywords: ["do", "if", "case", "method", "class", "ABENXSS", "SCRTY"]
---

Cross site scripting ([XSS](ABENXSS_GLOSRY.html)) is a way of attacking a Web server using a Web application, for example using a manipulated HTML page displayed in a browser. Cross site scripting is a wide-ranging topic that cannot be covered in full here and ABAP application developers are not usually concerned with creating Web pages directly. These pages are normally wrapped in frameworks such as SAPUI5, Web Dynpro or Web Services and these frameworks are responsible for the necessary security.

An ABAP program is itself responsible for security only in the very rare cases where it is not part of one of these frameworks and generates HTML pages itself, for example directly using [Internet Communication Framework](ABENINTERNET_CON_FRA_GLOSRY.html) (transaction `SICF`). The built-in function [`escape`](ABENESCAPE_FUNCTIONS.html) is most often used to do this. Other escape methods, such as the classes `CL_HTTP_UTILITY`, `CL_HTTP_SERVER`, and `CL_HTTP_CLIENT` are obsolete and should no longer be used.

[Business Server Pages](ABENBUSINESS_SERVER_PAGES_GLOSRY.html) (BSP) are an exception to the rule above: When Business Server Pages are created, ABAP application developers can also be faced with HTML pages and must take the appropriate security precautions. More specifically, the attribute `<htmlb:content forceEncode="ENABLED">` must be set in the `HTMLB` Library and obsolete values such as `CLASSIC` or `DESIGN2002` can no longer be specified in the attribute `design`.

-   The example [String Functions, `escape` for XSS](ABENSTRING_FUNCTION_ESC_XSS_ABEXA.html) demonstrates simple cross site scripting possible when input is not escaped and is used on a generated HTML page.
-   In `CL_DEMO_HTTP_SERVICE`, the class `CL_HTTP_EXT_SERVICE_DEMO` uses the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html) to prevent cross site scripting.

abenabap.html abenabap\_reference.html abenabap\_security.html abendynamic\_programming\_scrty.html