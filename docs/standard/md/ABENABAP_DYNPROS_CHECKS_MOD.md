---
title: "ABENABAP_DYNPROS_CHECKS_MOD"
description: |
  ABENABAP_DYNPROS_CHECKS_MOD - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPROS_CHECKS_MOD.htm"
abapFile: "ABENABAP_DYNPROS_CHECKS_MOD.html"
keywords: ["if", "case", "data", "ABENABAP", "DYNPROS", "CHECKS", "MOD"]
---

Input checks in PAI modules are enabled by first transporting the content of the input fields to the ABAP program. This is where the content can then be checked. Any errors can be corrected on the screen before further modules are called. This is achieved by combining the statements [`FIELD`](FIELD.html) and [`CHAIN`](CHAIN.html) of the dynpro flow logic with [messages](ABENDYNP_FIELD_MESSAGES.html).

If a [warning or error message](ABENDYNP_FIELD_MESSAGES.html) is sent in a module `mod` whose call is combined with a [`FIELD`](FIELD.html) statement

`FIELD f MODULE mod.`

the input field in question becomes the only input-enabled field on the current dynpro and the input can be repeated. If the field is only checked once, PAI resumes directly after the `FIELD` statement, and the preceding modules are not called again.

If a [warning or error message](ABENDYNP_FIELD_MESSAGES.html) is sent in a module `mod1`, `mod2`, ... whose call takes place in a [processing chain](CHAIN.html)

`CHAIN. FIELD: f1, f2,... MODULE mod1. FIELD: g1, g2,... MODULE mod2. ... ENDCHAIN.`

the input fields of all dynpro fields in the processing chain become input-enabled on the current dynpro. This includes fields after the [`MODULE`](MODULE.html) statement in [`FIELD`](FIELD.html) statements. None of the other fields are input-enabled. Even when a `MODULE` statement is combined with a `FIELD` statement within a processing chain, all input fields in the chain become input-enabled and not just the field in question. If the fields in the processing chain are only checked once, PAI resumes directly after the `CHAIN` statement, and the preceding modules are not called again.

In the case of warnings and error messages, a [`FIELD`](FIELD.html) statement outside of a processing chain defines whether a single field is input-enabled. [`FIELD`](FIELD.html) statements between [`CHAIN - ENDCHAIN`](CHAIN.html), on the other hand, define whether multiple fields are input-enabled. Here, all fields linked using `FIELD` are transported back to the screen layout without PBO processing taking place. This ensures that any changes to the field content are displayed before a message. This also applies to the sending of information messages, but no fields are input-enabled.

It may be necessary to specify a single dynpro field in multiple [`FIELD`](FIELD.html) or [`CHAIN`](CHAIN.html) statements. If an associated dialog module sends a warning or error message, PAI resumes after the user enters a new value. It is not possible to resume at the associated `FIELD` or `CHAIN` statement if the error field is also specified in an earlier `FIELD` or `CHAIN` statement.

Instead, all `FIELD` and `CHAIN` statements containing the error field must be repeated. PAI processing resumes at the first `FIELD` or `CHAIN` statement containing one or more of the fields in the `FIELD` or `CHAIN` statement in which the error occurred and which were modified the last time the screen layout was displayed.

All functions of the statements [`FIELD`](FIELD.html) and [`CHAIN`](CHAIN.html) used to defined data transport and for conditional module calls are also available in combination with warnings and error messages. The content of each field is transported after the `FIELD` statement in question. A warning or error message in a conditional module in a processing chain makes all fields in the chain input-enabled, although not all fields need to be transported.

If warnings or error messages are sent in dialog modules that are not linked with fields using `FIELD` or `CHAIN`, no dynpro fields become input-enabled. This makes a termination necessary, which itself requires a corresponding unconditional module call.

[Input Checks in Dialog Modules](ABENDYNPRO_FIELD_CHAIN_ABEXA.html)

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpros\_checks.html