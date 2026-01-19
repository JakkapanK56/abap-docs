---
title: "ABENSEL_SCREEN_TRAPS_ABEXA"
description: |
  ABENSEL_SCREEN_TRAPS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_TRAPS_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_TRAPS_ABEXA.html"
keywords: ["select", "do", "if", "case", "data", "ABENSEL", "SCREEN", "TRAPS", "ABEXA"]
---

The example demonstrates some common traps and pitfalls of selection screens.

The first trap is common for all dynpros and especially also for selection screens. By default, the content of character-like input fields is converted to uppercase when transported to the respective ABAP fields of a program. This can lead to unexpected results. In order to transport lower case characters from input fields of selection screens, the default behavior can be changed either by using a [DDIC domain](ABENDOMAIN_GLOSRY.html) where the respective [semantic property](ABENDDIC_DOMAINS_SEMA.html) is set to *lower case* or with the addition `LOWER CASE` to `PARAMETERS` and `SELECT-OPTIONS`. The example shows three parameters for which the value *x* is entered:

The second trap is common for all [comparisons of character-like data](ABENCOMPARISON_TYPE.html#@@ITOC@@ABENCOMPARISON_TYPE_2). Comparisons are based on the internal binary representation that depends on the code page. The [locale](ABENLOCALE_GLOSRY.html) or the current [text environment](ABENTEXT_ENVIRONMENT.html) are not taken into account. If this is not taken into account, when evaluating input from selection screens this can lead to unexpected results. The example shows a selection criterion `selcrit` that can deal with lower case letters but is restricted to the normal comparison rules. If an interval *A*,*Bz* is entered:

-   Parameter `lower` is connected via data element `DEMO_LOWER_CASE` to DDIC domain `DEMO_LOWER_CASE` where the property *lower case* is set. The value *x* is passed to the ABAP field without conversion and the comparison with *x* is true.
-   Parameter `no_lower` is connected via data element `DEMO_NO_LOWER_CASE` to DDIC domain `DEMO_NO_LOWER_CASE` where the property *lower case* is not set. The value *x* is passed to the ABAP field with conversion to uppercase and the comparison with *X* is true.
-   Parameter `lowercas` is also connected to DDIC domain `DEMO_NO_LOWER_CASE` where the property *lower case* is not set. But the addition [`LOWER CASE`](ABAPPARAMETERS_VALUE.html) suppresses the conversion to uppercase by setting the respective attribute for the dynpro field and the comparison with *x* is true.

-   The string *Bar* is found in the interval using the operator [`IN`](ABENLOGEXP_SELECT_OPTION.html).
-   The string *Bär* is not found using the operator [`IN`](ABENLOGEXP_SELECT_OPTION.html) because the internal representation of German umlaut `ä` is not part of the interval.

REPORT demo\_selscreen\_traps.\\n\\nSELECTION-SCREEN COMMENT /1(50) text.\\nSELECTION-SCREEN ULINE.\\nPARAMETERS:\\n lower TYPE demo\_lower\_case,\\n no\_lower TYPE demo\_no\_lower\_case,\\n lowercas TYPE demo\_no\_lower\_case LOWER CASE.\\nSELECTION-SCREEN ULINE.\\nSELECT-OPTIONS selcrit FOR lower.\\n\\nAT SELECTION-SCREEN OUTPUT.\\n text = 'For the intended effect, do not change the input'.\\n lower = 'x'.\\n no\_lower = 'x'.\\n lowercas = 'x'.\\n selcrit\[\] = VALUE #( ( sign = 'I'\\n option = 'BT'\\n low = 'A'\\n high = 'Bz' ) ).\\n\\nSTART-OF-SELECTION.\\n\\n\\n IF lower = 'x'.\\n write / 'Lower case is respected for domain' &\\n ' with lower case flag.'.\\n ENDIF.\\n\\n IF no\_lower = 'X'.\\n write / 'Lower case is not respected for domain' &\\n ' without lower case flag.'.\\n ENDIF.\\n\\n IF lowercas = 'x'.\\n write / 'Lower case is respected for domain without' &\\n ' lower case flag when overwritten with LOWER CASE.'.\\n ENDIF.\\n\\n uline.\\n\\n IF 'Bar' IN selcrit.\\n write / 'Latin characters (Bar) are found in interval.'.\\n ENDIF.\\n\\n IF 'Bär' NOT IN selcrit ##STRING\_OK.\\n write / 'German umlaut (Bär) is not found in interval.' ##STRING\_OK.\\n ENDIF.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html