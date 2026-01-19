---
title: "ABENAUTHORIZATION_GROUP_GLOSRY"
description: |
  ABENAUTHORIZATION_GROUP_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAUTHORIZATION_GROUP_GLOSRY.htm"
abapFile: "ABENAUTHORIZATION_GROUP_GLOSRY.html"
keywords: ["do", "if", "data", "ABENAUTHORIZATION", "GROUP", "GLOSRY"]
---

[Program property](ABENPROGRAM_PROPERTY_GLOSRY.html) that allows the combination of different programs into groups for shared [authorization checks](ABENAUTHORIZATION_CHECK_GLOSRY.html). The group name is an [authorization field](ABENAUTHORIZATION_FIELD_GLOSRY.html) of the [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html)\\ `S_PROGRAM`, for which an [authorization check](ABENAUTHORIZATION_CHECK_GLOSRY.html) is performed when an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) is executed using the statement [`SUBMIT`](ABAPSUBMIT.html). This is done to check whether the current [ABAP user](ABENABAP_USER_GLOSRY.html) is authorized to execute the program. All authorization groups should be stored in the database table `TPGP`.

ABENTECHNO\_GLOSSARY.html