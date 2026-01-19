---
title: "ABENEVALUATION_GUIDL"
description: |
  ABENEVALUATION_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEVALUATION_GUIDL.htm"
abapFile: "ABENEVALUATION_GUIDL.html"
keywords: ["loop", "do", "if", "method", "class", "ABENEVALUATION", "GUIDL"]
---

System fields describe general system states or are set specifically by individual statements. The content of system fields is only defined as described in the documentation of the system fields or in the documentation of ABAP statements that set system fields. In contexts other than those described there, the content of system fields is not defined. Particularly statements whose effects on system fields are undocumented can modify the content of specific system fields, such as the [return code](ABENRETURN_CODE_GUIDL.html)\\ `sy-subrc`, in an undefined way. This applies especially to statements that call ABAP code implicitly or explicitly when executed.

**Evaluate system fields in the right position**

Evaluate system fields only in contexts for which they are defined. If an ABAP statement sets a system field in accordance with its documentation, the field should be evaluated directly after the statement. You must not evaluate system fields after statements, however, whose effects are undocumented.

If possible, a system field should be evaluated directly after the statement that set it, to prevent it from being overwritten by other statements. The bigger the gap between the ABAP statement in question and the evaluation of a system field, the higher the risk that this system field will be affected by a different statement in the meantime.

If necessary, the values of system fields should be saved in helper variables. This applies in particular to the general [return code](ABENRETURN_CODE_GUIDL.html), `sy-subrc`, which is set by very many different statements. Other common examples include the `sy-index` loop counter or the `sy-tabix` table index.

You should never evaluate statement-related system fields after statements that do not set these fields according to their documentation. As before, a common example is the evaluation of `sy-subrc`. If it is not documented for a statement that it sets `sy-subrc` in a defined way, an evaluation after this statement is very risky. Either `sy-subrc` still has the previous value, or it is set in an undefined way by the statement. Both outcomes can lead to incorrect program behavior. The bad example in the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GUIDL.html) section shows an example of this.

The static methods of the class `CL_ABAP_SYST` also provide important system states. There is no possibility of a previous overwriting in the program.

The following source code shows an example where `sy-subrc` is evaluated too late. Even if it is not documented for the statements between `FIND` and `IF` that they set `sy-subrc`, the value can be overwritten due to possible side effects.

The following source code corrects the above example by assigning `sy-subrc` to a helper variable directly after `FIND`. This variable is then evaluated in `IF`. It can also be necessary to assign `sy-index` or `sy-tabix` to a helper variable directly after `DO` or `LOOP` loop is entered.

FIND PCRE ... IN ... \\n... \\n... "other statements \\n... \\nIF sy-subrc = 0. \\n ... \\nENDIF. FIND PCRE ... IN ... \\nfind\_subrc = sy-subrc. \\n... \\n... "other statements \\n... \\nIF find\_subrc = 0. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abensystem\_fields\_gdl.html