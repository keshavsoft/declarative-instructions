# declarative-instructions

A versioned JSON catalog of instructions for assembling JSON UI specifications.

## The story

A renderer needs to know where to read values, which transformation to apply, which template to use, and where to place the result. This package records those decisions as data so a compatible consumer can inspect and execute them.

The package exports the catalog from its entry point. It does not run the instructions, own the input state, or mount browser DOM.

The V4 catalog covers table construction and features, forms, selects, datalists, accordions, cards, lists, and menus. Entries can describe one operation or an ordered group of operations.

## How an instruction describes work

The fields depend on the operation, but commonly include:

- <code>sourcePath</code> locates input values in the consumer’s state.
- <code>func</code> names the transformation to apply. A null function is used for direct template actions.
- <code>templateKey</code> selects a template from the spec catalog. Two-dimensional operations can name separate row and column templates.
- <code>destinationPath</code> identifies where the result is written. Static actions can also specify an action such as <code>push</code> or <code>unshift</code>.
- <code>skipIf</code> is an optional condition for skipping an operation when matching content already exists.

For example, the V4 body instruction reads row data and column metadata, builds table rows from two templates, and targets the table body:

~~~~json
{
  "buildBody": {
    "sourcePath": {
      "rows": "$.data.data",
      "columns": "$.data.columns"
    },
    "templateKey": {
      "rowKey": "buildBodyTr",
      "columnKey": "buildBodyCell"
    },
    "func": "rowOnColumn",
    "destinationPath": {
      "jsonPath": "$..*[?@.attributes['data-role'] == 'table-body'].children"
    }
  }
}
~~~~

## Use the catalog

~~~~js
import instructions from "declarative-instructions";

const bodyInstruction = instructions.buildBody;
console.log(bodyInstruction);
~~~~

The catalog is data for a consumer that understands this instruction contract. Execution and DOM rendering belong to other parts of an application.

## Source and documentation

- [V4 instruction catalog](src/v4/instructions.json)
- [Documentation site source](docs/index.html)
- [Package entry point](src/index.js)

## Install

~~~~bash
npm install declarative-instructions
~~~~

## License

MIT © KeshavSoft.

