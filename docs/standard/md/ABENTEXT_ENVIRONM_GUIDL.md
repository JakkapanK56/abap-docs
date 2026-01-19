---
title: "ABENTEXT_ENVIRONM_GUIDL"
description: |
  ABENTEXT_ENVIRONM_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTEXT_ENVIRONM_GUIDL.htm"
abapFile: "ABENTEXT_ENVIRONM_GUIDL.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENTEXT", "ENVIRONM", "GUIDL"]
---

The [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html) is part of the runtime framework of an ABAP program and is made up of a text environment language, a locale, and a system code page. All programs in an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) have a common text environment.

By default, the text environment of an internal session is determined by the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) and can be set programmatically by the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html). The current text environment language is contained in the system field `sy-langu` and is returned by the method `GET_LANGUAGE` of the class `CL_ABAP_SYST`.

**If possible, do not switch the text environment within the code**

Set the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html) in exceptional cases only, and reverse any text environment switches in good time.

ABAP-coded services usually expect the text environment to be specified by the current user's logon language. The services are not designed to handle text environment switches of internal sessions within the code.

If the text environment has to be switched for a specific service due to the following exceptions, this must be done only temporarily. This means that a switched text environment must be reset within the same program context to prevent unexpected behavior in other programs within the same internal session.

Switching the text environment within the code may be necessary in the following cases:

The following source code shows a text environment switch within a method, where the text environment is not reset before exiting the method. This poses the danger of continuing within the wrong text environment after returning from the method.

The following source code shows a text environment switch within a method, where the text environment is reset to its original state before exiting the method.

-   Sorting of texts not written in the logon language using [`SORT ... AS TEXT`](ABAPSORT_ITAB.html) or [`CONVERT TEXT`](ABAPCONVERT_TEXT.html)
-   For accessing external files

METHOD ... \\n SET LOCALE LANGUAGE ... \\n ... \\nENDMETHOD. METHOD ... \\n DATA env\_lang TYPE tcp0c-langu. \\n GET LOCALE LANGUAGE env\_lang. \\n SET LOCALE LANGUAGE ... \\n ... \\n SET LOCALE LANGUAGE env\_lang. \\nENDMETHOD. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abeninternationalization\_gdl.html