import { assert }       from 'chai';

import parsers          from './parsers';
import * as testconfig  from './testconfig';

if (testconfig.modules['moduleES7'])
{
   parsers.forEach((parser) =>
   {
      if (parser.name !== 'babylon' && parser.name !== 'babelParser') { return; }

      suite(`(${parser.name}): module (ES7):`, () =>
      {
         suite('object spread / rest:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('methodAggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.methodAggregate.sloc.logical, 7);
            });

            test('methodAggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.methodAggregate.cyclomatic, 1);
            });

            test('methodAggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.operators.total, 9);
            });

            test('methodAggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 5);
            });

            test('methodAggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.operands.total, 13);
            });

            test('methodAggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 9);
            });

            test('methodAggregate has correct Halstead length', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.length, 22);
            });

            test('methodAggregate has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.vocabulary, 14);
            });

            test('methodAggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.difficulty, 3.611);
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 119.941);
            });

            test('methodAggregate has correct parameter count', () =>
            {
               assert.strictEqual(report.methodAggregate.paramCount, 0);
            });
         });

         suite('object spread / rest (abbreviated React example):', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                  'function expectTree(rootID, expectedTree, parentPath) {\n'
                + '    var childIDs = [];\n'
                + '    var path = "TEST";\n'
                + '    if (expectedTree.children !== undefined) {\n'
                + '        for (var i = 0; i < childIDs.length; i++) {\n'
                + '           expectTree(\n'
                + '               childIDs[i],\n'
                + '               { parentID: rootID, ...expectedTree.children[i] },\n'
                + '               path,\n'
                + '           );\n'
                + '        }\n'
                + '    }\n'
                + '}\n');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('methodAggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.methodAggregate.sloc.logical, 7);
            });

            test('methodAggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.methodAggregate.cyclomatic, 4);
            });

            test('functions has correct length', () =>
            {
               assert.lengthOf(report.methods, 1);
            });

            test('method has correct name', () =>
            {
               assert.strictEqual(report.methods[0].name, 'expectTree');
            });

            test('method has correct physical lines of code', () =>
            {
               assert.strictEqual(report.methods[0].sloc.physical, 13);
            });

            test('method has correct logical lines of code', () =>
            {
               assert.strictEqual(report.methods[0].sloc.logical, 6);
            });

            test('method has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.methods[0].cyclomatic, 3);
            });

            test('method has correct parameter count', () =>
            {
               assert.strictEqual(report.methods[0].paramCount, 3);
            });

            test('methodAggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.operators.total, 22);
            });

            test('methodAggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 14);
            });

            test('methodAggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.operands.total, 25);
            });

            test('methodAggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 13);
            });

            test('methodAggregate has correct Halstead length', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.length, 47);
            });

            test('methodAggregate has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.vocabulary, 27);
            });

            test('methodAggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.difficulty, 13.462);
            });

            test('method has correct Halstead length', () =>
            {
               assert.strictEqual(report.methods[0].halstead.length, 42);
            });

            test('method has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.methods[0].halstead.vocabulary, 25);
            });

            test('method has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.methods[0].halstead.difficulty, 11.375);
            });

            test('method has correct Halstead volume', () =>
            {
               assert.strictEqual(report.methods[0].halstead.volume, 195.042);
            });

            test('method has correct Halstead effort', () =>
            {
               assert.strictEqual(report.methods[0].halstead.effort, 2218.602);
            });

            test('method has correct Halstead bugs', () =>
            {
               assert.strictEqual(report.methods[0].halstead.bugs, 0.065);
            });

            test('method has correct Halstead time', () =>
            {
               assert.strictEqual(report.methods[0].halstead.time, 123.256);
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 124.991);
            });

            test('methodAggregate has correct parameter count', () =>
            {
               assert.strictEqual(report.methodAggregate.paramCount, 3);
            });
         });
      });
   });
}