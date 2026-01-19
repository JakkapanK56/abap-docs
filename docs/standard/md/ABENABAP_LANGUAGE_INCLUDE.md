---
title: "ABENABAP_LANGUAGE_INCLUDE"
description: |
  ABENABAP_LANGUAGE_INCLUDE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_LANGUAGE_INCLUDE.htm"
abapFile: "ABENABAP_LANGUAGE_INCLUDE.html"
keywords: ["do", "class", "ABENABAP", "LANGUAGE", "INCLUDE"]
---

Include programs are used to split [ABAP source code](ABENABAP_SOURCE_CODE_GLOSRY.html) into individual [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html). An ABAP program can be created in the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html) using the [program type](ABENPROGRAM_TYPE_GLOSRY.html) include program. Include programs do not need to contain program-initiating statements and cannot be generated independently of the ABAP compiler. Instead, include programs can be included in [compilation units](ABENCOMPILATION_UNIT_GLOSRY.html) using the statement [`INCLUDE`](ABAPINCLUDE_PROG.html).

An include program must contain complete statements. It can include other include programs but it cannot include itself. An include program does not need to contain complete processing blocks.

[Do not use include programs multiple times](ABENMULTIPLE_USE_INCLUDE_GUIDL.html)

-   For the [global declaration part](ABENGLOBAL_DECLARATION_SECT_GLOSRY.html) of an ABAP program, a special [top include](ABENTOP_INCLUDE_GLOSRY.html) is available which is included in the compilation of individual include programs of a program.
-   [Master programs](ABENMASTER_PROGRAM_GLOSRY.html) such as [class pools](ABENCLASS_POOL_GLOSRY.html) or [function pools](ABENFUNCTION_POOL_GLOSRY.html) are automatically organized into include programs by the ABAP Workbench.

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenabap\_language\_includes.html