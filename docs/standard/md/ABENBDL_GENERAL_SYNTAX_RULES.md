---
title: "ABENBDL_GENERAL_SYNTAX_RULES"
description: |
  ABENBDL_GENERAL_SYNTAX_RULES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_GENERAL_SYNTAX_RULES.htm"
abapFile: "ABENBDL_GENERAL_SYNTAX_RULES.html"
keywords: ["case", "ABENBDL", "GENERAL", "SYNTAX", "RULES"]
---

The general syntax rules for the [RAP BDL](ABENCDS_BDL_GLOSRY.html) for defining [RAP business object](ABENRAP_BO_GLOSRY.html) are as follows:

-   Keywords

-   Keywords must be written in lowercase letters. Uppercase letters are not allowed.

-   Names

-   Names are not case-sensitive.
-   A name must contain at least 1 character but no more than 30 characters.
-   A name can consist of letters, numbers, and underscores (`_`).
-   A name must start with a letter or an underscore.
-   A name of a BDEF component must be unique within the current RAP BO.

-   Comments

-   Two forward slashes (`//`) introduce a comment, which continues until the end of the line.

-   Separators

-   Statements can be closed using a semicolon (`;`). Sometimes this is mandatory.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl\_syntax.html