---
title: "ABENFIELD_EXIT_GLOSRY"
description: |
  ABENFIELD_EXIT_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFIELD_EXIT_GLOSRY.htm"
abapFile: "ABENFIELD_EXIT_GLOSRY.html"
keywords: ["if", "data", "ABENFIELD", "EXIT", "GLOSRY"]
---

Obsolete [customer exit](ABENCUSTOMER_EXIT_GLOSRY.html) that can be linked with [DDIC data elements](ABENDATA_ELEMENT_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) in customer systems. If a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html) is defined with reference to such a data element, a function module named `FIELD_EXIT_dtel` is called during the data transport from the dynpro to the ABAP program at the event [PAI](ABENPAI_GLOSRY.html). Here, `dtel` is the name of the data element. The value of the dynpro field can be modified in the function module. The function module of a field exit cannot be debugged at present.

ABENTECHNO\_GLOSSARY.html ABENDDIC\_GLOSSARY.html