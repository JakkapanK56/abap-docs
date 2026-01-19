---
title: "ABAPCLASS-METHODS_GENERAL"
description: |
  ABAPCLASS-METHODS_GENERAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS-METHODS_GENERAL.htm"
abapFile: "ABAPCLASS-METHODS_GENERAL.html"
keywords: ["if", "method", "class", "ABAPCLASS", "METHODS", "GENERAL"]
---

[Short Reference](ABAPCLASS-METHODS_SHORTREF.html)

``CLASS-METHODS meth [[`DEFAULT IGNORE|FAIL`](ABAPMETHODS_DEFAULT.html)]``\\ 
  ``[IMPORTING [`parameters`](ABAPMETHODS_PARAMETERS.html)\ [PREFERRED PARAMETER p]]``\\ 
  ``[EXPORTING [`parameters`](ABAPMETHODS_PARAMETERS.html)]``\\ 
  ``[CHANGING  [`parameters`](ABAPMETHODS_PARAMETERS.html)]``\\ 
  `[\{RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...\}`\\ 
  `|\{EXCEPTIONS exc1 exc2 ...\}].`

This statement declares a general [static method](ABENSTATIC_METHOD_GLOSRY.html)\\ `meth`. The additions make an interface method optional, define the parameter interface of the method, and specify which exceptions the method can raise or propagate. The additions have the same syntax and meaning as those for [general instance methods](ABAPMETHODS_GENERAL.html).

Declaration of a static method with input/output parameters.

-   Static methods cannot be redefined, which means that they cannot be flagged as abstract or final.
-   Static methods are always executed in the class in which they were declared, even if they are called in subclasses or using the names of subclasses.

CLASS xml DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS \\n escape\_xml \\n CHANGING \\n xml TYPE xstring. \\n ... \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html abapclass-methods.html