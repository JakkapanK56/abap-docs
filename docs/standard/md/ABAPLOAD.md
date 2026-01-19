---
title: "ABAPLOAD"
description: |
  ABAPLOAD - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOAD.htm"
abapFile: "ABAPLOAD.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "internal-table", "field-symbol", "ABAPLOAD"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

`LOAD REPORT prog PART part INTO itab.`

The part specified in `part` of the generated form ([load](ABENLOAD_GLOSRY.html)) of the program `prog` specified in `prog` is loaded into the internal table `itab` for analysis purposes. `itab` must be a standard table and secondary keys are allowed.

The following table shows the possible content of `part`, its meaning, and the requested line type of `itab`.

**Comment on `DATA` and `DATV`:**

To find the data description that belongs to a data index i, proceed as follows: \\n

   0 <= i < 2^14  ==>  i+1        Index in data\_itab \\n2^14 <= i < 2^15  ==>  i+1 - 2^14 index in datv\_itab \\n2^15 <= i < 2^16  ==>  i+1 - 2^15 parameter index\\ 

(2^14 = 16384, 2^15 = 32768)

**Comment on line type `x`:**

If the line type `x` is specified for the internal table, the width of the internal table determines the line break.

-   *Cause:* An invalid description has been specified in `PART`.
    *Runtime error:*\\ `LOAD_REPORT_PART_NOT_FOUND`
-   *Cause:* The specified internal table is too short or narrow.
    *Runtime error:*\\ `LOAD_REPORT_TABLE_TOO_SHORT`

`part` **Meaning** **Line Type** `'BASE'` Segment table `RBASE` `'CLAS'` Defined classes `RCLAS` `'CLFR'` Load table `CLFR` `RCLFR` `'CONS'` Table of constants `x` `'CREF'` Static addressing of classes `RCREF` `'COMP'` Description of the components of the internal structures that are used in the program `RDATA` `'CONT'` Processing control blocks `RCONT` `'DATA'` Static data descriptions (see below) `RDATA` `'DATL'` Load table `DATL` `RDATA` `'DATP'` Data descriptions of the parameters and local field symbols `RDATA` `'DATV'` Variable data descriptions (see below) `RDATA` `'DDNM'` Used types from ABAP Dictionary `RDDNM` `'EVNT'` Event descriptors defined by the raising class `REVNT` `'EXCP'` Load table `EXCP` `REXCP` `'GCIX'` Load table `GCIX` `RGCIX` `'HEAD'` Program header `RHEAD` `'INCL'` Load table `INCL` `c`, length 40 `'INIT'` Initial values of the local data `x` `'INTC'` Load table `INTC` `RINTC` `'INTD'` Used interfaces `RINTD` `'INTI'` Implemented interfaces `RINTI` `'INTR'` Load table `INTR` `RINTR` `'IREF'` Additional information for addressing using [interface reference variables](ABENINTERFACE_REF_VARIABLE_GLOSRY.html) `RIREF` `'LITL'` Literal table `x` `'LITX'` Index table of literals `RLITX` `'LREF'` Line reference `RLREF` `'OREF'` Additional information for addressing using object references `ROREF` `'PBAG'` Additional descriptions of the data types used in the program `RPBAG` `'SELC'` Description of the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) variables `RSELC` `'SREF'` Load table `SREF` `RSREF` `'SSCR'` Description of the selection screen `RSSCR` `'STCO'` Load table `STCO` `x` `'STOR'` Initial values of the global data `x` `'STIX'` Load table `SREF` `RSTIX` `'SYMB'` Symbol table `RSYMB` `'SYMBDATA'` Load table `SYMBDATA` `RSYMBDATA` `'SYMBEVNT'` Load table `SYMBEVNT` `RSYEV` `'SYMBINTFEVNT'` Load table `SYMBINTFEVNT` `RSYIEV` `'SYMBINTFMETH'` Load table `SYMBINTFMETH` `RSYIME` `'SYMBMETH'` Load table `SYMBMETH` `RSYME` `'SYMBMETHEXCP'` Load table `SYMBMETHEXCP` `RSYME` `'SYMBMETHPARM'` Load table `SYMBMETHPARM` `RSYME` `'TPLR'` Load table `TPLR` `RTPLR` `'TRIG'` Event or time control blocks `RTRIG` `'TXID'` Index of text elements (assignment of text keys to data control blocks) `RTXID` `'TYPE'` Description of the data types `RTYPE` `'VTAB'` Offsets for all methods (classes, [event handlers](ABENEVENT_HANDLER_GLOSRY.html), instances, interfaces) `RVTAB` `sy-subrc` Meaning 0 The load of the program `prog` exists and is up-to-date. The internal table `itab` was filled. 4 The load of the program `prog` does not exist. 8 The load of the program `prog` exists but is not up-to-date. In special cases, this `sy-subrc` can also mean that the program load has been destroyed. This can be fixed by generating again. In `PART 'LREF'`, `sy-subrc = 8` means that the line reference table does not fit the program. In `PART 'CONT'`, the reference part of the internal table is not filled. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_program.html abengeneric\_internal.html