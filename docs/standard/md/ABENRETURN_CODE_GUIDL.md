---
title: "ABENRETURN_CODE_GUIDL"
description: |
  ABENRETURN_CODE_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRETURN_CODE_GUIDL.htm"
abapFile: "ABENRETURN_CODE_GUIDL.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENRETURN", "CODE", "GUIDL"]
---

The most prominent system field is probably the [return code](ABENRETURN_CODE_GLOSRY.html)\\ `sy-subrc`, which signals the successful execution of an ABAP statement or, if you are [using classic exceptions](ABENUSE_EXCEPTION_CLASS_GUIDL.html), of a procedure. A return code of 0 generally indicates successful execution.

**Evaluate the return code `sy-subrc`**

Evaluate the return code `sy-subrc` after every ABAP statement that sets the value according to the documentation. However, `sy-subrc` should never be set after statements are executed for which the setting of a return code is not documented.

The system field `sy-subrc` indicates whether a statement was successfully executed. If the execution was not successful, the program should usually react accordingly. If this does not happen, the program's response will probably be unexpected.

This rule is a specialization of the more general rule [evaluate system fields in the correct place](ABENEVALUATION_GUIDL.html). It is specified here again separately due to the prominent role of the return code `sy-subrc`. The system field `sy-subrc` must always be evaluated immediately and, if necessary, assigned to a help variable. An evaluation cannot occur after statements that set `sy-subrc` not defined, because otherwise wrong conclusions could easily be drawn.

Special care must be taken in [functional method calls](ABAPCALL_METHOD_FUNCTIONAL.html). If executed successfully, each method call sets the return code `sy-subrc` to 0, which means that functional method calls overwrite the return code when used in statements where the setting of the return code is not documented. The same applies to the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) when instances of classes are created.

If a handling action seems unnecessary because, in the developer's opinion, the statement is always executed successfully, the assumption should at least be saved and documented using an [assertion](ABENASSERTIONS_GUIDL.html).

The following source code shows how further processing of data is performed using the work area of a `SELECT` statement, without a request from `sy-subrc`. However, the content of `wa` is usually undefined here, if a request from `sy-subrc` does not guarantee that database access will be successful.

The following source code corrects the above example. This means the successful execution of the `SELECT` statement is checked.

SELECT ... \\n INTO wa \\n ... \\n... "work with wa SELECT ... \\n INTO wa \\n ... \\nIF sy-subrc <> 0. \\n ... \\nENDIF \\n... "work with wa abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abensystem\_fields\_gdl.html