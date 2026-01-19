---
title: "ABAPEXIT_STEP-LOOP"
description: |
  ABAPEXIT_STEP-LOOP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXIT_STEP-LOOP.htm"
abapFile: "ABAPEXIT_STEP-LOOP.html"
keywords: ["loop", "if", "ABAPEXIT", "STEP", "LOOP"]
---

[Short Reference](ABAPEXIT_FROM_STEP-LOOP_SHORTREF.html)

`EXIT FROM STEP-LOOP.`

When processing [table controls](ABENTABLE_CONTROL_GLOSRY.html) or [step loops](ABENSTEP_LOOP_GLOSRY.html) with the statement [`LOOP`](LOOP.html) in the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html), this statement causes the loop to be terminated immediately. The current ABAP-[processing block](ABENPROCESSING_BLOCK_GLOSRY.html) is exited instantly and the dynpro flow logic continues after the statement `ENDLOOP`. During [PBO](ABENPBO_GLOSRY.html) processing, the statement causes the current table control line and the following lines or step loop groups to be hidden on the screen. If the statement is not executed in the processing of a `LOOP` loop in the dynpro flow logic, the program terminates with a [termination message](ABENTERMINATION_MESSAGE_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html