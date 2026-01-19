---
title: "ABENBC_AUTHORITY_CHECK"
description: |
  ABENBC_AUTHORITY_CHECK - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBC_AUTHORITY_CHECK.htm"
abapFile: "ABENBC_AUTHORITY_CHECK.html"
keywords: ["if", "try", "method", "class", "data", "ABENBC", "AUTHORITY", "CHECK"]
---

Authorizations are a method used to protect functions or objects within an [AS ABAP](ABENAS_ABAP_GLOSRY.html). The programmer of a function determines where authorizations are checked and how. The user administrator determines which users can execute a function or access an object.

The following terms are central to the SAP authorization concept:

Smallest unit of an authorization object. An authorization field either represents data, such as a key field of a database table, or activities, such as Read or Change. Activities are specified as IDs, which are stored in the database table `TACT` and the customer-specific table `TACTZ`.

A [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) on which authorizations are based. An authorization object consists of up to 10 authorization fields. Combinations of authorization fields, which represent data and activities, are used to grant and check authorizations. Authorization objects are grouped together organizationally in authorization object classes.

An entry in the user master record as part of an authorization profile. An authorization consists of complete or generic values for the authorization fields of an authorization object. The combination determines which activities a user can use to access certain data.

A combination of multiple authorizations. Multiple authorization profiles can be assigned to a single authorization. Authorizations are assigned to users by specifying authorization profiles in the user master record.

A user master record must exist before a user can log on to an [AS ABAP](ABENAS_ABAP_GLOSRY.html). The master record determines which actions users are allowed to execute and which authorizations they are assigned. Default settings, such as the format in which decimal places are displayed in lists, are also stored in the user master record. An authorization profile can be assigned to users as often as required.

A check to determine whether the current user of a program has a certain authorization. The check compares a value with the corresponding entries for each authorization field of an authorization object in the user master record. [Check indicators](ABENCHECK_INDICATOR_GLOSRY.html) control whether an authorization check is performed.

Authorization checks are made explicitly using the ABAP statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html) or implicitly.

The entry of authorization profiles in the user master record.

Composite profiles were used before the profile generator for role maintenance was introduced in manual maintenance of profiles to organize the authorization structure. They are not, however, absolutely necessary. An authorization profile can be assigned to composite profiles as often as required.

-   [ABAP CDS](ABENABAP_CDS_GLOSRY.html) enables [access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) based on implicit evaluations of [access conditions](ABENACCESS_CONDITION_GLOSRY.html).

abenabap.html abenabap\_reference.html