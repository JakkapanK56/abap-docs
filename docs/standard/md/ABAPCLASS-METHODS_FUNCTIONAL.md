---
title: "ABAPCLASS-METHODS_FUNCTIONAL"
description: |
  ABAPCLASS-METHODS_FUNCTIONAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS-METHODS_FUNCTIONAL.htm"
abapFile: "ABAPCLASS-METHODS_FUNCTIONAL.html"
keywords: ["if", "method", "class", "data", "ABAPCLASS", "METHODS", "FUNCTIONAL"]
---

[Short Reference](ABAPCLASS-METHODS_SHORTREF.html)

``CLASS-METHODS meth [[`DEFAULT IGNORE|FAIL`](ABAPMETHODS_DEFAULT.html)]``\\ 
  ``[IMPORTING [`parameters`](ABAPMETHODS_PARAMETERS.html)\ [PREFERRED PARAMETER p]]``\\ 
  ``[EXPORTING [`parameters`](ABAPMETHODS_PARAMETERS.html)]``\\ 
  ``[CHANGING  [`parameters`](ABAPMETHODS_PARAMETERS.html)]``\\ 
  ``RETURNING VALUE(r) [`typing`](ABENTYPING_SYNTAX.html)``\\ 
  `[\{RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...\}`\\ 
  `|\{EXCEPTIONS exc1 exc2 ...\}].`

This statement declares a [functional](ABENFUNCTIONAL_METHOD_GLOSRY.html)\\ [static method](ABENSTATIC_METHOD_GLOSRY.html)\\ `meth`. The additions have exactly the same syntax and meaning as those for [functional instance methods](ABAPMETHODS_FUNCTIONAL.html).

The class `circle` contains two functional static methods, `circumference` and `area`, which work with the constant `pi`.

CLASS circle DEFINITION. \\n PUBLIC SECTION. \\n CONSTANTS pi TYPE decfloat34 \\n VALUE '3.141592653589793238462643383279503'. \\n CLASS-METHODS: circumference IMPORTING r TYPE decfloat34 \\n RETURNING VALUE(c) TYPE decfloat34, \\n area IMPORTING r TYPE decfloat34 \\n RETURNING VALUE(a) TYPE decfloat34. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS circle IMPLEMENTATION. \\n METHOD circumference. \\n c = 2 \* pi \* r. \\n ENDMETHOD. \\n METHOD area. \\n a = pi \* r \*\* 2. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA: circ TYPE decfloat34, \\n area TYPE decfloat34, \\n radius TYPE decfloat34. \\n radius = '1.00'. \\n circ = circle=>circumference( radius ). \\n area = circle=>area( radius ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html abapclass-methods.html