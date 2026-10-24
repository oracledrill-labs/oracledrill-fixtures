import test from 'node:test';import assert from 'node:assert/strict';import {sample} from './index.mjs';import {run} from '../oracledrill-scenario-engine/index.mjs';
test('provenance explicitly synthetic',()=>assert.match(sample.provenance,/Synthetic/));
test('covers rejection and valid boundaries',()=>{let r=run(sample);assert.equal(r.summary.expectationFailures,0);assert.ok(r.rows.some(x=>x.guarded.accepted));assert.ok(r.summary.unsafeAcceptsRejected>=7)});
