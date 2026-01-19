---
title: "ABENBADI_METHOD_GLOSRY"
description: |
  ABENBADI_METHOD_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBADI_METHOD_GLOSRY.htm"
abapFile: "ABENBADI_METHOD_GLOSRY.html"
keywords: ["if", "method", "ABENBADI", "METHOD", "GLOSRY"]
---

[Method](ABENMETHOD_GLOSRY.html) of a [BAdI interface](ABENBADI_INTERFACE_GLOSRY.html). A BAdI method is implemented in [BAdI implementations](ABENBADI_IMPLEMENTATION_GLOSRY.html) and then called exclusively via the associated BAdI object using [`CALL BADI`](ABAPCALL_BADI.html). If the BAdI interface is part of the definition of a [BAdI](ABENBADI_GLOSRY.html) that is defined for multiple use, the [parameter interface](ABENPARAMETER_INTERFACE_GLOSRY.html) of a BAdI method can only contain [input parameters](ABENINPUT_PARAMETER_GLOSRY.html) and [input/output parameters](ABENINPUT_OUTPUT_PARAMETER_GLOSRY.html). If all BAdIs are defined for single use, the interface can also have [output parameters](ABENOUTPUT_PARAMETER_GLOSRY.html) or a [return value](ABENRETURN_VALUE_GLOSRY.html). BAdI methods can define or propagate [exceptions](ABENEXCEPTION_GLOSRY.html), and their implementation can be made [optional](ABAPMETHODS_DEFAULT.html).

ABENTECHNO\_GLOSSARY.html