---
title: "ABENPASS_BY_VALUE_GLOSRY"
description: |
  ABENPASS_BY_VALUE_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENPASS_BY_VALUE_GLOSRY.htm"
abapFile: "ABENPASS_BY_VALUE_GLOSRY.html"
keywords: ["if", "method", "data", "ABENPASS", "VALUE", "GLOSRY"]
---

Method of passing data from [actual parameters](ABENACTUAL_PARAMETER_GLOSRY.html) to [formal parameters](ABENFORMAL_PARAMETER_GLOSRY.html) when a [procedure](ABENPROCEDURE_GLOSRY.html) is called, which is defined in the [parameter interface](ABENPARAMETER_INTERFACE_GLOSRY.html) of the procedure. Pass by value creates a local [data object](ABENDATA_OBJECT_GLOSRY.html) as a copy of the actual parameter. [Output parameters](ABENOUTPUT_PARAMETER_GLOSRY.html) and [return values](ABENRETURN_VALUE_GLOSRY.html) are initialized when the procedure is called. [Input parameters](ABENINPUT_PARAMETER_GLOSRY.html) and [input/output parameters](ABENINPUT_OUTPUT_PARAMETER_GLOSRY.html) are passed the value of the actual parameter when the procedure is called. Modified formal parameters are only passed to the actual parameter if the procedure has been processed without errors, that is, when the last statement is reached or when it is exited via [`RETURN`](ABAPRETURN.html) (or [`EXIT`](ABAPEXIT_PROCESSING_BLOCKS.html) or [`CHECK`](ABAPCHECK_PROCESSING_BLOCKS.html)). See also [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html).

[**\-> More about**](ABENFORMAL_PARAMETERS_OVIEW.html)

ABENABALA\_GLOSSARY.html