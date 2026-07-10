---
title: "Evaluation - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevaluation_guidl.htm"
abapFile: "abenevaluation_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [System Fields](ABENSYSTEM_FIELDS_GUIDL.md) → 

Evaluation

Background

System fields describe general system states or are set specifically by individual statements. The content of system fields is only defined as described in the documentation of the system fields or in the documentation of ABAP statements that set system fields. In contexts other than those described there, the content of system fields is not defined. Particularly statements whose effects on system fields are undocumented can modify the content of specific system fields, such as the [return value](ABENRETURN_VALUE_GUIDL.md "Guideline") sy-subrc, in an undefined way. This applies especially to statements that call ABAP code implicitly or explicitly when executed.

Rule

Evaluate system fields in the right position

Evaluate system fields only in contexts for which they are defined. If an ABAP statement sets a system field in accordance with its documentation, the field should be evaluated directly after the statement. You must not evaluate system fields after statements, however, whose effects are undocumented.

Details

If possible, a system field should be evaluated directly after the statement that set it, to prevent it from being overwritten by other statements. The bigger the gap between the ABAP statement in question and the evaluation of a system field, the higher the risk that this system field will be influenced by a different statement in the meantime.

If necessary, the values of system fields should be saved in helper variables. This applies in particular to the general [return value](ABENRETURN_VALUE_GUIDL.md "Guideline"), sy-subrc, which is set by very many different statements. Other common examples include the syindex loop counter or the sy-tabix table index.

You should never evaluate statement-related system fields after statements that do not set these fields according to their documentation. As before, a common example is the evaluation of sy-subrc. If it is not documented for a statement that it sets sy-subrc in a defined way, an evaluation after this statement is very risky. Either sy-subrc still has the previous value, or it is set in an undefined way by the statement. Both outcomes can lead to incorrect program behavior. The bad example in the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GUIDL.md "Guideline") section shows an example of this.

Note

The static methods of the class CL\_ABAP\_SYST also provide important system states. There is no possibility of a previous overwriting in the program.

Bad Example

The following source code shows an example where sy-subrc is evaluated too late. Even if it is not documented for the statements between FIND and IF that they set sy-subrc, the value can be overwritten due to possible side effects.

FIND REGEX ... IN ...
...
... "other statements
...
IF sy-subrc = 0.
   ...
ENDIF.

Good Example

The following source code corrects the above example by assigning sy-subrc to a helper variable directly after FIND. This variable is then evaluated in IF. It can also be necessary to assign sy-index or sy-tabix to a helper variable directly after DO or LOOP loop is entered.

FIND REGEX ... IN ...
find\_subrc = sy-subrc.
...
... "other statements
...
IF find\_subrc = 0.
   ...
ENDIF.
