/* ═══════════════════════════════════════════════════════════
   BDS Migrator · app.js
   BDS 14/15 → BDS 16 standalone imports
   ═══════════════════════════════════════════════════════════ */

/* ── MAPPING: Módulo → standalone ── */
const BDS_MAP = {
  BcCircleLoadingModule:  { pkg: 'bc-circle-loading',  standalone: ['BcCircleLoadingComponent'] },
  BcSearchModule:         { pkg: 'bc-search',           standalone: ['BcSearchComponent', 'BcSearchLeftComponent', 'BcSearchAdvancedComponent', 'BcSearchAdvancedItemComponent', 'BcSearchResultFilterComponent', 'BcSearchButtonComponent', 'BcSearchContentItemsComponent'] },
  BcInputModule:          { pkg: 'bc-input',            standalone: ['BcInputDirective', 'BcFormFieldComponent'] },
  BcFormFieldModule:      { pkg: 'bc-input',            standalone: ['BcFormFieldComponent', 'BcInputDirective'] },
  BcButtonModule:         { pkg: 'bc-button',           standalone: ['BcButtonDirective'] },
  BcTableModule:          { pkg: 'bc-table',            standalone: ['BcTableDirective', 'BcCellDirective', 'BcTableContainerComponent', 'BcTableContentComponent', 'BcTableHeaderComponent', 'BcTableFooterComponent', 'BcTableDropdownComponent'] },
  BcPaginatorV2Module:    { pkg: 'bc-paginator-v2',     standalone: ['BcPaginatorV2Component'] },
  BcPaginatorModule:      { pkg: 'bc-paginator',        standalone: ['BcPaginatorComponent'] },
  BcIconModule:           { pkg: 'bc-icon',             standalone: ['BcIconComponent'] },
  BcModalModule:          { pkg: 'bc-modal',            standalone: ['BcModalComponent'] },
  BcBreadcrumbModule:     { pkg: 'bc-breadcrumb',       standalone: ['BcBreadcrumbComponent'] },
  BcShortcutModule:       { pkg: 'bc-shortcut',         standalone: ['BcShortcutGroupComponent', 'BcShortcutComponent'] },
  BcStepperModule:        { pkg: 'bc-stepper',          standalone: ['BcStepperComponent'] },
  BcAlertModule:          { pkg: 'bc-alert',            standalone: ['BcAlertComponent'] },
  BcPictogramModule:      { pkg: 'bc-pictogram',        standalone: ['BcPictogramComponent'] },
  BcTooltipModule:        { pkg: 'bc-tooltip',          standalone: ['BcTooltipDirective'] },
  BcAccordionModule:      { pkg: 'bc-accordion',        standalone: ['BcAccordionComponent', 'BcAccordionItemComponent'] },
  BcTabsModule:           { pkg: 'bc-tabs',             standalone: ['BcTabsComponent', 'BcTabComponent'] },
  BcRadioModule:          { pkg: 'bc-radio',            standalone: ['BcRadioComponent'] },
  BcCheckboxModule:       { pkg: 'bc-checkbox',         standalone: ['BcCheckboxComponent'] },
  BcSelectModule:         { pkg: 'bc-select',           standalone: ['BcSelectComponent'] },
  BcCardModule:           { pkg: 'bc-card',             standalone: ['BcCardComponent'] },
  BcTagModule:            { pkg: 'bc-tag',              standalone: ['BcTagComponent'] },
  BcChipModule:           { pkg: 'bc-chip',             standalone: ['BcChipComponent'] },
  BcBadgeModule:          { pkg: 'bc-badge',            standalone: ['BcBadgeComponent'] },
  BcProgressModule:       { pkg: 'bc-progress',         standalone: ['BcProgressComponent'] },
  BcToggleModule:         { pkg: 'bc-toggle',           standalone: ['BcToggleComponent'] },
  BcUploadModule:         { pkg: 'bc-upload',           standalone: ['BcUploadComponent'] },
  BcDatepickerModule:     { pkg: 'bc-datepicker',       standalone: ['BcDatepickerComponent'] },
  BcSliderModule:         { pkg: 'bc-slider',           standalone: ['BcSliderComponent'] },
  BcNotificationModule:   { pkg: 'bc-notification',     standalone: ['BcNotificationComponent'] },
  BcSpinnerModule:        { pkg: 'bc-spinner',          standalone: ['BcSpinnerComponent'] },
  BcDropdownModule:       { pkg: 'bc-dropdown',         standalone: ['BcDropdownComponent'] },
  BcMenuModule:           { pkg: 'bc-menu',             standalone: ['BcMenuComponent'] },
  BcStepperV2Module:      { pkg: 'bc-stepper-v2',       standalone: ['BcStepperV2Component'] },
  BcAlertDialogModule:    { pkg: 'bc-alert-dialog',     standalone: ['BcAlertDialogComponent'] },
};

/* ── MAPPING: Tags HTML → módulo ── */
const HTML_TAG_MAP = {
  'bc-circle-loading':       'BcCircleLoadingModule',
  'bc-search':               'BcSearchModule',
  'bc-search-left':          'BcSearchModule',
  'bc-search-advanced':      'BcSearchModule',
  'bc-search-item-advanced': 'BcSearchModule',
  'bc-search-result-filter': 'BcSearchModule',
  'bc-search-button':        'BcSearchModule',
  'bc-search-content-items': 'BcSearchModule',
  'bc-table-container':      'BcTableModule',
  'bc-table-content':        'BcTableModule',
  'bc-table-header':         'BcTableModule',
  'bc-table-footer':         'BcTableModule',
  'bc-table-dropdown':       'BcTableModule',
  'bc-paginator-v2':         'BcPaginatorV2Module',
  'bc-paginator':            'BcPaginatorModule',
  'bc-modal':                'BcModalModule',
  'bc-breadcrumb':           'BcBreadcrumbModule',
  'bc-pictogram':            'BcPictogramModule',
  'bc-shortcut':             'BcShortcutModule',
  'bc-shortcut-group':       'BcShortcutModule',
  'bc-accordion':            'BcAccordionModule',
  'bc-tabs':                 'BcTabsModule',
  'bc-radio':                'BcRadioModule',
  'bc-checkbox':             'BcCheckboxModule',
  'bc-select':               'BcSelectModule',
  'bc-card':                 'BcCardModule',
  'bc-tag':                  'BcTagModule',
  'bc-chip':                 'BcChipModule',
  'bc-badge':                'BcBadgeModule',
  'bc-progress':             'BcProgressModule',
  'bc-toggle':               'BcToggleModule',
  'bc-upload':               'BcUploadModule',
  'bc-datepicker':           'BcDatepickerModule',
  'bc-slider':               'BcSliderModule',
  'bc-notification':         'BcNotificationModule',
  'bc-spinner':              'BcSpinnerModule',
  'bc-icon':                 'BcIconModule',
  'bc-form-field':           'BcInputModule',
  'bc-dropdown':             'BcDropdownModule',
  'bc-menu':                 'BcMenuModule',
};

/* ── MAPPING: Directivas de atributo → info ── */
const ATTR_MAP = {
  'bc-input':      { module: 'BcInputModule',  standalone: 'BcInputDirective',     pkg: 'bc-input' },
  'bc-cell':       { module: 'BcTableModule',  standalone: 'BcCellDirective',      pkg: 'bc-table' },
  'bc-table':      { module: 'BcTableModule',  standalone: 'BcTableDirective',     pkg: 'bc-table' },
  'bc-button':     { module: 'BcButtonModule', standalone: 'BcButtonDirective',    pkg: 'bc-button' },
  'bc-input-file': { module: 'BcUploadModule', standalone: 'BcInputFileDirective', pkg: 'bc-upload' },
};

/* ═══════════════════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════════════════ */
let mode = 'ts';

/* ═══════════════════════════════════════════════════════════
   MODE
   ═══════════════════════════════════════════════════════════ */
function setMode(m) {
  mode = m;
  ['ts', 'html', 'both'].forEach(id =>
    document.getElementById('tab-' + id).classList.toggle('active', id === m)
  );
  document.getElementById('tsBlock').style.display   = m === 'html' ? 'none' : 'block';
  document.getElementById('htmlBlock').style.display = m === 'ts'   ? 'none' : 'block';
  document.getElementById('inputGrid').className = 'input-grid' + (m === 'both' ? '' : ' single');
  clearResults();
}

/* ═══════════════════════════════════════════════════════════
   DETECT
   ═══════════════════════════════════════════════════════════ */
function detectFromHTML(html) {
  const modules = new Set();
  const attrs   = new Set();

  for (const [tag, mod] of Object.entries(HTML_TAG_MAP)) {
    if (new RegExp('<' + tag.replace(/-/g, '\\-') + '[\\s>/]').test(html)) {
      modules.add(mod);
    }
  }

  for (const [attr, info] of Object.entries(ATTR_MAP)) {
    if (new RegExp('\\b' + attr.replace(/-/g, '\\-') + '\\b').test(html)) {
      modules.add(info.module);
      attrs.add(attr);
    }
  }

  return { modules: [...modules], attrs: [...attrs] };
}

function buildPkgGroups(moduleNames) {
  const groups = {};
  for (const name of moduleNames) {
    const info = BDS_MAP[name];
    if (!info) continue;
    if (!groups[info.pkg]) groups[info.pkg] = new Set();
    info.standalone.forEach(s => groups[info.pkg].add(s));
  }
  return groups;
}

/* ═══════════════════════════════════════════════════════════
   MIGRATE
   ═══════════════════════════════════════════════════════════ */
function migrateTS(ts, html) {
  const detected = new Set();
  const attrs    = new Set();

  // Detectar módulos del TS
  for (const name of Object.keys(BDS_MAP)) {
    if (new RegExp('\\b' + name + '\\b').test(ts)) detected.add(name);
  }

  // Detectar del HTML si se provee
  if (html) {
    const { modules, attrs: a } = detectFromHTML(html);
    modules.forEach(m => detected.add(m));
    a.forEach(x => attrs.add(x));
  }

  if (!detected.size) return null;

  let result = ts;

  // Eliminar líneas import de módulos viejos
  for (const name of detected) {
    result = result.replace(
      new RegExp(`import\\s*\\{[^}]*\\b${name}\\b[^}]*\\}\\s*from\\s*['"][^'"]+['"];?\\r?\\n?`, 'g'),
      ''
    );
  }

  // Construir grupos de paquete y nuevas líneas import
  const groups   = buildPkgGroups([...detected]);
  const newLines = Object.entries(groups)
    .map(([pkg, names]) => `import { ${[...names].join(', ')} } from '@bancolombia/design-system-web/${pkg}';`)
    .join('\n');

  // Insertar al inicio del archivo
  const firstImport = result.search(/^import /m);
  result = firstImport >= 0
    ? result.substring(0, firstImport) + newLines + '\n' + result.substring(firstImport)
    : newLines + '\n' + result;

  // Reemplazar bloque imports: [...]
  result = result.replace(/imports:\s*\[([^\]]*)\]/s, (_, inner) => {
    let cleaned = inner;
    for (const name of detected) {
      cleaned = cleaned.replace(new RegExp(`\\b${name}\\b,?\\s*`, 'g'), '');
    }
    const existing = cleaned.split(',').map(s => s.trim()).filter(s => s && !BDS_MAP[s]);
    const allNew   = [...new Set(Object.values(groups).flatMap(s => [...s]))];
    const combined = [...new Set([...allNew, ...existing])];
    const fmt = combined.length > 3
      ? '\n        ' + combined.join(',\n        ') + ',\n    '
      : combined.join(', ');
    return `imports: [${fmt}]`;
  });

  result = result.replace(/\n{3,}/g, '\n\n');

  const replacements    = [...detected].map(name => ({ from: name, to: BDS_MAP[name]?.standalone || [], type: 'module' }));
  const attrReplacements = [...attrs].map(a => ({ from: a, to: [ATTR_MAP[a].standalone], type: 'attr' }));

  return {
    result,
    replacements: [...replacements, ...attrReplacements],
    detected: [...detected],
    attrs: [...attrs],
  };
}

function migrateHTMLOnly(html) {
  const { modules, attrs } = detectFromHTML(html);
  if (!modules.length) return null;

  const groups = buildPkgGroups(modules);
  const lines  = Object.entries(groups).map(
    ([pkg, names]) => `import { ${[...names].join(', ')} } from '@bancolombia/design-system-web/${pkg}';`
  );
  const allNew = [...new Set(Object.values(groups).flatMap(s => [...s]))];

  const result =
    `// Imports para el tope del .ts\n` +
    lines.join('\n') +
    `\n\n// Bloque imports:[]\nimports: [\n    ` +
    allNew.join(',\n    ') +
    `\n]`;

  const replacements = modules.map(n => ({ from: n, to: BDS_MAP[n]?.standalone || [], type: 'module' }));
  const attrR        = attrs.map(a  => ({ from: a, to: [ATTR_MAP[a].standalone],     type: 'attr' }));

  return {
    result,
    replacements: [...replacements, ...attrR],
    detected: modules,
    attrs,
  };
}

/* ═══════════════════════════════════════════════════════════
   RUN
   ═══════════════════════════════════════════════════════════ */
function migrate() {
  const ts   = document.getElementById('inputTs').value.trim();
  const html = document.getElementById('inputHtml').value.trim();
  clearResults();

  let res = null;
  if      (mode === 'ts')   res = migrateTS(ts, '');
  else if (mode === 'html') res = migrateHTMLOnly(html);
  else                      res = migrateTS(ts, html);

  if (!res) {
    document.getElementById('emptyState').style.display = 'block';
    return;
  }

  renderResults(res);
}

/* ═══════════════════════════════════════════════════════════
   RENDER
   ═══════════════════════════════════════════════════════════ */
function renderResults(res) {
  const modCount        = res.detected.length;
  const attrCount       = res.attrs ? res.attrs.length : 0;
  const standaloneCount = [...new Set(res.replacements.flatMap(r => r.to))].length;

  // KPI pills
  document.getElementById('kpiRow').innerHTML =
    `<span class="kpi-pill modules">${modCount} módulo${modCount !== 1 ? 's' : ''}</span>` +
    (attrCount ? `<span class="kpi-pill attrs">${attrCount} directiva${attrCount !== 1 ? 's' : ''} atributo</span>` : '') +
    `<span class="kpi-pill standalone">${standaloneCount} standalone</span>`;

  // Diff rows
  document.getElementById('diffBody').innerHTML = res.replacements.map(r => `
    <div class="diff-row">
      <span class="${r.type === 'attr' ? 'diff-attr' : 'diff-old'}">${r.from}</span>
      <span class="diff-arrow">→</span>
      <div class="diff-new">${r.to.map(t => `<span>${t}</span>`).join('')}</div>
    </div>`
  ).join('');

  // Output con syntax highlight
  document.getElementById('outputTitle').textContent =
    mode === 'html' ? 'imports generados' : 'archivo .ts migrado';
  document.getElementById('outputPre').innerHTML = syntaxHL(res.result);
  document.getElementById('outputPre')._raw = res.result;

  document.getElementById('resultsWrap').style.display = 'flex';
  document.getElementById('statusBar').textContent =
    `✓ ${modCount} módulo${modCount !== 1 ? 's' : ''} migrado${modCount !== 1 ? 's' : ''} · ${standaloneCount} standalone imports`;
}

/* ═══════════════════════════════════════════════════════════
   SYNTAX HIGHLIGHT
   ═══════════════════════════════════════════════════════════ */
function syntaxHL(code) {
  return code
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/(import)\s/g,    '<span class="s-import">$1</span> ')
    .replace(/\bfrom\b/g,      '<span class="s-from">from</span>')
    .replace(/('[@\w\/\-\.]+bancolombia[^']*')/g, '<span class="s-pkg">$1</span>')
    .replace(/\b(Bc[A-Z]\w+(?:Component|Directive|Module|Pipe))\b/g, '<span class="s-name">$1</span>')
    .replace(/(imports|providers|declarations|exports):/g, '<span class="s-key">$1</span>:')
    .replace(/(\/\/[^\n]*)/g,  '<span class="s-comment">$1</span>');
}

/* ═══════════════════════════════════════════════════════════
   UTILS
   ═══════════════════════════════════════════════════════════ */
function copyOutput() {
  const raw = document.getElementById('outputPre')._raw
    || document.getElementById('outputPre').textContent;

  navigator.clipboard.writeText(raw).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = '✓ copiado';
    btn.classList.add('copied');
    showToast('Código copiado al portapapeles');
    setTimeout(() => {
      btn.textContent = '📋 copiar';
      btn.classList.remove('copied');
    }, 1800);
  });
}

function clearAll() {
  document.getElementById('inputTs').value   = '';
  document.getElementById('inputHtml').value = '';
  clearResults();
  document.getElementById('statusBar').textContent = '';
}

function clearResults() {
  document.getElementById('resultsWrap').style.display = 'none';
  document.getElementById('emptyState').style.display  = 'none';
  document.getElementById('diffBody').innerHTML        = '';
  document.getElementById('outputPre').innerHTML       = '';
  document.getElementById('kpiRow').innerHTML          = '';
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

/* ── Init ── */
document.getElementById('currentDate').textContent =
  new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' });