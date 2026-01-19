---
title: "ABENNEWS-610-KERNEL"
description: |
  ABENNEWS-610-KERNEL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-610-KERNEL.htm"
abapFile: "ABENNEWS-610-KERNEL.html"
keywords: ["loop", "if", "case", "data", "types", "internal-table", "field-symbol", "ABENNEWS", "610", "KERNEL"]
---

[1. Restrictions on the Statement `STOP`](#ABAP_MODIFICATION_1@4@)

[2. Addition `ON ROLLBACK` for Subroutines](#ABAP_MODIFICATION_2@4@) 

[3\. Overwriting of Untyped Field Symbols](#ABAP_MODIFICATION_3@4@)

[4\. Number of Global Segments](#ABAP_MODIFICATION_4@4@)

[5. Passing of `c` Literals to Numeric Parameters](#ABAP_MODIFICATION_5@4@) 

[6. `c` Literals as Default Values for Parameters of Type `p`](#ABAP_MODIFICATION_6@4@)

[7. Paging Out of the Structure `SCREEN`](#ABAP_MODIFICATION_7@4@)

[8. Syntax Revisions in `LOOP AT SCREEN` and `MODIFY SCREEN`](#ABAP_MODIFICATION_8@4@)

The statement [`STOP`](ABAPSTOP.html) can no longer be used outside of reports or in [dynpros](ABENDYNPRO_GLOSRY.html) called using [`CALL SCREEN`](ABAPCALL_SCREEN.html). Such actions previously produced a runtime error or, in rarer cases, a non-traceable program flow.

The addition [`ON ROLLBACK`](ABAPPERFORM.html) is now available for subroutines, similar to `PERFORM ... ON COMMIT`. This stops `FORM` routines of this type from being executed until a [`ROLLBACK WORK`](ABAPROLLBACK.html) or a [`MESSAGE`](ABAPMESSAGE.html) of type A is raised.

Untyped field symbols no longer lose their ready-only status when being read for the first time. Also, the fields %\_DUMMY and %\_SPACE are now constants.

The number of global segments in the program memory is now unrestricted. Previously, a maximum of 2\*\*15 global segments was allowed.

When passing `c` literals to parameters of type `p`, it was previously possible for a number to have more [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) than the formal parameter. Due to rounding and the associated loss of information loss, the passing of `c` literals to parameters of types I, `INT1`, and `INT2` also caused problems. For example, the literal '1245.6789' could be passed to a formal parameter of type `p DECIMALS 2` or type `i`, and the rounding was performed in accordance with the associated [conversion rule](ABENCONVERSION_RULE_GLOSRY.html).

Now the system ensures that the formal parameter has as large as a fractional portion as required by the literal. In the case of programs without fixed point arithmetic, the size of the fractional portion must be an exact match.

If, in the case of generic parameters of type `p`, a `c` literal is specified as the default value (for example in the form '12.345'), a field of type `p` with Decimals 0 was created and the literal value converted to this field. This could also result in information loss due to rounding.

Now a field of type `p` is created with as many decimal places as specified in the literal. For example, for a `c` literal with the value '12.345', a P field with Decimals 3 is created.

Until now the structure of the data object `SCREEN` was generated automatically in every program. In ABAP release 6.10 this structure description was paged out into the [type pool](ABAPTYPE-POOLS.html)\\ `SYSCR`. Instead of

data NAME type %\_CX\_SCREEN-Name

the code should now be

data NAME type SYSCR\_SCREEN-NAME

The following changes were made to the statements [`LOOP AT SCREEN`](ABAPLOOP_AT_SCREEN.html) and [`MODIFY SCREEN`](ABAPMODIFY_SCREEN.html).

PROGRAM loop\_test. \\nPERFORM test. \\nFORM test. \\n  DATA screen TYPE STANDARD TABLE OF spfli. \\n  LOOP AT SCREEN. \\n  ENDLOOP. \\nENDFORM.

1.  To ensure independence from global definitions, the additional variants `LOOP AT SCREEN INTO wa` and `MODIFY SCREEN FROM wa` were introduced.
2.  `LOOP AT SCREEN` with an internal table `SCREEN` defined locally in the program is no longer possible. The following program, previously not terminated until runtime, now produces a syntax error:

abenabap.html abennews.html abennews-6.html abennews-610.html