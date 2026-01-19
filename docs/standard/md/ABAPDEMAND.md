---
title: "ABAPDEMAND"
description: |
  ABAPDEMAND - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDEMAND.htm"
abapFile: "ABAPDEMAND.html"
keywords: ["if", "class", "data", "internal-table", "ABAPDEMAND"]
---

[Short Reference](ABAPDEMAND_SHORTREF.html)

`DEMAND val1 = f1 val2 = f2 ...         FROM CONTEXT context_ref         [MESSAGES INTO itab].`

[`... MESSAGES INTO itab`](#ABAP_ONE_ADD@1@)

This statement assigns the values of derived fields `val1 val2 ...` of a [context](ABENCONTEXT_GLOSRY.html) instance to the data objects `f1 f2 ...`. `context_ref` expects a data object that points to a context instance (see [`CONTEXTS`](ABAPCONTEXTS.html)). The names of derived fields of the corresponding context can be specified for `val1 val2 ...`. `f1 f2 ...` expects data objects whose data type matches the corresponding context field `val1 val2 ...`.

If the context instance contains valid derived values for the current key, these are assigned directly. Otherwise, the cross-transaction [buffer](ABENCONTEXT_BUFFER.html) of the context is searched for the corresponding data record, which is then passed to the context instance and from there to the data objects `f1 f2 ...`. Only if no corresponding data is found here, are the values in the modules of the context derived and placed in the buffer, the context instance, and the data objects `f1 f2 ...`.

If not all required values can be derived since not enough key fields are known, processing is terminated, the derived values are initialized, and the module sends the [message](ABENMESSAGE_GLOSRY.html) specified in the context for this purpose.

The structured type `context_t_con` created using `CONTEXTS` can be used to create suitable fields.

The addition `MESSAGES` is used for handling any messages sent by the modules of a context. If the addition `MESSAGES` is not specified, each message is sent in accordance with its definition in the context, as described under [Messages](ABENABAP_MESSAGES.html). If the addition `MESSAGES` is specified, the messages are not sent. Instead, for each message, a line is appended to the internal table `itab` to be specified after `INTO`. The line type of the internal table must refer to the structure `SYMSG` in the ABAP Dictionary. The columns `msgty`, `msgid`, `msgno`, and `msgv1` to `msgv4` contain the message type, message class, message number, and content of any placeholders. The internal table `itab` is initialized at the start of the statement `DEMAND`.

Creates an instance of the context `demo_travel`, fills the key fields, and requests the derived values.

CONTEXTS demo\_travel. \\n\\ \\nPARAMETERS: p\_carrid TYPE context\_t\_demo\_travel-carrid, \\n p\_connid TYPE context\_t\_demo\_travel-connid. \\n\\ \\nDATA: context\_ref TYPE context\_demo\_travel, \\n fields TYPE context\_t\_demo\_travel. \\n\\ \\nSUPPLY carrid = p\_carrid \\n connid = p\_connid \\n TO CONTEXT context\_ref. \\n\\ \\nDEMAND cityfrom = fields-cityfrom \\n cityto = fields-cityto \\n fltime = fields-fltime \\n FROM CONTEXT context\_ref. \\n\\ \\ncl\_demo\_output=>display\_text( |\\{ fields-cityfrom \\} \\{ \\n fields-cityto \\} \\{ \\n fields-fltime \\}| ). `**sy-subrc**` **Meaning** 0 The addition `MESSAGES` is not specified or the internal table specified after `MESSAGES` is empty Not 0 The internal table specified after `MESSAGES` contains messages. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abencontext.html