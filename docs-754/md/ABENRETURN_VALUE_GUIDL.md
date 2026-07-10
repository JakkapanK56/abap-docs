---
title: "Return Code - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreturn_value_guidl.htm"
abapFile: "abenreturn_value_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [System Fields](ABENSYSTEM_FIELDS_GUIDL.md) → 

Return Code

Background

The most prominent system field should be the return code sy-subrc. This indicates the successful execution of an ABAP statement or, if you are [using classic exceptions](ABENUSE_EXCEPTION_CLASS_GUIDL.md "Guideline"), a procedure. A return code of 0 usually means that the execution was successful.

Rule

Evaluate the return code sy-subrc

Evaluate the return code sy-subrc after every ABAP statement that sets the value according to the documentation. However, sy-subrc should never be set after statements are executed for which the setting of a return code is not documented.

Details

The system field sy-subrc indicates whether a statement was successfully executed. If the execution was not successful, the program should usually react accordingly. If this does not happen, the program's response will probably be unexpected.

This rule is a specialization of the more general rule [evaluate system fields in the correct place](ABENEVALUATION_GUIDL.md "Guideline"). It is specified here again separately due to the prominent role of the return code sy-subrc. The system field sy-subrc must always be evaluated immediately and, if necessary, assigned to a help variable. An evaluation cannot occur after statements that set sy-subrc not defined, because otherwise wrong conclusions could easily be drawn.

Note

Special care must be taken in [functional method calls](ABAPCALL_METHOD_FUNCTIONAL.md). If executed successfully, each method call sets the return code sy-subrc to 0, which means that functional method calls overwrite the return code when used in statements where the setting of the return code is not documented. The same applies to the instance operator [NEW](ABENCONSTRUCTOR_EXPRESSION_NEW.md) when instances of classes are created.

Exception

If a handling action seems unnecessary because, in the developer's opinion, the statement is always executed successfully, the assumption should at least be saved and documented using an [assertion](ABENASSERTIONS_GUIDL.md "Guideline").

Bad Example

The following source code shows how further processing of data is performed using the work area of a SELECT command, without a request from sy-subrc. However, the content of wa is usually undefined here, if a request from sy-subrc does not guarantee that database access will be successful.

SELECT ...
       INTO wa
       ...
... "work with wa

Good Example

The following source code corrects the above example. This means the successful execution of the SELECT statement is checked.

SELECT ...
       INTO wa
       ...
IF sy-subrc <> 0.
  ...
ENDIF
... "work with wa
