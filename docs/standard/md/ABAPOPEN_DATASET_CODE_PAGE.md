---
title: "ABAPOPEN_DATASET_CODE_PAGE"
description: |
  ABAPOPEN_DATASET_CODE_PAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOPEN_DATASET_CODE_PAGE.htm"
abapFile: "ABAPOPEN_DATASET_CODE_PAGE.html"
keywords: ["delete", "if", "try", "catch", "class", "data", "ABAPOPEN", "DATASET", "CODE", "PAGE"]
---

[Short Reference](ABAPOPEN_DATASET_SHORTREF.html)

`...  CODE PAGE cp ...`

This addition specifies that, when a [legacy file](ABENLEGACY_FILE_GLOSRY.html) is opened, the representation of character-like data objects in the file is based on the code page specified in `cp`. When a character-like data object is written or read, a conversion between this code page and the current character representation is performed, if necessary. If this addition is not specified, the characters in the file are handled in accordance with the non-Unicode code page that would be assigned when reading or writing data in a non-Unicode system (as specified by the entry in the database table `TCP0C` in the current [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html)).

To specify the code page `cp` a character-like data object is expected that must contain, when the statement is executed, the name of a non-Unicode page from the column `CPCODEPAGE` in the database table `TCP00`. Unicode code pages cannot be specified.

Opens legacy text files with the IDs `1101` for 7-Bit USA ASCII and `1102` for 7-Bit German ASCII from the table `TCP00`. When an attempt is made to write a German umlaut character to the open file with the ID `1101`, an exception of the class `CX_SY_CONVERSION_CODEPAGE` is raised. When the character is written to the open file with the ID `1102`, this exception is not raised. See also the example for the addition [`REPLACEMENT CHARACTER`](ABAPOPEN_DATASET_ERROR_HANDLING.html).

-   This addition enables the automatic conversion of file content to the current Unicode character representation [UCS-2](ABENUCS2_GLOSRY.html) when reading and writing files. In this way, files that were stored in any non-Unicode systems can be imported.
-   The statement [`SET DATASET`](ABAPSET_DATASET.html) can be used to specify a different code page for an opened legacy file.
-   The addition `CODE PAGE` replaces the use of the obsolete statement [`TRANSLATE CODE PAGE`](ABAPTRANSLATE.html) in when accessing files.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE string. \\n\\ \\nFINAL(dset) = 'test.dat'. \\n\\ \\nOPEN DATASET dset FOR OUTPUT \\n IN LEGACY TEXT MODE CODE PAGE '1101' \\n MESSAGE msg. \\nTRY. \\n TRANSFER 'ÄaÖöÜü' TO dset. \\n CATCH cx\_sy\_conversion\_codepage INTO DATA(exc). \\n out->write( 'Error writing to 7-Bit USA ASCII' ). \\nENDTRY. \\nCLOSE DATASET dset. \\n\\ \\nOPEN DATASET dset FOR OUTPUT \\n IN LEGACY TEXT MODE CODE PAGE '1102' \\n MESSAGE msg. \\nTRY. \\n TRANSFER 'ÄaÖöÜü' TO dset. \\n CATCH cx\_sy\_conversion\_codepage INTO exc. \\n out->write( 'Error writing to 7-Bit German ASCII' ). \\nENDTRY. \\nCLOSE DATASET dset. \\n\\ \\nDELETE DATASET dset. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html abapopen\_dataset.html abapopen\_dataset\_mode.html