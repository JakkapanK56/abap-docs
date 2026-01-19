---
title: "ABENBDL_SIDE_EFFECTS_TARGET"
description: |
  ABENBDL_SIDE_EFFECTS_TARGET - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_SIDE_EFFECTS_TARGET.htm"
abapFile: "ABENBDL_SIDE_EFFECTS_TARGET.html"
keywords: ["update", "delete", "if", "case", "ABENBDL", "SIDE", "EFFECTS", "TARGET"]
---

`... field \{ MyField            | *            | _assoc.MyField \}\     | permissions \{( field MyField )                   | ( action MyAction )                   | ( _assoc.\{field | action\} )                   | ( update | delete )                   | ( \{create | update | delete\} _assoc ) \}\     | $self     | entity _MyAssoc     | messages`

[1. `... field ...`](#ABAP_VARIANT_1@1@)

[2. `... permissions ...`](#ABAP_VARIANT_2@1@)

[3. `... $self`](#ABAP_VARIANT_3@1@)

[4. `... entity`](#ABAP_VARIANT_4@1@)

[5. `... messages`](#ABAP_VARIANT_5@1@)

This topic lists the BO properties that can be used as targets `Targets` for [side effects](ABENBDL_SIDE_EFFECTS.html).

One type of side effect can affect multiple targets. The specifier determining the type of target must be defined explicitly for each target. Example:
`side effects \{ field MyField affects field Field1, field Field2, action Action1, action Action2[, ...]` \\}

It is possible to group multiple targets using parentheses. For example, the following groupings are possible:

The [feature](ABENRAP_FEATURE_CONTROL_GLOSRY.html) and [authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html) of the specified properties are reloaded when the side effect is triggered. The following permissions are available:

You can also specify permissions for elements and operations of associated entities via association path:

Multiple permissions can be listed in parentheses, separated by commas. Example: `permissions(action MyActionFC, update)`.

The current RAP BO entity is reloaded.

**Limitation:** In case of the trigger property `$self`, it is not allowed to specify the current entity `$self` as target.

The specified associated entity `_MyAssoc` is reloaded when the side effect is triggered.

All messages stored in the [response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html)\\ `reported` are reloaded when the side effect is triggered.

-   `... affects field(Field1, Field2) ...`
-   `... affects field _Assoc.(Field1, Field2) ...`
-   `... affects permissions(field (Field1, Field2)) ...`
-   `... affects permissions(field Field1, field Field2) ...`
-   `... affects entity (_Assoc1, _Assoc2) ...`
-   `... affects entity _Assoc1.(_ItemAssoc1, _ItemAssoc2) ...`

-   The specified field `MyField` is reloaded when the side effect is triggered. One or more fields can be specified as side effect target.
-   The asterisk `*` reloads all fields of the same entity instance.
-   It is also possible to specify fields from other entity instances as targets. They must be defined via an association path `_assoc.MyField`.
-   **Limitation:** In case of the trigger property `$self`, the target cannot be a field of the current entity `$self`. However, fields from associated entities can be defined using path expressions.

-   Fields: `permissions(field MyField)`
-   Actions: `permissions(field MyField)`
-   Update or delete operation: `permissions (update|delete)`

-   Fields and actions: `permissions ( _assoc.\{field|action\} )`
-   Operations: `permissions ( \{create|update|delete\} _assoc )`

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_side\_effects.html