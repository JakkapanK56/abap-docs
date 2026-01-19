---
title: "ABENST_ABAP_OBJECTS"
description: |
  ABENST_ABAP_OBJECTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_ABAP_OBJECTS.htm"
abapFile: "ABENST_ABAP_OBJECTS.html"
keywords: ["if", "method", "class", "data", "ABENST", "ABAP", "OBJECTS"]
---

Classes and objects in ABAP Objects can be accessed as follows in ST programs:

Data roots, parameters, and variables can all be bound to the interface parameters at the same time.

The call of methods also allows access to the current XML stream.

When binding data nodes, it must be noted that the content of a data root cannot be modified in serializations and only writes can be performed on a data root in deserializations. This places a strong restriction on the use of data nodes as actual parameters. Since parameters and attributes for general use cannot be serialized or deserialized, unless they contain an elementary value, methods called from ST programs are mainly suited for processing elementary values, such as conversions. This restriction can be bypassed by accessing an ABAP data object bound to a data root in the called method.

-   [`tt:call-method`, call static methods](ABENST_TT_CALL-METHOD_STATIC.html)
-   [`tt:call-method`, call instance methods](ABENST_TT_CALL-METHOD_INSTANCE.html)
-   [`tt:create-object`, create objects](ABENST_TT_CREATE.html)

-   [`tt:call-method`, `writer`, `reader`](ABENST_TT_CALL-METHOD_WRITERREADER.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html