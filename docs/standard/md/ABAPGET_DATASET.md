---
title: "ABAPGET_DATASET"
description: |
  ABAPGET_DATASET - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_DATASET.htm"
abapFile: "ABAPGET_DATASET.html"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "ABAPGET", "DATASET"]
---

[Short Reference](ABAPGET_DATASET_SHORTREF.html)

`GET DATASET dset [POSITION pos]\ [ATTRIBUTES attr].`

[1. `... POSITION pos`](#ABAP_ADDITION_1@3@)

[2. `... ATTRIBUTES attr`](#ABAP_ADDITION_2@3@)

The addition `POSITION` is used by this statement to determine the current position of the file pointer in the file specified in `dset` and the addition `ATTRIBUTES` is used to get additional file attributes.

`dset` expects a character-like data object that contains the [physical name](ABENPHYSICAL_FILENAME_GLOSRY.html) of the file. The file must already be open, otherwise a catchable exception of the class `CX_SY_FILE_OPEN_MODE` is raised.

The statement `GET DATASET` always sets `sy-subrc` to the value 0. This is independent of whether an exception is raised or not.

If no additions are specified, the statement can be used to determine whether the file is open using a [`TRY`](ABAPTRY.html) control structure.

The statement `GET DATASET` raises an exception if the file is not yet open.

This addition assigns the current position of the file pointer to the data object `pos`. The following can be specified for `pos`:

The position is specified in bytes, where the start of the file corresponds to position 0.

The addition `POSITION` cannot be specified for files that have been opened with the addition [`FILTER`](ABAPOPEN_DATASET_OS_ADDITION.html) of the statement `OPEN DATASET`. This raises a catchable exception.

For file sizes greater than 2 GB, a data object `pos` of data type `i` is not sufficient for recording all the possible positions of the file pointer.

After the first literal is saved, the position of the file pointer is assigned to the variable `pos`, which is then used to position the file pointer before the read.

This addition places the attributes used to open the file with the statement `OPEN DATASET` in the data object `attr`. The following can be specified for `attr`:

The data type is defined in the type pool as follows:

`dset_attributes` is a structured type with two substructures: `fixed` and `changeable`. The components of the substructure `fixed` record attributes of the file that cannot be changed using the statement [`SET DATASET`](ABAPSET_DATASET.html) (see **Table 1**). The components of the substructure `changeable` record attributes of the file that can be changed using the statement `SET DATASET` (see **Table 2**).

**Table 1**

**Table 2**

For some of the components, constants are defined in the type pool `DSET` as comparison values.

The determinable attributes do not represent the attributes of the file in the operating system, but the attributes with which the file is opened and according to which it is handled in ABAP.

In this example, the system first checks whether the file `test.dat` was opened using the `FILTER` addition. Only if this is not the case, is the current file position determined using `GET DATASET`.

-   An existing variable of the data type `i` or a variable to which the type `i` can be converted.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type `i` is declared.

-   An existing variable of the data type `dset_attributes` from the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `DSET`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html), where a variable of type `dset_attributes` is declared.

-   `CX_SY_FILE_OPEN_MODE` The file is not open.
-   `CX_SY_FILE_POSITION` The file could not be read because an invalid status exists or the type of file does not allow position specification.
-   `CX_SY_CONVERSION_OVERFLOW` The variable `pos` was assigned a type that is too small to include the current position.

FINAL(dset) = 'test.dat'. \\nTRY. \\n GET DATASET dset. \\n CATCH cx\_sy\_file\_open\_mode. \\n ... \\nENDTRY. DATA msg TYPE string. \\n\\ \\nDATA: file TYPE string VALUE 'test.dat', \\n text TYPE string. \\n\\ \\nOPEN DATASET file FOR OUTPUT IN TEXT MODE \\n ENCODING DEFAULT \\n WITH SMART LINEFEED \\n MESSAGE msg. \\nTRANSFER '1234567890' TO file. \\nGET DATASET file POSITION FINAL(pos). \\nTRANSFER 'ABCDEFGHIJ' TO file. \\nCLOSE DATASET file. \\n\\ \\nOPEN DATASET file FOR INPUT IN TEXT MODE \\n ENCODING DEFAULT \\n WITH SMART LINEFEED \\n AT POSITION pos \\n MESSAGE msg. \\nREAD DATASET file INTO text. \\nCLOSE DATASET file. DATA: dset TYPE string VALUE 'test.dat', \\n pos TYPE i. \\n\\ \\nOPEN DATASET dset FOR INPUT IN BINARY MODE \\n FILTER 'uncompress' \\n MESSAGE FINAL(msg). \\n\\ \\n... \\n\\ \\nGET DATASET dset ATTRIBUTES FINAL(attr). \\nIF attr-fixed-indicator-filter <> 'X'. \\n GET DATASET dset POSITION pos. \\nELSE. \\n ... \\nENDIF. \\n\\ \\nCLOSE DATASET dset. **Component** **Meaning** **Component** **Meaning** `indicator` Structure whose components `mode`, `access_type`, `encoding`, `filter`, and `linefeed` in `attr` contain the value *X* if the identically named components of the structure `fixed` are significant for the current file. `mode` Storage mode. Possible values in `attr` are *T*, *LT*, *B*, and *LB* for [text files](ABENTEXT_FILE_GLOSRY.html), [legacy](ABENLEGACY_FILE_GLOSRY.html) text files, [binary files](ABENBINARY_FILE_GLOSRY.html), and [legacy](ABENLEGACY_FILE_GLOSRY.html) binary files. The associated addition of the statement `OPEN DATASET` is [`IN mode`](ABAPOPEN_DATASET_MODE.html). `access_type` Access mode. Possible values in `attr` are *I*, *O*, *A*, and *U* for files that were opened for reading, writing, appending, and changing. The associated addition of the statement `OPEN DATASET` is [`FOR access`](ABAPOPEN_DATASET_ACCESS.html). `encoding` Character representation. Possible values in `attr` are *NON-UNICODE* and *UTF-8*. The associated addition of the statement `OPEN DATASET` is [`ENCODING \{ DEFAULT | UTF-8 | NON-UNICODE \}`](ABAPOPEN_DATASET_MODE.html). `filter` In `attr`, contains the filter command if the file was opened with the [`FILTER`](ABAPOPEN_DATASET_OS_ADDITION.html) addition of the statement `OPEN DATASET`. `linefeed` Contains the [`end-of-line marker`](ABAPOPEN_DATASET_LINEFEED.html) used when accessing a [text file](ABENTEXT_FILE_GLOSRY.html) or [legacy](ABENLEGACY_FILE_GLOSRY.html) text file. `indicator` Structure whose components `repl_char`, `conv_errors`, `code_page`, `endian`, and `linefeed_mode` contain the value *X* in `attr` if the identically named components of the structure `changeable` are significant for the current file. `repl_char` After the file is opened, this component contains the replacement character in `attr` that was specified using the addition [`REPLACEMENT CHARACTER`](ABAPOPEN_DATASET_ERROR_HANDLING.html) of the statement `OPEN DATASET`. `conv_errors` After the file is opened, this component contains the value *I* in `attr` if it was opened using the addition [`IGNORING CONVERSION ERRORS`](ABAPOPEN_DATASET_ERROR_HANDLING.html) of the statement `OPEN DATASET`, otherwise it contains the value *R*. `code_page` After the file is opened, this component contains the [code page](ABENCODEPAGE_GLOSRY.html) in `attr` that was specified using the addition [`CODE PAGE`](ABAPOPEN_DATASET_MODE.html) of the statement `OPEN DATASET`. If no addition is used, the content of `attr` is initial. `endian` After the file is opened, this component contains the value *B* in `attr` if the addition [`BIG ENDIAN`](ABAPOPEN_DATASET_MODE.html) of the statement `OPEN DATASET` was used or *L* if the addition [`LITTLE ENDIAN`](ABAPOPEN_DATASET_MODE.html) was used. If no addition is used, the content of `attr` is initial. `linefeed_mode` After the file is opened, this component contains one of the values *N*, *S*, *U*, or *W* in `attr` if the corresponding addition [`WITH NATIVE|SMART|UNIX|WINDOWS LINEFEED`](ABAPOPEN_DATASET_LINEFEED.html) of the statement `OPEN DATASET` was used. If none of the additions is used, the content in `attr` is initial. abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html