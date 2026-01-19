---
title: "ABENIMPORT_TEXT_LANGUAGE"
description: |
  ABENIMPORT_TEXT_LANGUAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENIMPORT_TEXT_LANGUAGE.htm"
abapFile: "ABENIMPORT_TEXT_LANGUAGE.html"
keywords: ["select", "do", "if", "case", "data", "types", "internal-table", "ABENIMPORT", "TEXT", "LANGUAGE"]
---

The rule described in this section is relevant only in cases where structures defined in the ABAP Dictionary in a [Unicode system](ABENUNICODE_SYSTEM_GLOSRY.html) are imported from the database and these same structures were exported in an [MDMP system](ABENMDMP-SYSTEM_GLOSRY.html), and vice versa.

Character-like data can be stored in an MDMP system encoded using different [code pages](ABENCODEPAGE_GLOSRY.html). The character set ID stored in [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html) is therefore not sufficient. For this reason, the statement [`IMPORT FROM DATABASE`](ABAPIMPORT_MEDIUM.html) is used for evaluating the [text language](ABENTEXT_LANGUAGE_GLOSRY.html) of database tables or structures defined in the ABAP Dictionary.

The following hierarchy applies to assignments of the text language to a structure:

When importing from structures stored in the database, the text language determines the code page used to handle the character-like components of a structure as follows:

Structures and internal tables with a structured line type that is based on types defined in the ABAP program do not have a text language. The character set ID stored during export is always used for these.

-   Importing MDMP data into a Unicode system
-   The code page of the imported data is determined using the text language from the database tables `TCP0C` (table of [text environments](ABENTEXT_ENVIRONMENT_GLOSRY.html)) and `TCP0D` (localization of the database). If no text language component is available, the character set ID stored during export is used.
-   This rule assumes that the Unicode system has resulted from the conversion of an MDMP system. In other cases, this may lead to conversion errors.
-   Importing Unicode data into a MDMP system
-   The imported data is handled according to the assignment of languages to code pages defined in the MDMP system, depending on the text language. If no text language component is available, the current [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html) is used.

1.  A component that is labeled as a text language in a substructure or table-like component with a structured row type is only valid for this substructure or internal table.
2.  A component labeled as a text language in a superordinate structure applies to this structure and to all other structures or table-like components nested in it, which do not have any components of their own that can be identified as a text language.
3.  If a component labeled as a text language is among the freely selectable components of the [export/import tables](ABENEXPORT_IMPORT_TABLE_GLOSRY.html) in which the data is stored, this determines the text language for all elementary fields, structures, and internal tables in the corresponding data cluster that do not have their own text language.

abenabap.html abenabap\_reference.html abendata\_cluster.html abapimport\_data\_cluster.html