# BDS Migrator · 14/15 → 16

Herramienta local para migrar imports del **Bancolombia Design System** de módulos (`BcXModule`) a componentes standalone, compatible con Angular standalone components (BDS 16).

> Sin servidor. Sin instalación. Abre `index.html` en el navegador y listo.

---

## Estructura del proyecto

```
bds-migrator/
├── index.html    # Estructura HTML
├── styles.css    # Estilos y design tokens
└── app.js        # Lógica de migración y mappings
```

---

## Cómo usar

1. Abre `index.html` directamente en el navegador
2. Selecciona el modo según lo que vayas a pegar:

| Modo | Cuándo usarlo |
|------|--------------|
| **TypeScript** | Tienes el `.ts` del componente |
| **HTML** | Solo tienes el template `.html` |
| **TS + HTML** | Tienes ambos archivos (recomendado) |

3. Pega el código en el área de texto
4. Haz clic en **▶ Migrar imports**
5. Revisa el diff de cambios y copia el resultado

---

## Qué detecta y migra

### Módulos → standalone components

| Módulo BDS 14/15 | Standalone BDS 16 |
|------------------|-------------------|
| `BcCircleLoadingModule` | `BcCircleLoadingComponent` |
| `BcSearchModule` | `BcSearchComponent`, `BcSearchLeftComponent`, `BcSearchAdvancedComponent`, `BcSearchAdvancedItemComponent`, `BcSearchResultFilterComponent`, `BcSearchButtonComponent`, `BcSearchContentItemsComponent` |
| `BcInputModule` | `BcInputDirective`, `BcFormFieldComponent` |
| `BcFormFieldModule` | `BcFormFieldComponent`, `BcInputDirective` |
| `BcButtonModule` | `BcButtonDirective` |
| `BcTableModule` | `BcTableDirective`, `BcCellDirective`, `BcTableContainerComponent`, `BcTableContentComponent`, `BcTableHeaderComponent`, `BcTableFooterComponent`, `BcTableDropdownComponent` |
| `BcPaginatorV2Module` | `BcPaginatorV2Component` |
| `BcPaginatorModule` | `BcPaginatorComponent` |
| `BcIconModule` | `BcIconComponent` |
| `BcModalModule` | `BcModalComponent` |
| `BcBreadcrumbModule` | `BcBreadcrumbComponent` |
| `BcShortcutModule` | `BcShortcutGroupComponent`, `BcShortcutComponent` |
| `BcStepperModule` | `BcStepperComponent` |
| `BcAlertModule` | `BcAlertComponent` |
| `BcPictogramModule` | `BcPictogramComponent` |
| `BcTooltipModule` | `BcTooltipDirective` |
| `BcAccordionModule` | `BcAccordionComponent`, `BcAccordionItemComponent` |
| `BcTabsModule` | `BcTabsComponent`, `BcTabComponent` |
| `BcRadioModule` | `BcRadioComponent` |
| `BcCheckboxModule` | `BcCheckboxComponent` |
| `BcSelectModule` | `BcSelectComponent` |
| `BcCardModule` | `BcCardComponent` |
| `BcTagModule` | `BcTagComponent` |
| `BcChipModule` | `BcChipComponent` |
| `BcBadgeModule` | `BcBadgeComponent` |
| `BcProgressModule` | `BcProgressComponent` |
| `BcToggleModule` | `BcToggleComponent` |
| `BcUploadModule` | `BcUploadComponent` |
| `BcDatepickerModule` | `BcDatepickerComponent` |
| `BcSliderModule` | `BcSliderComponent` |
| `BcNotificationModule` | `BcNotificationComponent` |
| `BcSpinnerModule` | `BcSpinnerComponent` |
| `BcDropdownModule` | `BcDropdownComponent` |
| `BcMenuModule` | `BcMenuComponent` |
| `BcStepperV2Module` | `BcStepperV2Component` |
| `BcAlertDialogModule` | `BcAlertDialogComponent` |

### Directivas de atributo HTML

Detectadas automáticamente cuando se analiza el template:

| Atributo en HTML | Standalone BDS 16 |
|------------------|-------------------|
| `bc-input` | `BcInputDirective` |
| `bc-cell` | `BcCellDirective` |
| `bc-table` | `BcTableDirective` |
| `bc-button` | `BcButtonDirective` |
| `bc-input-file` | `BcInputFileDirective` |

---

## Ejemplo

**Entrada `.ts` (BDS 14/15):**
```typescript
import { BcTableModule } from '@bancolombia/design-system-web/bc-table';
import { BcSearchModule } from '@bancolombia/design-system-web/bc-search';
import { BcCircleLoadingModule } from '@bancolombia/design-system-web/bc-circle-loading';

@Component({
  selector: 'app-channels',
  imports: [BcTableModule, BcSearchModule, BcCircleLoadingModule],
})
export class ChannelsComponent { }
```

**Salida generada (BDS 16):**
```typescript
import { BcTableDirective, BcCellDirective, BcTableContainerComponent, BcTableContentComponent, BcTableHeaderComponent, BcTableFooterComponent, BcTableDropdownComponent } from '@bancolombia/design-system-web/bc-table';
import { BcSearchComponent, BcSearchLeftComponent, BcSearchAdvancedComponent, BcSearchAdvancedItemComponent, BcSearchResultFilterComponent, BcSearchButtonComponent, BcSearchContentItemsComponent } from '@bancolombia/design-system-web/bc-search';
import { BcCircleLoadingComponent } from '@bancolombia/design-system-web/bc-circle-loading';

@Component({
  selector: 'app-channels',
  imports: [
        BcTableDirective,
        BcCellDirective,
        BcTableContainerComponent,
        BcTableContentComponent,
        BcTableHeaderComponent,
        BcTableFooterComponent,
        BcTableDropdownComponent,
        BcSearchComponent,
        BcSearchLeftComponent,
        BcSearchAdvancedComponent,
        BcSearchAdvancedItemComponent,
        BcSearchResultFilterComponent,
        BcSearchButtonComponent,
        BcSearchContentItemsComponent,
        BcCircleLoadingComponent,
  ],
})
export class ChannelsComponent { }
```

---

## Agregar nuevos módulos al mapeo

Edita el objeto `BDS_MAP` en `app.js`:

```js
const BDS_MAP = {
  // ...módulos existentes...
  BcNuevoModulo: {
    pkg: 'bc-nuevo-paquete',
    standalone: ['BcNuevoComponent', 'BcNuevoDirective'],
  },
};
```

Si el módulo tiene tags propios en el HTML, agrégalo también a `HTML_TAG_MAP`:

```js
const HTML_TAG_MAP = {
  // ...tags existentes...
  'bc-nuevo-tag': 'BcNuevoModulo',
};
```

Si es una directiva de atributo (se usa como atributo en un elemento HTML nativo), agrégala a `ATTR_MAP`:

```js
const ATTR_MAP = {
  // ...directivas existentes...
  'bc-nuevo-attr': {
    module: 'BcNuevoModulo',
    standalone: 'BcNuevoDirective',
    pkg: 'bc-nuevo-paquete',
  },
};
```

---

## Parte del ecosistema de herramientas dev

| Herramienta | Descripción |
|-------------|-------------|
| **Angular Dep Manager** | Gestión y actualización de dependencias npm |
| **DevStats** | Dashboard de métricas de Azure DevOps |
| **BDS Migrator** | Migración de imports BDS 14/15 → 16 |