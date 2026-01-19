---
title: "ABENACCESSIBILITY_GUIDL"
description: |
  ABENACCESSIBILITY_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENACCESSIBILITY_GUIDL.htm"
abapFile: "ABENACCESSIBILITY_GUIDL.html"
keywords: ["select", "if", "class", "ABENACCESSIBILITY", "GUIDL"]
---

Accessibility is a [product standard](ABENCORRECTNESS_QUALITY_GUIDL.html) that ensures that information technology products can also be used by people with impairments. For user interfaces, for instance, this means meeting the needs of visually impaired or blind users in particular. These users usually need a screen reader program, which reads the content of the screen aloud.

**Ensuring Accessibility**

Make sure that your user interfaces are accessible, no matter what interface technology is used, so that they can be used by users with impairments.

Primarily, user interfaces must be designed so that they can be processed by technologies such as screen readers or magnifiers. This means meeting the following requirements:

This is another reason to use the most up-to-date interface technologies, such as SAPUI5, Web Dynpro ABAP or ALV. These automatically only allow accessible interfaces, whereas application developers using older technologies such as classic screens or classic lists are themselves responsible for ensuring that the accessibility requirements are met. There are some checks in the [check tools](ABENCHECK_CORRECTNESS_GDL.html) for classic dynpros and selection screens that report violations of these rules (if they can be identified statically). However, for classic lists such checks are only possible at the time of display.

As regards using the browser control in classic dynpros, we refer here to the class `CL_HTMLTIDY`. This class enables HTML files to be checked for formal correctness and accessibility. It is best to only display HTML files in a browser control if they have been checked by `CL_HTMLTIDY`. The class `CL_ABAP_BROWSER`, which wraps the browser control for simple displays of HTML files, performs a check with `CL_HTMLTIDY` by default.

-   All input and output fields must have meaningful labels.
-   All table columns must have a header.
-   All icons must have a tooltip.
-   Information must not be expressed by color alone.
-   Input and output fields on the screen should be grouped as appropriate in frames, each with a meaningful title.

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenarchitecture\_gdl.html abenuser\_interfaces\_gdl.html