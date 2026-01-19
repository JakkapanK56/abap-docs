---
title: "ABENDYN_FILE_SCRTY"
description: |
  ABENDYN_FILE_SCRTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYN_FILE_SCRTY.htm"
abapFile: "ABENDYN_FILE_SCRTY.html"
keywords: ["delete", "if", "case", "method", "class", "data", "ABENDYN", "FILE", "SCRTY"]
---

Physical file names can be specified as the content of a character-like data object in the statements and system class of the [ABAP file interface](ABENFILE_INTERFACE_GLOSRY.html). If some or all of this content originates outside of the calling program, there is a risk that files or file paths are accessed by unauthorized sources (this is known as [directory traversal](ABENDIRECTORY_TRAVERSAL_GLOSRY.html)). The following are potential security risks when using input from outside to access the ABAP file interface:

To act against this security risk, the file names must be validated. This can be a self-programmed validation or the function module `FILE_VALIDATE_NAME` can be used. This function module checks whether a physical file name matches a [logical file name](ABENLOGICAL_FILENAME_GLOSRY.html) or whether it is a valid directory. One prerequisite is that the matching file names or logical paths were created using the transactions `FILE` or `SF01`.

-   A file name used in the statements [`OPEN DATASET`](ABAPOPEN_DATASET.html) and [`DELETE DATASET`](ABAPDELETE_DATASET.html) originates either partly or in full from outside the program.
-   A file name passed to the method `CREATE_UTF8_FILE_WITH_BOM` of the system class `CL_ABAP_FILE_UTILITIES` originates either partly or in full from outside the program.

-   If a program uses logical file names exclusively, instead of physical file names, the physical file names or paths required by the statements are constructed using the function module `FILE_GET_NAME` only. In this case, validation is not usually necessary.
-   Alongside the validation of file names, adequate checks should be made on the authorizations for file access.

abenabap.html abenabap\_reference.html abenabap\_security.html abendynamic\_programming\_scrty.html