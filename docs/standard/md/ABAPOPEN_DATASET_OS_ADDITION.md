---
title: "ABAPOPEN_DATASET_OS_ADDITION"
description: |
  ABAPOPEN_DATASET_OS_ADDITION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOPEN_DATASET_OS_ADDITION.htm"
abapFile: "ABAPOPEN_DATASET_OS_ADDITION.html"
keywords: ["update", "do", "while", "if", "catch", "class", "data", "ABAPOPEN", "DATASET", "ADDITION"]
---

[Short Reference](ABAPOPEN_DATASET_SHORTREF.html)

`... [TYPE attr]`\\ 
    `[FILTER opcom] ...`

[1. `... TYPE attr`](#ABAP_ADDITION_1@3@)

[2. `... FILTER opcom`](#ABAP_ADDITION_2@3@)

These additions can be used to make operating system-specific settings and set operating system statements.

The behavior of this addition depends on the operating system of the [host computer server](ABENHOST_COMPUTER_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html). If the operating system is not an `MS` Windows operating system, a character-like field can be specified for `attr` that contains operating system-specific parameters for the file that is to be opened. These parameters are passed to the operating system of the AS instance unchanged, and without being checked for correctness.

If the operating system is an `MS` Windows operating system, and the file is opened as a [text file](ABENTEXT_FILE_GLOSRY.html) or as a [legacy](ABENLEGACY_FILE_GLOSRY.html) text file and the addition [`WITH LINEFEED`](ABAPOPEN_DATASET_LINEFEED.html) is not used, the content of `attr` controls the end-of-line marker of the text file:

All other values of `attr` are ignored in `MS` Windows operating systems, and the end-of-line marker is opened in the same way as described in the addition [`WITH LINEFEED`](ABAPOPEN_DATASET_LINEFEED.html).

Instead of specifying the values *UNIX* or *NT* after `TYPE`, it is best to use the addition [`WITH LINEFEED`](ABAPOPEN_DATASET_LINEFEED.html). If it is used, the values *UNIX* or *NT* cannot be specified.

Creating a file `test.dat`. The properties entered under `TYPE` are specific for the operating system IBM i5/OS (previously OS/400).

This addition can be used if the operating system of the current AS instance [host computer](ABENHOST_COMPUTER_GLOSRY.html) supports pipes (Unix and [MS](ABENHOST_COMPUTER_GLOSRY.html) Windows). A character-like field can be specified for `opcom`, which contains an operating system statement that corresponds to the appropriate command-level syntax.

When the statement [`OPEN DATASET`](ABAPOPEN_DATASET.html) is executed, a process is started in the operating system for the specified statement. When the file is opened for reading, a channel (pipe) is linked with `STDOUT` of the process, from which the data is read during file reading. The file itself is connected to `STDIN` of the process. When the file is opened for writing, a channel (pipe) is connected to `STDIN` of the process, to which data is passed when writing. The output of the process is redirected to this file.

If, as part of the automatic authorization check for file access, the database table `SPTH` is used to make a check using the authorization group and the authorization object `S_PATH`, the current user must have an authorization for the activity *A6* (Read) or *A7* (Change) when using the addition `FILTER`.

The addition `FILTER` must not be used together with the addition [`AT POSITION`](ABAPOPEN_DATASET_POSITION.html) or for the access type [`FOR UPDATE`](ABAPOPEN_DATASET_ACCESS.html).

Using operating system statements that are passed to a program from outside is a serious security risk. Any statements passed to a program from outside must be checked thoroughly before being used. See [System Command Injections](ABENSYS_COMM_INJECTIONS_SCRTY.html).

On a Unix platform, the statement `gzip` is used as a write filter and the statement `gzip -d` is used as a read filter. When the file is accessed for writing the data is compressed, and when it is accessed for reading, the data is decompressed.

-   When working with pipes, it must be ensured that the pipe only exists in the current work process. If the [work process](ABENWORK_PROCESS_GLOSRY.html) is switched while the file is open, the pipe is lost and any attempt to read or write raises a catchable exception of the class `CX_SY_PIPE_REOPEN`.
-   Pipes should only be used for operating system statements required in association with files. No other operating system statements should be used. The [SXPG framework](ABENABAP_SYSTEM_COMMANDS_APPL_SXPG.html) should be used instead. See also [Unwanted Calls of Operating System Statements](ABENABAP_SYSTEM_COMMANDS_APPL_DEPR.html).
-   When the authorization object`S_PATH` is checked, for compatibility reasons an empty value is also accepted for the activity alongside the values *A6* or *A7* if the addition `FILTER` is used.

1.  If `attr` contains the value *NT*, the end-of-line is marked by *CRLF*.
2.  If `attr` contains the value *UNIX*, the end-of-line is marked by *LF*.

OPEN DATASET 'test.dat' \\n TYPE 'lrecl=80, blksize=8000, recfm=FB' \\n FOR OUTPUT IN TEXT MODE \\n ENCODING DEFAULT \\n WITH SMART LINEFEED \\n MESSAGE FINAL(msg). DATA msg TYPE string. \\n\\ \\nDATA file TYPE string VALUE \`/usr/test.Z\`. \\n\\ \\nOPEN DATASET file FOR OUTPUT IN BINARY MODE \\n FILTER 'gzip' \\n MESSAGE msg. \\n... \\nCLOSE DATASET file. \\n\\ \\nOPEN DATASET file FOR INPUT IN BINARY MODE \\n FILTER 'gzip -d' \\n MESSAGE msg. \\n... \\nCLOSE DATASET file. abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html abapopen\_dataset.html