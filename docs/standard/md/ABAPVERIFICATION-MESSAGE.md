---
title: "ABAPVERIFICATION-MESSAGE"
description: |
  ABAPVERIFICATION-MESSAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPVERIFICATION-MESSAGE.htm"
abapFile: "ABAPVERIFICATION-MESSAGE.html"
keywords: ["if", "try", "class", "data", "ABAPVERIFICATION", "MESSAGE"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

`VERIFICATION-MESSAGE id mess                       [PRIORITY prio]\                       [RESPONSIBLE user]\                       [MAIL mail]\                       [OBJECT type name].`

[1. `... PRIORITY prio`](#ABAP_ADDITION_1@3@)

[2. `... RESPONSIBLE user`](#ABAP_ADDITION_2@3@)

[3. `... MAIL mail`](#ABAP_ADDITION_3@3@)

[4. `... OBJECT type name`](#ABAP_ADDITION_4@3@)

This statement is only intended for use in verification programs of the transaction `SVER`. It sends a verification message to the verification API.

`id` is used to specify an ID for the message of up to 12 characters, and `mess` is used for the message itself.

`prio` is used to specify a priority (1: serious error, 2: error, 3: warning, 4: notification, 5: information).

The constants intended for this purpose from the class `CL_VERI_GENERAL` can also be specified for `prio` instead of literals.

`user` can be used to specify a user who receives the verification message by mail. If no user is specified, the author of the verification program is used.

**Obsolete:**\\ `mail` was previously used to specify a template for the verification message.

`type` and `name` can be used to specify an object from the database table `TADIR` to enable navigation from the log display.

If an entry from `TADIR` is specified using this addition, the verification message is sent to the person specified as responsible in the table `TADIR`, and not to the author of the verification program.

abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abentests\_internal.html