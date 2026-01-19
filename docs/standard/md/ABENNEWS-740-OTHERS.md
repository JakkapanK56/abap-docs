---
title: "The documentation describing"
description: |
  has been integrated into the ABAP keyword documentation. -   shared objects(ABENABAP_SHARED_OBJECTS.html) -   object services(ABENABAP_OBJECT_SERVICES.html) -   iXML Library(ABENABAP_IXML_LIB.html) -   sXML Library(ABENABAP_SXML_LIB.html) -   logical databases(ABENLDB.html) abenabap.html a
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740-OTHERS.htm"
abapFile: "ABENNEWS-740-OTHERS.html"
keywords: ["do", "if", "method", "class", "data", "ABENNEWS", "740", "OTHERS"]
---

[1\. ABAP Doc](#ABAP_MODIFICATION_1@4@)

[2. Authorization Check in `CALL TRANSACTION`](#ABAP_MODIFICATION_2@4@)

[3\. Enhancement to RTTI](#ABAP_MODIFICATION_3@4@)

[4\. Documentation Moved](#ABAP_MODIFICATION_4@4@)

Special [ABAP Doc comments](ABENABAP_DOC_COMMENT_GLOSRY.html) can be entered in front of [declaration statements](ABENDECLARATION_STATEMENT_GLOSRY.html). These comments are prefixed by `"!`. Tools of an [ABAP development environment](ABENABAP_DEV_ENVIR_GLOSRY.html) that support [ABAP Doc](ABENABAP_DOC_GLOSRY.html), such as [ABAP development tools for Eclipse](ABENADT_GLOSRY.html), analyze the content of ABAP Doc comments, converts it to HTML and display the content in an appropriate way.

The new additions [`WITH AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html) and [`WITHOUT AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html) make it possible to perform or skip an authorization check when executing the statement [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html). This makes the statement `CALL TRANSACTION`\\ [obsolete](ABAPCALL_TRANSACTION_AUTH_OBS.html) if neither of these additions are specified.

The attribute `METHODS` of the object description class `CL_ABAP_OBJECTDESCR` has a new component, `IS_RAISING_EXCPS`, which can be used to determine whether the exception of a method is class-based. Also, the tabular component `EXCEPTIONS` the new component `IS_RESUMABLE`, which can be used to determine whether a class-based exception can be propagated as a resumable exception.

The documentation describing

has been integrated into the ABAP keyword documentation.

-   [shared objects](ABENABAP_SHARED_OBJECTS.html)
-   [object services](ABENABAP_OBJECT_SERVICES.html)
-   [iXML Library](ABENABAP_IXML_LIB.html)
-   [sXML Library](ABENABAP_SXML_LIB.html)
-   [logical databases](ABENLDB.html)

abenabap.html abennews.html abennews-740.html abennews-740\_sp02.html