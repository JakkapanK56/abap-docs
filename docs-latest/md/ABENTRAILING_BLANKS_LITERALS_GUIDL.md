---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTRAILING_BLANKS_LITERALS_GUIDL.html"
abapFile: "ABENTRAILING_BLANKS_LITERALS_GUIDL.html"
type: "abap-reference"
---

## Background

Trailing blanks in text field literals use memory, but are [generally](ABENSTRING_PROCESSING_TRAIL_BLANKS.md) ignored in operand positions, like all data objects of the type `c`. In text string literals they are always relevant, as is the case for all data objects of type `string`.

## Rule

**Do not use trailing blanks in text field literals**

They should also not be specified in literals in any operand positions where trailing blanks are not relevant.

## Details

This rule is designed mainly to make programs more readable. It makes no sense to specify literal characters in places where they are ignored, and raises expectations in users of the program that cannot be met. In particular, this also applies to the text field literal `' '`.

Conversely, specifying the supposedly empty text field literal `''` in places where trailing blanks are respected may be a trap.

## Bad Example

The following simple example demonstrates the full scope of the rule. Any readers with little experience in ABAP would expect the result of the assignment to be a string with length six. In actual fact, the result contains only the three relevant places.

```
DATA text TYPE string. 
 
text = '123   '.
```

The following example demonstrates that the supposedly empty literal `''` actually represents a blank that is not cut off after `SEPARATED BY`. The result is *AB AP*.

```
DATA text TYPE string. 
 
CONCATENATE 'AB' 'AP' INTO text SEPARATED BY ''.
```

## Good Example

Whether the example needs to be improved depends on whether the trailing blanks are required. If the blanks are needed, use a text string literal:

```
text = `123   `.
```

If they are not needed, leave them out:

```
text = '123'.
```

Depending on whether the blank is needed as a separator, either `' '` or ` `` ` must be specified after `SEPARATED BY` to express this clearly.
