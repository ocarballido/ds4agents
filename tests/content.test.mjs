// Estructura del contenido (G06): sustituye a las pruebas de las herramientas de designtokens101.
// Comprueba, sin compilar la web, lo que lib/content.ts exige al leer content/es.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';

const ES = path.join(new URL('..', import.meta.url).pathname, 'content/es');
const PREFIX = /^\d{2}-/;
const sections = fs.readdirSync(ES).filter((n) => PREFIX.test(n));

test('content/es/meta.json lista todas las secciones y solo secciones existentes', () => {
  const { pages } = JSON.parse(fs.readFileSync(path.join(ES, 'meta.json'), 'utf8'));
  const listed = pages.filter((p) => !p.startsWith('---'));
  assert.deepEqual([...listed].sort(), [...sections].sort());
});

for (const section of sections) {
  test(`${section}: meta.json con title y lecciones con frontmatter válido`, () => {
    const meta = JSON.parse(fs.readFileSync(path.join(ES, section, 'meta.json'), 'utf8'));
    assert.ok(meta.title, 'falta title en meta.json');
    const lessons = fs.readdirSync(path.join(ES, section)).filter((f) => f.endsWith('.mdx'));
    assert.ok(lessons.length > 0, 'sección sin lecciones');
    for (const file of lessons) {
      assert.match(file, PREFIX, `${file} sin prefijo NN-`);
      const source = fs.readFileSync(path.join(ES, section, file), 'utf8');
      const block = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source);
      assert.ok(block, `${file}: falta el frontmatter`);
      const fm = parseYaml(block[1]);
      for (const key of ['title', 'description', 'lastReviewed']) assert.ok(fm[key], `${file}: falta ${key}`);
      // C15 de designtokens101: sin guiones largos en el contenido.
      assert.ok(!source.includes('—'), `${file}: contiene un guion largo (—)`);
    }
  });
}
