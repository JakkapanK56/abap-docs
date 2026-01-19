---
title: "ABENNEWS-620-DUMPS"
description: |
  ABENNEWS-620-DUMPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-620-DUMPS.htm"
abapFile: "ABENNEWS-620-DUMPS.html"
keywords: ["select", "if", "data", "ABENNEWS", "620", "DUMPS"]
---

[1\. Displaying Work Areas](#ABAP_MODIFICATION_1@4@)

[2\. Selected Variables](#ABAP_MODIFICATION_2@4@)

[3. `SNAP` Variables](#ABAP_MODIFICATION_3@4@) 

[4\. Display Languages](#ABAP_MODIFICATION_4@4@)

The system now only displays processed work areas, and the [data area](ABENDATA_AREA_GLOSRY.html) directory no longer exists. Instead, only the directory of application tables is displayed, including their administration information.

The display of selected variables has been improved. The data for all call levels is now displayed, whereas previously only the uppermost call level was displayed. A display of all active calls can be viewed under application calls.

The `SNAP` variable list contains the data for the short dump in compact form, without explanatory text. This data can be stored locally on the front end. Due to the shorter representation, this format is suitable for sending, for example as an attachment in a customer problem message.

When [short dumps](ABENSHORT_DUMP_GLOSRY.html) are displayed, the system now also respects the second language, stored in the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `zcsa/second_language`. If no text is found, a note can be created and referred to in the standard text. The search for the short dump text is performed in the following order with respect to language version:

As soon as a text is found, the system stops the search and displays the text.

1.  Search for text in logon language
2.  Search for text in second language
3.  Search for text in English
4.  Search for standard text including note created
5.  Search for standard text

abenabap.html abennews.html abennews-6.html abennews-620.html