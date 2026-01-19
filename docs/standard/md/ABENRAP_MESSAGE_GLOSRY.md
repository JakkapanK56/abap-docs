---
title: "ABENRAP_MESSAGE_GLOSRY"
description: |
  ABENRAP_MESSAGE_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRAP_MESSAGE_GLOSRY.htm"
abapFile: "ABENRAP_MESSAGE_GLOSRY.html"
keywords: ["if", "class", "ABENRAP", "MESSAGE", "GLOSRY"]
---

A message that is represented by an instance of a class that implements the interface `IF_ABAP_BEHV_MESSAGE` and is used in [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) implementations.

Each application can create its own classes. For convenience, each [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) contains a predefined local [exception class](ABENEXCEPTION_CLASS_GLOSRY.html)\\ `CL_ABAP_BEHV_MSG` inherited from `CX_NO_CHECK` that implements `IF_ABAP_BEHV_MESSAGE` in a minimalistic way. It can be used for RAP messages as well as for raising [exceptions](ABENEXCEPTION_GLOSRY.html) where appropriate.

ABENRAP\_GLOSSARY.html