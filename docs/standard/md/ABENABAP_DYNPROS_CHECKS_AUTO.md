---
title: "ABENABAP_DYNPROS_CHECKS_AUTO"
description: |
  ABENABAP_DYNPROS_CHECKS_AUTO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPROS_CHECKS_AUTO.htm"
abapFile: "ABENABAP_DYNPROS_CHECKS_AUTO.html"
keywords: ["do", "if", "data", "ABENABAP", "DYNPROS", "CHECKS", "AUTO"]
---

In the PAI event, the dynpro makes a series of automatic input checks. These checks take place before data transports to the ABAP program and before the dynpro flow logic is processed. Before these automatic input checks, a single dialog module can be called using an unconditional module call and with a special function type. This dialog module is usually used to bypass the checks and exit the dynpro directly.

If the automatic input checks find an error, a message appears in the status bar of the screen, and the corresponding fields remain ready for input. The user must correct the input and raise PAI again. The actual PAI processing does not start until there are no more errors.

The automatic input checks are performed in the following order:

[Automatic Input Checks](ABENDYNPRO_AUTO_CHECK_ABEXA.html)

-   Mandatory input
-   If a field is defined as a mandatory field in Screen Painter, the user must enter a value for it before PAI can start.
-   Input format
-   The values entered in an input field must match the data format of the associated dynpro field. For example, the format of a date field with the type `DATS` is an eight-character string with the format `YYYYMMDD`. All characters must be numbers and the characters `MM` and `DD` must be less than or equal to 12 or 31 respectively. The system also checks that the specified day is valid for the month.
-   Checks defined in the ABAP Dictionary
-   If an input field in the Screen Painter is defined by being taken from the ABAP Dictionary, the dynpro checks the following:

-   Does the entered value match any [foreign key relationship](ABENFOREIGN_KEY_DEPENDENCY_GLOSRY.html) with a different database table? This means the check table is checked to verify whether the input value exists as a foreign key in the check table. This check only takes place, however, if the foreign key attribute is set for the input field in the Screen Painter. This input check is not necessarily identical with the [input help](ABENABAP_DYNPROS_VALUE_HELP_AUTO.html). The developers must ensure that the input help represents a subset of the content of the check table.
-   Does the entered value exist as a [fixed value](ABENFIXED_VALUE_GLOSRY.html) of the domain of the field? This means that the definition of the domain of the field in the ABAP Dictionary is checked. The fixed values of the domain can also be used as an input help. The value table of a domain, however, is not checked. It is only used as a default value for the check tables of the fields that reference the domain.

-   If necessary, the input check also triggers a [check on obsolete data](ABENDDIC_DEPRECATION.html).

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpros\_checks.html