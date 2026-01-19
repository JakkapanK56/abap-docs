---
title: "ABAPSUPPLY"
description: |
  ABAPSUPPLY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSUPPLY.htm"
abapFile: "ABAPSUPPLY.html"
keywords: ["if", "data", "ABAPSUPPLY"]
---

[Short Reference](ABAPSUPPLY_SHORTREF.html)

`SUPPLY key1 = f1 key2 = f2 ... TO CONTEXT context_ref.`

This statement fills the key fields `key1 key2 ...` of a [context](ABENCONTEXT_GLOSRY.html) instance with the values of data objects `f1 f2 ...`\\ `context_ref` expects a data object that points to a context instance (see [`CONTEXTS`](ABAPCONTEXTS.html)). The names of key fields of the corresponding context can be specified for `key1 key2 ...`\\ `f1 f2 ...` expects data objects whose data type matches the corresponding key field `key1 key2 ...`

The `SUPPLY` statement overwrites only the specified key fields with new values. If not all key fields are specified, the previous values are kept. The values of all fields of the context instance derived from a changed key field are invalidated by the `SUPPLY` statement.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abencontext.html