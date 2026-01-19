---
title: "ABENBADI_REFERENCE_VARIABLE_GLOSRY"
description: |
  ABENBADI_REFERENCE_VARIABLE_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBADI_REFERENCE_VARIABLE_GLOSRY.htm"
abapFile: "ABENBADI_REFERENCE_VARIABLE_GLOSRY.html"
keywords: ["method", "class", "ABENBADI", "REFERENCE", "VARIABLE", "GLOSRY"]
---

Special [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html) that is declared with reference to a [BAdI](ABENBADI_GLOSRY.html) and is used to access the associated [BAdI object](ABENBADI_OBJECT_GLOSRY.html). BAdI reference variables are supplied with a [BAdI reference](ABENBADI_REFERENCE_GLOSRY.html) using [`GET BADI`](ABAPGET_BADI.html) and are only used in [`CALL BADI`](ABAPCALL_BADI.html) to call [BAdI methods](ABENBADI_METHOD_GLOSRY.html). Technically, BAdI reference variables are [class reference variables](ABENCLASS_REFERENCE_VARIABL_GLOSRY.html) of the [static type](ABENSTATIC_TYPE_GLOSRY.html) of a concrete [BAdI](ABENBADI_CLASS_GLOSRY.html) class, or of its abstract superclass `CL_BADI_BASE`.

ABENTECHNO\_GLOSSARY.html