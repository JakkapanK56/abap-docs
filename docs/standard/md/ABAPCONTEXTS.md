---
title: "ABAPCONTEXTS"
description: |
  ABAPCONTEXTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCONTEXTS.htm"
abapFile: "ABAPCONTEXTS.html"
keywords: ["if", "data", "ABAPCONTEXTS"]
---

[Short Reference](ABAPCONTEXTS_SHORTREF.html)

`CONTEXTS con.`

This statement can be specified in the global declaration part of a program or in the local declaration part of a [procedure](ABENPROCEDURE_GLOSRY.html). It creates a structured local data type, which can be used to create an instance of the [context](ABENCONTEXT_GLOSRY.html)\\ `con`. For `con`, the name of a context defined in the current [AS ABAP](ABENAS_ABAP_GLOSRY.html) can be specified. The name of the new data type consists of the prefix `context_` and the name `con` of the specified context.

If the data type `context_con` created using `CONTEXTS` is used after the [addition `TYPE`](ABAPDATA_SIMPLE.html) of the statement [`DATA`](ABAPDATA.html), an instance of the context `con` is created to which the declared data object points. The data object cannot be declared as a component of a structure. The content of the new data object is interpreted as a reference. After an assignment to another data object of the same data type, this data object points to the same context instance.

In addition to the data type `context_con`, another structured data type `context_t_con` is created. For each field of the context, this data type contains an identically named component with its data type.

Data objects declared with the data type `context_con` should only be used in the statements [`SUPPLY`](ABAPSUPPLY.html) and [`DEMAND`](ABAPDEMAND.html).

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abencontext.html