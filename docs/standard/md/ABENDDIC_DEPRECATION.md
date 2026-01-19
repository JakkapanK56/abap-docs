---
title: "ABENDDIC_DEPRECATION"
description: |
  ABENDDIC_DEPRECATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DEPRECATION.htm"
abapFile: "ABENDDIC_DEPRECATION.html"
keywords: ["if", "try", "method", "class", "data", "ABENDDIC", "DEPRECATION"]
---

Rows in [check tables](ABENDDIC_DATABASE_TABLES_CHECKTAB.html) can be flagged as deprecated or invalid. If the check on deprecated data is active, the flag modifies the [input check](ABENABAP_DYNPROS_CHECKS.html) and [input help](ABENABAP_DYNPROS_VALUE_HELP.html) in dynpros or Web Dynpros.

Checks on deprecated data are active by default when an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is created. This setting can be modified and read using methods of the class `CL_CONFIGURATION_DEPRECATION`:

A column with the predefined name `CONFIGDEPRECATIONCODE` is used to flag deprecated data in check tables. The data type of this column must be defined using the data element `CONFIG_DEPRECATION_CODE`. The following values are valid for this column:

If the deprecated data check is enabled, the implicit [input checks](ABENABAP_DYNPROS_CHECKS.html) and [input helps](ABENABAP_DYNPROS_VALUE_HELP.html) in dynpros and in Web Dynpro that are based on check tables evaluate the column `CONFIGDEPRECATIONCODE` as follows:

[Flagging of Deprecated Data in Check Tables](ABENDDIC_DEPRECATION_ABEXA.html)

-   The parameter `I_RESPECT_OBSOLETE_VALUES` of the method `SET_DEPRECATION_ACTIVE` can be used to enable and disable the deprecated data check for the current internal session.
-   If the check on deprecated data is active, the return value of the method `DEPRECATION_IS_ACTIVE` has the value of `abap_true`.

-   Input check:

-   If a deprecated value is entered, a warning occurs.
-   If an invalid value is entered, an error message occurs.

-   Input help:

-   Valid data and the deprecated data is displayed. Invalid data is not displayed.

-   If input helps are based on [search helps](ABENSEARCH_HELP_GLOSRY.html) linked with check tables, the deprecated data check is active and runs as described above.
-   If the input check is implemented using a [PAI](ABENPAI_GLOSRY.html) module, the column `CONFIGDEPRECATIONCODE` must be evaluated in the PAI module itself.
-   [SAP HANA databases](ABENHANA_DATABASE_GLOSRY.html) use the more universal concept of [data aging](ABENDATA_AGING_GLOSRY.html), which is applied to each access using the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html).
-   Instead of `CONFIGDEPRECATIONCODE`, also the obsolete name `CONFIGURATIONDEPRECATIONCODE` can still be used.

**Value** **Meaning** Blank The entry is valid. W The entry is deprecated and should no longer be used. E The entry is invalid and must not be used. abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_sema.html abenddic\_database\_tables\_semasspec.html abenddic\_database\_tables\_forkeyrel.html