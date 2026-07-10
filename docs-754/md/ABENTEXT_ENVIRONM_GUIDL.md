---
title: "Text Environment - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environm_guidl.htm"
abapFile: "abentext_environm_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Internationalization](ABENINTERNATIONALIZATION_GUIDL.md) → 

Text Environment

Background

The [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.md "Glossary Entry") is part of the runtime environment of an ABAP program and is made up of a text environment language, a locale, and a system code page. All programs in an [internal session](ABENINTERNAL_SESSION_GLOSRY.md "Glossary Entry") have a common text environment.

By default, the text environment of an internal session is determined by the [logon language](ABENLOGON_LANGUAGE_GLOSRY.md "Glossary Entry") and can be set programmatically by the statement [SET LOCALE LANGUAGE](ABAPSET_LOCALE.md). The current text environment language is contained in the system field sy-langu and is returned by the method GET\_LANGUAGE of the class CL\_ABAP\_SYST.

Rule

If possible, do not switch the text environment within the code

Set the statement [SET LOCALE LANGUAGE](ABAPSET_LOCALE.md) in exceptional cases only, and reverse any text environment switches in good time.

Details

ABAP-coded services usually expect the text environment to be specified by the current user's logon language. The services are not designed to handle text environment switches of internal sessions within the coding.

If the text environment has to be switched for a specific service due to the following exceptions, this must be done only temporarily. This means that a switched text environment must be reset within the same program context to prevent unexpected behavior in other programs within the same internal session.

Exception

Switching the text environment within the code may be necessary in the following cases:

-   Sorting of texts not written in the logon language using [SORT ... AS TEXT](ABAPSORT_ITAB.md) or [CONVERT TEXT](ABAPCONVERT_TEXT.md)

-   For accessing external files

Bad Example

The following source code shows a text environment switch within a method, where the text environment is not reset before exiting the method. This poses the danger of continuing within the wrong text environment after returning from the method.

METHOD ...
   SET LOCALE LANGUAGE ...
   ...
ENDMETHOD.

Good Example

The following source code shows a text environment switch within a method, where the text environment is reset to its original state before exiting the method.

METHOD ...
  DATA env\_lang TYPE tcp0c-langu.
  GET LOCALE LANGUAGE env\_lang.
  SET LOCALE LANGUAGE ...
  ...
  SET LOCALE LANGUAGE env\_lang.
ENDMETHOD.
